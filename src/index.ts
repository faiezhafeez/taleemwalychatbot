/**
 * Taleemwaly Chatbot — DeepSeek API Proxy
 * Pakistan Education Assistant
 * Powered by Nationalist Academy
 */

interface Env {
  DEEPSEEK_API_KEY: string;
}

interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface DeepSeekRequest {
  model: string;
  messages: ChatMessage[];
  stream?: boolean;
  max_tokens?: number;
  temperature?: number;
}

interface DeepSeekResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: ChatMessage;
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

interface ErrorResponse {
  error: string;
  details?: string;
}

const CORS_HEADERS: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
};

const DEEPSEEK_API_URL = 'https://api.deepseek.com/chat/completions';
const DEFAULT_MODEL = 'deepseek-chat';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: CORS_HEADERS,
      });
    }

    // Status page for GET /
    if (url.pathname === '/' && request.method === 'GET') {
      return new Response(getStatusPage(), {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }

    // Health check endpoint
    if (url.pathname === '/health' && request.method === 'GET') {
      return new Response(
        JSON.stringify({
          status: 'ok',
          service: 'taleemwaly-chatbot',
          timestamp: new Date().toISOString(),
          hasApiKey: !!env.DEEPSEEK_API_KEY,
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
        }
      );
    }

    // Only POST allowed for chat
    if (request.method !== 'POST') {
      return errorResponse('Method not allowed', 405);
    }

    // Check API key
    if (!env.DEEPSEEK_API_KEY) {
      return errorResponse('API key not configured', 500);
    }

    try {
      const body = (await request.json()) as DeepSeekRequest;

      // Validate request
      if (!body.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
        return errorResponse('Invalid request: messages array is required', 400);
      }

      // Prepare DeepSeek request
      const deepSeekPayload: DeepSeekRequest = {
        model: body.model || DEFAULT_MODEL,
        messages: body.messages,
        stream: false,
        max_tokens: body.max_tokens || 600,
        temperature: body.temperature ?? 0.7,
      };

      // Call DeepSeek API
      const apiResponse = await fetch(DEEPSEEK_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${env.DEEPSEEK_API_KEY}`,
        },
        body: JSON.stringify(deepSeekPayload),
      });

      const data = (await apiResponse.json()) as DeepSeekResponse | { error: { message: string } };

      // Handle DeepSeek errors
      if (!apiResponse.ok) {
        const errorData = data as { error?: { message: string } };
        return errorResponse(
          errorData.error?.message || 'DeepSeek API error',
          apiResponse.status
        );
      }

      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...CORS_HEADERS,
        },
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      return errorResponse('Server error', 500, message);
    }
  },
} satisfies ExportedHandler<Env>;

/**
 * Helper: Error response
 */
function errorResponse(error: string, status: number, details?: string): Response {
  const body: ErrorResponse = { error };
  if (details) body.details = details;

  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
    },
  });
}

/**
 * Helper: Status page HTML
 */
function getStatusPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Taleemwaly Chatbot — Status</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .card {
      max-width: 520px;
      width: 100%;
      background: #fff;
      padding: 48px 40px;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(30, 111, 63, 0.15);
      text-align: center;
    }
    .logo {
      width: 72px;
      height: 72px;
      background: linear-gradient(135deg, #1e6f3f, #0d3b1f);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 36px;
      margin: 0 auto 20px;
    }
    h1 {
      color: #1e6f3f;
      font-size: 24px;
      margin-bottom: 8px;
      font-weight: 800;
    }
    .subtitle {
      color: #64748b;
      font-size: 14px;
      margin-bottom: 28px;
    }
    .status {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 20px;
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-radius: 40px;
      color: #16a34a;
      font-weight: 700;
      font-size: 14px;
      margin-bottom: 28px;
    }
    .status::before {
      content: '';
      width: 10px;
      height: 10px;
      background: #10b981;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }
    .info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 28px;
      text-align: left;
    }
    .info-item {
      background: #f8fafc;
      padding: 14px;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
    }
    .info-label {
      font-size: 11px;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 700;
      margin-bottom: 4px;
    }
    .info-value {
      font-size: 14px;
      color: #1e293b;
      font-weight: 600;
    }
    .footer {
      font-size: 12px;
      color: #94a3b8;
      padding-top: 20px;
      border-top: 1px solid #f1f5f9;
    }
    .footer a {
      color: #1e6f3f;
      text-decoration: none;
      font-weight: 700;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">🎓</div>
    <h1>Taleemwaly Chatbot</h1>
    <p class="subtitle">Pakistan Education Assistant</p>

    <div class="status">Active</div>

    <div class="info">
      <div class="info-item">
        <div class="info-label">Endpoint</div>
        <div class="info-value">POST /</div>
      </div>
      <div class="info-item">
        <div class="info-label">Model</div>
        <div class="info-value">DeepSeek Chat</div>
      </div>
      <div class="info-item">
        <div class="info-label">Region</div>
        <div class="info-value">Global Edge</div>
      </div>
      <div class="info-item">
        <div class="info-label">Version</div>
        <div class="info-value">1.0.0</div>
      </div>
    </div>

    <div class="footer">
      Powered by <a href="https://taleemwaly.blogspot.com" target="_blank">Nationalist Academy</a>
    </div>
  </div>
</body>
</html>`;
}

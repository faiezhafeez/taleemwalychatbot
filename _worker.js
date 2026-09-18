export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // Status page
    if (url.pathname === '/' && request.method === 'GET') {
      return new Response(
        `<!DOCTYPE html><html><head><title>Taleemwaly Chatbot</title><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="font-family:sans-serif;padding:40px;text-align:center;background:#f8fafc"><div style="max-width:600px;margin:0 auto;background:#fff;padding:40px;border-radius:16px;box-shadow:0 10px 40px rgba(0,0,0,.08)"><h1 style="color:#1e6f3f;margin:0 0 10px">🎓 Taleemwaly Chatbot</h1><p style="color:#16a34a;font-size:18px;font-weight:600;margin:0 0 20px">✅ Status: Active</p><p style="color:#64748b;font-size:14px">Pakistan Education Assistant</p><p style="color:#64748b;font-size:13px;margin-top:20px">Powered by Nationalist Academy</p></div></body></html>`,
        { headers: { 'Content-Type': 'text/html' } }
      );
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const body = await request.json();

      const response = await fetch('https://api.deepseek.com/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${env.DEEPSEEK_API_KEY}`,
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      return new Response(JSON.stringify(data), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
  },
};

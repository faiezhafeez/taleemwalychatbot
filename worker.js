<!-- ============================================================= -->
<!-- TALEEMWALY CHATBOT WIDGET FOR BLOGGER (taleemwaly.blogspot.com) -->
<!-- Powered by Nationalist Academy & DeepSeek AI                     -->
<!-- Contact WhatsApp: 03702388998                                    -->
<!-- ============================================================= -->

<div id="tw-chatbot-root">
  <!-- Floating Launcher Button -->
  <button id="tw-launcher-btn" aria-label="Open Taleemwaly Chat" title="Taleemwaly Education Assistant">
    <span class="tw-launcher-icon">
      <!-- Chat Icon SVG -->
      <svg class="tw-icon-chat" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
      <!-- Close Icon SVG -->
      <svg class="tw-icon-close" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </span>
    <span class="tw-badge-ping"></span>
  </button>

  <!-- Chat Window -->
  <div id="tw-chat-window" class="tw-hidden" role="dialog" aria-modal="true" aria-label="Taleemwaly Chatbot">
    <!-- Header -->
    <header class="tw-header">
      <div class="tw-header-info">
        <div class="tw-avatar">
          🎓
          <span class="tw-status-dot"></span>
        </div>
        <div class="tw-title-area">
          <h3 class="tw-title">Taleemwaly</h3>
          <p class="tw-subtitle">Online • Education Assistant</p>
        </div>
      </div>
      <div class="tw-header-actions">
        <button id="tw-clear-btn" title="Clear Conversation" aria-label="Clear chat">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="1 4 1 10 7 10"></polyline>
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
          </svg>
        </button>
        <button id="tw-minimize-btn" title="Close Chat" aria-label="Close chat">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>

    <!-- Message Body -->
    <main id="tw-messages-container" class="tw-messages-body">
      <!-- Welcome Message Card -->
      <div class="tw-message-group tw-bot-group">
        <div class="tw-message-bubble tw-bot-bubble">
          <div class="tw-welcome-content">
            <p><strong>Assalam-o-Alaikum! 👋 Main Taleemwaly hoon.</strong></p>
            <p>Pakistan ke kisi bhi Board (Matric/Inter), AIOU, ya Service Commission (PPSC, FPSC, NTS vaghera) ke baray mein sawal poochein:</p>
          </div>
          <!-- Quick Action Buttons -->
          <div class="tw-quick-actions" id="tw-quick-actions">
            <button class="tw-chip" data-prompt="AIOU Spring/Autumn 2026 assignments ki details dein.">📚 AIOU Assignments</button>
            <button class="tw-chip" data-prompt="Matric & Inter boards ka result kab aye ga aur check karne ka tareeqa?">📊 Matric Result</button>
            <button class="tw-chip" data-prompt="PPSC jobs preparation aur syllabus ke bare mein guide karein.">💼 PPSC Prep</button>
            <button class="tw-chip" data-prompt="NTS / NAT / GAT test schedule aur preparation ki detail batein.">📝 NTS Test</button>
            <button class="tw-chip" data-prompt="CSS aur PMS exam eligibility criteria aur subjects details batayein.">🏛️ CSS Info</button>
            <button class="tw-chip" data-prompt="Matric/Inter aur AIOU ke Guess Papers kahan se milenge?">🎯 Guess Papers</button>
          </div>
        </div>
        <span class="tw-timestamp">Just now</span>
      </div>
    </main>

    <!-- Typing Loading Indicator (Hidden by default) -->
    <div id="tw-typing-indicator" class="tw-typing tw-hidden">
      <span class="tw-dot"></span>
      <span class="tw-dot"></span>
      <span class="tw-dot"></span>
    </div>

    <!-- Input Footer Area -->
    <footer class="tw-footer">
      <form id="tw-chat-form" class="tw-input-bar">
        <input 
          type="text" 
          id="tw-chat-input" 
          placeholder="Type in Roman Urdu, Urdu or English..." 
          autocomplete="off" 
          required 
          maxlength="500"
        />
        <button type="submit" id="tw-send-btn" aria-label="Send message" title="Send">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
          </svg>
        </button>
      </form>
      <div class="tw-branding">
        <span>Powered by <a href="https://taleemwaly.blogspot.com" target="_blank" rel="noopener">Nationalist Academy</a></span>
        <span>•</span>
        <a href="https://wa.me/923702388998" target="_blank" rel="noopener" class="tw-wa-link">WhatsApp: 03702388998</a>
      </div>
    </footer>
  </div>
</div>

<style>
  /* Base Reset for Widget */
  #tw-chatbot-root {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 999999;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  #tw-chatbot-root *,
  #tw-chatbot-root *::before,
  #tw-chatbot-root *::after {
    box-sizing: border-box;
  }

  /* Launcher Button */
  #tw-launcher-btn {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, #0d7a46, #095a33);
    color: #ffffff;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 18px rgba(13, 122, 70, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
    outline: none;
  }

  #tw-launcher-btn:hover {
    transform: scale(1.08);
    box-shadow: 0 8px 24px rgba(13, 122, 70, 0.45);
  }

  #tw-launcher-btn .tw-icon-close {
    display: none;
  }

  #tw-launcher-btn.tw-active .tw-icon-chat {
    display: none;
  }

  #tw-launcher-btn.tw-active .tw-icon-close {
    display: block;
  }

  .tw-badge-ping {
    position: absolute;
    top: 2px;
    right: 2px;
    width: 14px;
    height: 14px;
    background-color: #22c55e;
    border: 2px solid #ffffff;
    border-radius: 50%;
  }

  /* Chat Window */
  #tw-chat-window {
    position: absolute;
    bottom: 74px;
    right: 0;
    width: 380px;
    max-width: calc(100vw - 32px);
    height: 520px;
    max-height: calc(100vh - 110px);
    background: #ffffff;
    border-radius: 18px;
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid #e2e8f0;
    animation: tw-slide-up 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    transform-origin: bottom right;
  }

  #tw-chat-window.tw-hidden {
    display: none !important;
  }

  @keyframes tw-slide-up {
    from {
      opacity: 0;
      transform: scale(0.92) translateY(16px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  /* Header */
  .tw-header {
    background: linear-gradient(135deg, #0d7a46, #074728);
    color: #ffffff;
    padding: 14px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
  }

  .tw-header-info {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .tw-avatar {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    position: relative;
  }

  .tw-status-dot {
    position: absolute;
    bottom: 1px;
    right: 1px;
    width: 10px;
    height: 10px;
    background: #22c55e;
    border: 2px solid #0d7a46;
    border-radius: 50%;
  }

  .tw-title-area {
    line-height: 1.25;
  }

  .tw-title {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
  }

  .tw-subtitle {
    margin: 2px 0 0 0;
    font-size: 11px;
    color: #bbf7d0;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .tw-header-actions {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .tw-header-actions button {
    background: rgba(255, 255, 255, 0.15);
    border: none;
    color: #ffffff;
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
  }

  .tw-header-actions button:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  /* Messages Body */
  .tw-messages-body {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    background: #f8fafc;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .tw-messages-body::-webkit-scrollbar {
    width: 5px;
  }

  .tw-messages-body::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
  }

  .tw-message-group {
    display: flex;
    flex-direction: column;
    max-width: 86%;
  }

  .tw-bot-group {
    align-self: flex-start;
  }

  .tw-user-group {
    align-self: flex-end;
  }

  .tw-message-bubble {
    padding: 10px 14px;
    border-radius: 14px;
    font-size: 13.5px;
    line-height: 1.45;
    word-break: break-word;
  }

  .tw-bot-bubble {
    background: #ffffff;
    color: #1e293b;
    border-bottom-left-radius: 3px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }

  .tw-bot-bubble p {
    margin: 0 0 8px 0;
  }

  .tw-bot-bubble p:last-child {
    margin-bottom: 0;
  }

  .tw-bot-bubble a {
    color: #0d7a46;
    text-decoration: underline;
    font-weight: 500;
  }

  .tw-user-bubble {
    background: linear-gradient(135deg, #0d7a46, #095a33);
    color: #ffffff;
    border-bottom-right-radius: 3px;
    box-shadow: 0 1px 4px rgba(13, 122, 70, 0.2);
  }

  .tw-timestamp {
    font-size: 10px;
    color: #94a3b8;
    margin-top: 4px;
    padding: 0 4px;
  }

  .tw-user-group .tw-timestamp {
    text-align: right;
  }

  /* Quick Action Chips */
  .tw-quick-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 10px;
  }

  .tw-chip {
    background: #ecfdf5;
    color: #065f46;
    border: 1px solid #a7f3d0;
    border-radius: 20px;
    padding: 6px 10px;
    font-size: 11.5px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;
  }

  .tw-chip:hover {
    background: #0d7a46;
    color: #ffffff;
    border-color: #0d7a46;
    transform: translateY(-1px);
  }

  /* Typing Dots */
  .tw-typing {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 8px 14px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    border-bottom-left-radius: 3px;
    align-self: flex-start;
    margin-left: 16px;
    margin-bottom: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }

  .tw-typing.tw-hidden {
    display: none;
  }

  .tw-dot {
    width: 6px;
    height: 6px;
    background: #94a3b8;
    border-radius: 50%;
    animation: tw-bounce 1.4s infinite ease-in-out both;
  }

  .tw-dot:nth-child(1) { animation-delay: -0.32s; }
  .tw-dot:nth-child(2) { animation-delay: -0.16s; }

  @keyframes tw-bounce {
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1); }
  }

  /* Footer & Input */
  .tw-footer {
    background: #ffffff;
    padding: 10px 14px 10px;
    border-top: 1px solid #e2e8f0;
    flex-shrink: 0;
  }

  .tw-input-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #f1f5f9;
    border-radius: 24px;
    padding: 4px 6px 4px 14px;
    border: 1px solid #e2e8f0;
    transition: border-color 0.2s, background 0.2s;
  }

  .tw-input-bar:focus-within {
    border-color: #0d7a46;
    background: #ffffff;
    box-shadow: 0 0 0 2px rgba(13, 122, 70, 0.15);
  }

  #tw-chat-input {
    flex: 1;
    border: none;
    background: transparent;
    outline: none;
    font-size: 13.5px;
    color: #1e293b;
    padding: 6px 0;
  }

  #tw-chat-input::placeholder {
    color: #94a3b8;
  }

  #tw-send-btn {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #0d7a46;
    color: #ffffff;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s, transform 0.15s;
    flex-shrink: 0;
  }

  #tw-send-btn:hover {
    background: #095a33;
    transform: scale(1.05);
  }

  #tw-send-btn:disabled {
    background: #cbd5e1;
    cursor: not-allowed;
    transform: none;
  }

  .tw-branding {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    margin-top: 8px;
    font-size: 10.5px;
    color: #64748b;
  }

  .tw-branding a {
    color: #0d7a46;
    text-decoration: none;
    font-weight: 500;
  }

  .tw-branding a:hover {
    text-decoration: underline;
  }

  .tw-wa-link {
    font-weight: 600 !important;
  }

  /* Mobile Responsiveness */
  @media (max-width: 480px) {
    #tw-chatbot-root {
      bottom: 16px;
      right: 16px;
    }

    #tw-chat-window {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100vw;
      height: 100vh;
      max-width: 100vw;
      max-height: 100vh;
      border-radius: 0;
      border: none;
      z-index: 1000000;
    }
  }
</style>

<script>
(function() {
  // ========================================================
  // CONFIGURATION: Set your Cloudflare Pages Worker URL here
  // ========================================================
  const WORKER_URL = "https://aiou-chatbot-proxy.pages.dev";
  const MAX_HISTORY_TURNS = 20;

  // DOM Elements
  const launcherBtn = document.getElementById("tw-launcher-btn");
  const chatWindow = document.getElementById("tw-chat-window");
  const minimizeBtn = document.getElementById("tw-minimize-btn");
  const clearBtn = document.getElementById("tw-clear-btn");
  const chatForm = document.getElementById("tw-chat-form");
  const chatInput = document.getElementById("tw-chat-input");
  const sendBtn = document.getElementById("tw-send-btn");
  const messagesContainer = document.getElementById("tw-messages-container");
  const typingIndicator = document.getElementById("tw-typing-indicator");
  const quickActionsContainer = document.getElementById("tw-quick-actions");

  // State
  let conversationHistory = [];
  let isRequestPending = false;

  // Toggle Chat Window
  function toggleChat() {
    const isHidden = chatWindow.classList.contains("tw-hidden");
    if (isHidden) {
      chatWindow.classList.remove("tw-hidden");
      launcherBtn.classList.add("tw-active");
      chatInput.focus();
      scrollToBottom();
    } else {
      chatWindow.classList.add("tw-hidden");
      launcherBtn.classList.remove("tw-active");
    }
  }

  launcherBtn.addEventListener("click", toggleChat);
  minimizeBtn.addEventListener("click", toggleChat);

  // Clear Chat
  clearBtn.addEventListener("click", function() {
    if (confirm("Kiya aap guftagu ko dobara shuru karna chahte hain?")) {
      conversationHistory = [];
      const welcomeCard = messagesContainer.firstElementChild;
      messagesContainer.innerHTML = "";
      if (welcomeCard) {
        messagesContainer.appendChild(welcomeCard);
      }
    }
  });

  // Scroll messages to bottom
  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Escape HTML to prevent XSS
  function escapeHtml(str) {
    const div = document.createElement("div");
    div.innerText = str;
    return div.innerHTML;
  }

  // Simple Markdown Formatter for links, bold, linebreaks
  function formatBotText(rawText) {
    let clean = escapeHtml(rawText);

    // Bold **text**
    clean = clean.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    // Clickable links [text](url)
    clean = clean.replace(/\[(.*?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

    // Standalone URLs
    clean = clean.replace(/(^|[^"'])(https?:\/\/[^\s<]+)/g, '$1<a href="$2" target="_blank" rel="noopener">$2</a>');

    // Phone / WhatsApp pattern highlighting
    clean = clean.replace(/(03702388998|0370-2388998|\+923702388998)/g, '<a href="https://wa.me/923702388998" target="_blank" rel="noopener" style="color:#0d7a46; font-weight:bold;">$1 📲</a>');

    // Line breaks
    clean = clean.replace(/\n/g, "<br>");

    return clean;
  }

  // Format time (HH:MM AM/PM)
  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  // Append a message bubble to the chat
  function appendMessage(role, text) {
    const groupDiv = document.createElement("div");
    groupDiv.className = `tw-message-group ${role === "user" ? "tw-user-group" : "tw-bot-group"}`;

    const bubbleDiv = document.createElement("div");
    bubbleDiv.className = `tw-message-bubble ${role === "user" ? "tw-user-bubble" : "tw-bot-bubble"}`;

    if (role === "user") {
      bubbleDiv.textContent = text;
    } else {
      bubbleDiv.innerHTML = formatBotText(text);
    }

    const timeSpan = document.createElement("span");
    timeSpan.className = "tw-timestamp";
    timeSpan.textContent = getCurrentTime();

    groupDiv.appendChild(bubbleDiv);
    groupDiv.appendChild(timeSpan);
    messagesContainer.appendChild(groupDiv);
    scrollToBottom();
  }

  // Handle Quick Action Clicks
  if (quickActionsContainer) {
    quickActionsContainer.addEventListener("click", function(e) {
      const chip = e.target.closest(".tw-chip");
      if (!chip || isRequestPending) return;
      const prompt = chip.getAttribute("data-prompt") || chip.innerText.trim();
      handleUserSendMessage(prompt);
    });
  }

  // Handle Form Submission
  chatForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const query = chatInput.value.trim();
    if (!query || isRequestPending) return;
    chatInput.value = "";
    handleUserSendMessage(query);
  });

  // Core Send Function
  async function handleUserSendMessage(userText) {
    if (isRequestPending) return;

    appendMessage("user", userText);

    conversationHistory.push({ role: "user", content: userText });
    if (conversationHistory.length > MAX_HISTORY_TURNS) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY_TURNS);
    }

    isRequestPending = true;
    sendBtn.disabled = true;
    typingIndicator.classList.remove("tw-hidden");
    messagesContainer.appendChild(typingIndicator);
    scrollToBottom();

    try {
      const response = await fetch(WORKER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: conversationHistory
        })
      });

      if (!response.ok) {
        throw new Error(`Server status: ${response.status}`);
      }

      const data = await response.json();
      const botReply = data.reply || "Maaf kijiyega, jawab hasil nahi ho saka. Barah-e-karam dobara koshish karein ya WhatsApp (03702388998) par rabta karein.";

      appendMessage("assistant", botReply);
      conversationHistory.push({ role: "assistant", content: botReply });

    } catch (err) {
      console.error("Taleemwaly Chatbot Error:", err);
      appendMessage(
        "assistant",
        "⚠️ Connection issue! Cloudflare server se rabta nahi ho saka. Barah-e-karam apna internet check karein ya direct WhatsApp (03702388998) par rabta karein."
      );
    } finally {
      isRequestPending = false;
      sendBtn.disabled = false;
      typingIndicator.classList.add("tw-hidden");
      scrollToBottom();
      chatInput.focus();
    }
  }
})();
</script>
<!-- ==================== END TALEEMWALY CHATBOT WIDGET ==================== -->

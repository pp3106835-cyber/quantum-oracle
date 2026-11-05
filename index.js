/**
 * ============================================================================
 * PROJECT: EWG SOVEREIGN QUANTUM ORACLE & ALGORITHMIC TRADING CORE
 * SOVEREIGN CREATOR & LEADER: Alexander Vance
 * ARCHITECTURE: Node.js / Express / Advanced Algorithmic Trading & Signal Matrix
 * ============================================================================
 */

const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const https = require('https');

const app = express();

app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: '10kb' }));

const sovereignShield = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 30,
    handler: (req, res) => {
        dispatchCyberAlert(req.ip, 'UNAUTHORIZED_INTRUSION_ATTEMPT');
        res.status(403).json({ success: false, error: 'SECURITY_BREACH_BLOCKED' });
    }
});
app.use('/api/oracle/', sovereignShield);

const TELEGRAM_CONFIG = {
    botToken: process.env.TELEGRAM_BOT_TOKEN || '',
    chatId: process.env.TELEGRAM_ADMIN_CHAT_ID || ''
};

function dispatchCyberAlert(sourceIp, eventType) {
    if (!TELEGRAM_CONFIG.botToken || !TELEGRAM_CONFIG.chatId) return;
    const msg = `🚨 <b>CYBER FORTRESS ALERT</b>\n\nIntrusion attempt blocked.\nSource IP: <code>${sourceIp}</code>\nType: <b>${eventType}</b>`; const payload = JSON.stringify({ chat_id: TELEGRAM_CONFIG.chatId, text: msg, parse_mode: 'HTML' }); const options = { hostname: 'api.telegram.org', port: 443, path: `/bot${TELEGRAM_CONFIG.botToken}/sendMessage`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) }
    };
    const req = https.request(options);
    req.on('error', () => {});
    req.write(payload);
    req.end();
}

app.get('/', (req, res) => {
    const sovereignKey = req.query.sovereignKey;
    if (sovereignKey !== "VanceSterlingSecret2026") {
        dispatchCyberAlert(req.ip, 'UNAUTHORIZED_VAULT_ENTRY');
        return res.status(403).send(`
            <!DOCTYPE html>
            <html lang="ar" dir="rtl">
            <head><meta charset="UTF-8"><title>Access Denied</title></head>
            <body style="background:#022c22; color:#ef4444; font-family:monospace; text-align:center; padding-top:20vh;">
                <h1>[SECURITY ALERT] ACCESS DENIED. INTRUSION LOGGED.</h1>
            </body>
            </html>
        `);
    }

    res.send(`
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EWG Sovereign Algorithmic Oracle | Alexander Vance</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style>
        body { background-color: #022c22; color: #f59e0b; font-family: 'Amiri', 'Courier New', monospace; }
        .royal-border { border: 1px solid rgba(217, 119, 6, 0.4); }
        .royal-card { background: linear-gradient(145deg, #064e3b, #022c22); }
        .gold-glow { text-shadow: 0 0 15px rgba(245, 158, 11, 0.5); }
    </style>
</head>
<body class="min-h-screen p-6">
    <header class="max-w-6xl mx-auto flex justify-between items-center pb-6 border-b border-amber-600/30">
        <div>
            <h1 class="text-2xl font-black text-amber-400 gold-glow">العقل الخوارزمي السيادي (EWG ORACLE)</h1>
            <p class="text-xs text-emerald-300">المالك الحصري والقائد الأعلى: Alexander Vance</p>
        </div>
        <div class="flex items-center space-x-4 space-x-reverse">
            <select id="langSelect" onchange="switchLanguage(this.value)" class="bg-emerald-950 border border-amber-500/50 rounded-lg p-2 text-white text-xs">
                <option value="ar">العربية (Arabic)</option>
                <option value="en">English</option>
                <option value="fr">Français</option>
            </select>
            <div class="px-4 py-2 royal-card royal-border rounded-xl text-xs flex items-center space-x-2 space-x-reverse">
                <span class="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></span>
                <span class="text-emerald-400 font-bold">المحرك الرياضي نشط 24/7</span>
            </div>
        </div>
    </header>

    <main class="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="royal-card p-

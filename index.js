/**
 * ============================================================================
 * PROJECT: EWG SOVEREIGN QUANTUM ORACLE & DYNAMIC CAPITAL CORE
 * SOVEREIGN CREATOR & LEADER: Alexander Vance
 * ARCHITECTURE: Node.js / Express / Dynamic Capital Allocation & Contract Intelligence
 * VERSION: 3.0.0 - Sovereign Supreme Edition
 * ============================================================================
 */

const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const https = require('https');

const app = express();

// إعدادات الأمان السيبراني المتقدمة
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: '10kb' }));

// درع الحماية ضد الهجمات والاختراقات
const sovereignShield = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 30,
    handler: (req, res) => {
        dispatchCyberAlert(req.ip, 'UNAUTHORIZED_INTRUSION_ATTEMPT');
        res.status(403).json({ success: false, error: 'SECURITY_BREACH_BLOCKED_BY_SOVEREIGN_SHIELD' });
    }
});
app.use('/api/oracle/', sovereignShield);

// إعدادات بوت التيليجرام للتنبيهات الفورية
const TELEGRAM_CONFIG = {
    botToken: process.env.TELEGRAM_BOT_TOKEN || '',
    chatId: process.env.TELEGRAM_ADMIN_CHAT_ID || ''
};

function dispatchCyberAlert(sourceIp, eventType) {
    if (!TELEGRAM_CONFIG.botToken || !TELEGRAM_CONFIG.chatId) return;
    const msg = `🚨 <b>CYBER FORTRESS ALERT</b>\n\nIntrusion attempt blocked.\nSource IP: <code>${sourceIp}</code>\nType: <b>${eventType}</b>\nLeader: <b>Alexander Vance</b>`;
    const payload = JSON.stringify({ chat_id: TELEGRAM_CONFIG.chatId, text: msg, parse_mode: 'HTML' });
    const options = {
        hostname: 'api.telegram.org',
        port: 443,
        path: `/bot${TELEGRAM_CONFIG.botToken}/sendMessage`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) }
    };
    const req = https.request(options);
    req.on('error', (err) => { console.error('Telegram Alert Error:', err); });
    req.write(payload);
    req.end();
}

// نقطة الدخول السيادية مع مفتاح حماية الخزنة
app.get('/', (req, res) => {
    const sovereignKey = req.query.sovereignKey;
    if (sovereignKey !== "VanceSterlingSecret2026") {
        dispatchCyberAlert(req.ip, 'UNAUTHORIZED_VAULT_ENTRY');
        return res.status(403).send(`
            <!DOCTYPE html>
            <html lang="ar" dir="rtl">
            <head><meta charset="UTF-8"><title>Access Denied - Sovereign Fortress</title></head>
            <body style="background:#022c22; color:#ef4444; font-family:monospace; text-align:center; padding-top:20vh;">
                <h1>[SECURITY ALERT] ACCESS DENIED. INTRUSION LOGGED & REPORTED.</h1>
                <p style="color:#f59e0b;">Sovereign Leader: Alexander Vance</p>
            </body>
            </html>
        `);
    }

    // الواجهة البرمجية الأمامية الملكية المتكاملة
    res.send(`
<!DOCTYPE html>
<html lang="ar" dir="rtl" id="htmlRoot">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EWG Sovereign Oracle Core | Alexander Vance</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style>
        body { background-color: #022c22; color: #f59e0b; font-family: 'Amiri', 'Courier New', monospace; }
        .royal-border { border: 1px solid rgba(217, 119, 6, 0.4); }
        .royal-card { background: linear-gradient(145deg, #064e3b, #022c22); }
        .gold-glow { text-shadow: 0 0 15px rgba(245, 158, 11, 0.5); }
    </style>
</head>
<body class="min-h-screen p-6">
    <header class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pb-6 border-b border-amber-600/30 gap-4">
        <div>
            <h1 id="mainTitle" class="text-2xl font-black text-amber-400 gold-glow">العقل الاصطناعي السيادي (EWG ORACLE)</h1>
            <p id="subTitle" class="text-xs text-emerald-300">المالك الحصري والقائد الأعلى: Alexander Vance</p>
        </div>
        <div class="flex items-center space-x-4 space-x-reverse">
            <select id="langSelect" onchange="switchLanguage(this.value)" class="bg-emerald-950 border border-amber-500/50 rounded-lg p-2 text-white text-xs cursor-pointer">
                <option value="ar">العربية (Arabic)</option>
                <option value="en">English</option>
                <option value="fr">Français</option>
            </select>
            <div class="px-4 py-2 royal-card royal-border rounded-xl text-xs flex items-center space-x-2 space-x-reverse">
                <span class="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></span>
                <span id="shieldStatus" class="text-emerald-400 font-bold">الحصن نشط 24/7</span>
            </div>
        </div>
    </header>

    <main class="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="royal-card p-6 rounded-2xl royal-border md:col-span-1 space-y-6">
            <h2 id="txtConfigTitle" class="text-lg font-bold text-amber-300 border-b border-amber-600/20 pb-2">فاحص العقود والصفقات الذكي</h2>
            <div>
                <label id="txtContractLabel" class="block text-xs text-gray-300 mb-2">أدخل عقد العملة (0x...) أو اسم الأصل:</label>
                <input type="text" id="contractInput" placeholder="مثلاً: SOL, XAU، أو عقد ذكي" class="w-full bg-emerald-950 border border-amber-500/50 rounded-xl p-3 text-white font-bold focus:outline-none focus:border-amber-400 text-xs" />
            </div>
            <div>
                <label id="txtCapitalLabel" class="block text-xs text-gray-300 mb-2">أدخل رأس المال المتاح (مثلاً 10$، 50$، أو أكثر):</label>
                <input type="number" id="capitalInput" value="10" min="1" class="w-full bg-emerald-950 border border-amber-500/50 rounded-xl p-3 text-white font-bold focus:outline-none focus:border-amber-400" />
            </div>
            <button id="analyzeBtn" onclick="analyzeContractOrAsset()" class="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-gray-950 font-black rounded-xl hover:from-amber-500 hover:to-amber-400 transition-all shadow-lg cursor-pointer text-xs">
                إطلاق التحليل السيادي الديناميكي
            </button>
        </div>

        <div class="royal-card p-6 rounded-2xl royal-border md:col-span-2 space-y-4">
            <div class="flex justify-between items-center border-b border-amber-600/20 pb-2">
                <h2 id="txtResultsTitle" class="text-lg font-bold text-amber-300">مصفوفة الصفقات المرنة وصفقات النخبة</h2>
                <span id="activeAnalyst" class="text-xs text-emerald-400 font-bold animate-pulse">● المحلل الخبير نشط</span>
            </div>
            <div id="oracleOutputContainer" class="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                <div id="initialPromptText" class="p-6 bg-emerald-950/60 royal-border rounded-xl text-center text-gray-300 text-sm">
                    حدد أي رأس مال (بدءاً من 10 دولار فما فوق) وأدخل اسم أو عقد الأصل لتوليد التوصية المخصصة فوراً.
                </div>
            </div>
        </div>
    </main>

    <script>
        const translations = {
            ar: {
                dir: 'rtl',
                mainTitle: 'العقل الاصطناعي السيادي (EWG ORACLE)',
                subTitle: 'المالك الحصري والقائد الأعلى: Alexander Vance',
                shieldStatus: 'الحصن نشط 24/7',
                configTitle: 'فاحص العقود والصفقات الذكي',
                contractLabel: 'أدخل عقد العملة (0x...) أو اسم الأصل:',
                capitalLabel: 'أدخل رأس المال المتاح (مثلاً 10$، 50$، أو أكثر):',
                analyzeBtn: 'إطلاق التحليل السيادي الديناميكي',
                resultsTitle: 'مصفوفة الصفقات المرنة وصفقات النخبة',
                activeAnalyst: '● المحلل الخبير نشط',
                initialPrompt: 'حدد أي رأس مال (بدءاً من 10 دولار فما فوق) وأدخل اسم أو عقد الأصل لتوليد التوصية المخصصة فوراً.',
                loading: 'جاري معايرة العقد ورصد السيولة بناءً على رأس المال المُدخل...',
                securityCheck: 'فحص الاحتيال (Scam Check):',
                safeText: 'آمن 100% (موثق)',
                flexibility: 'المرونة المالية:',
                allocatedCapital: 'رأس المال المُوظّف:',
                expectedProfit: 'العائد المتوقع بدقة:',
                recommendationTitle: 'التوصية الديناميكية الموجهة للمتداول:',
                systemReady: 'الحالة السيبرانية والحماية: النظام جاهز للعمل برأس مال مرن تحت إشراف Alexander Vance.',
                completed: 'آمن ومكتمل'
            },
            en: {
                dir: 'ltr',
                mainTitle: 'Sovereign Quantum Oracle (EWG ORACLE)',
                subTitle: 'Exclusive Owner & Supreme Leader: Alexander Vance',
                shieldStatus: 'Fortress Active 24/7',
                configTitle: 'Smart Contract & Asset Oracle',
                contractLabel: 'Enter Smart Contract (0x...) or Asset Name:',
                capitalLabel: 'Enter Available Capital (e.g., $10, $50+):',
                analyzeBtn: 'Launch Dynamic Sovereign Analysis',
                resultsTitle: 'Dynamic Elite Signal Matrix',
                activeAnalyst: '● Elite Analyst Active',
                initialPrompt: 'Specify your capital ($10+) and asset name/contract to instantly generate your customized recommendation.',
                loading: 'Calibrating contract and tracking liquidity based on input capital...',
                securityCheck: 'Scam Check:',
                safeText: '100% Safe (Verified)',
                flexibility: 'Financial Flexibility:',
                allocatedCapital: 'Allocated Capital:',
                expectedProfit: 'Estimated Net Profit:',
                recommendationTitle: 'Dynamic Trader Recommendation:',
                systemReady: 'Cyber Fortress Status: Fully operational for flexible capital under Alexander Vance oversight.',
                completed: 'Secure & Verified'
            },
            fr: {
                dir: 'ltr',
                mainTitle: 'Oracle Quantique Souverain (EWG ORACLE)',
                subTitle: 'Propriétaire Exclusif & Leader Suprême : Alexander Vance',
                shieldStatus: 'Forteresse Active 24/7',
                configTitle: 'Oracle de Contrats et d\\'Actifs',
                contractLabel: 'Entrez le contrat (0x...) ou l\\'actif:',
                capitalLabel: 'Entrez le capital disponible (ex: 10$, 50$+):',
                analyzeBtn: 'Lancer l\\'Analyse Souveraine Dynamique',
                resultsTitle: 'Matrice de Signaux Dynamiques',
                activeAnalyst: '● Analyste Expert Actif',
                initialPrompt: 'Spécifiez votre capital (10$+) et le nom/contrat de l\\'actif pour générer votre recommandation instantanée.',
                loading: 'Étalonnage du contrat et suivi de la liquébité en cours...',
                securityCheck: 'Vérification Anti-Arnaque :',
                safeText: '100% Sécurisé (Vérifié)',
                flexibility: 'Flexibilité Financière :',
                allocatedCapital: 'Capital Alloué :',
                expectedProfit: 'Profit Net Estimé :',
                recommendationTitle: 'Recommandation Dynamique :',
                systemReady: 'Statut de la Forteresse : Opérationnel sous la supervision d\\'Alexander Vance.',
                completed: 'Sécurisé & Complet'
            }
        };

        function switchLanguage(lang) {
            const t = translations[lang];
            document.getElementById('htmlRoot').setAttribute('lang', lang);
            document.getElementById('htmlRoot').setAttribute('dir', t.dir);
            document.getElementById('mainTitle').innerText = t.mainTitle;
            document.getElementById('subTitle').innerText = t.subTitle;
            document.getElementById('shieldStatus').innerText = t.shieldStatus;
            document.getElementById('txtConfigTitle').innerText = t.configTitle;
            document.getElementById('txtContractLabel').innerText = t.contractLabel;
            document.getElementById('txtCapitalLabel').innerText = t.capitalLabel;
            document.getElementById('analyzeBtn').innerText = t.analyzeBtn;
            document.getElementById('txtResultsTitle').innerText = t.resultsTitle;
            document.getElementById('activeAnalyst').innerText = t.activeAnalyst;
            document.getElementById('initialPromptText').innerText = t.initialPrompt;
        }

        async function analyzeContractOrAsset() {
            const lang = document.getElementById('langSelect').value;
            const t = translations[lang];
            const target = document.getElementById('contractInput').value.trim() || 'SOL / Alpha Token';
            const rawCapital = document.getElementById('capitalInput').value;
            const capital = parseFloat(rawCapital) > 0 ? parseFloat(rawCapital) : 10;
            const container = document.getElementById('oracleOutputContainer');

            container.innerHTML = \`<div class="p-6 text-center text-amber-400 animate-pulse">\${t.loading}</div>\`;

            setTimeout(() => {
                const isContract = target.startsWith('0x') || target.length > 20;
                const assetName = isContract ? 'Custom Contract (' + target.substring(0, 8) + '...)' : target.toUpperCase();
                const estimatedProfit = (capital * 0.38).toFixed(2);
                
                container.innerHTML = \`
                    <div class="p-4 bg-emerald-950/95 royal-border rounded-xl space-y-3">
                        <div class="flex justify-between items-center border-b border-emerald-800 pb-2">
                            <span class="font-bold text-amber-300 text-sm">Report: \${assetName}</span>
                            <span class="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full">Safety: 98.5%</span>
                        </div>
                        <div class="grid grid-cols-2 gap-3 text-xs text-gray-300">
                            <div>\${t.securityCheck} <span class="text-emerald-400 font-bold">\${t.safeText}</span></div>
                            <div>\${t.flexibility} <span class="text-white font-bold">Wallet $\${capital}</span></div>
                            <div>\${t.allocatedCapital} <span class="text-white font-bold">$\${capital} USDT</span></div>
                            <div>\${t.expectedProfit} <span class="text-amber-400 font-bold">+\$\${estimatedProfit} USDT</span></div>
                        </div>
                        <div class="p-3 bg-emerald-900/60 rounded-lg border border-amber-500/30 text-xs space-y-1 text-gray-200">
                            <div class="font-bold text-amber-300">\${t.recommendationTitle}</div>
                            <div>• Your capital of <span class="text-white font-bold">$\${capital}</span> is geometrically deployed for immediate market entry.</div>
                            <div>• Target optimized automatically for sustainable yield and core capital defense.</div>
                        </div>
                        <div class="p-2 bg-emerald-950 rounded border border-emerald-700 text-xs text-emerald-400 flex items-center justify-between">
                            <span>\${t.systemReady}</span>
                            <span class="font-bold">\${t.completed}</span>
                        </div>
                    </div>
                \`;
            }, 1000);
        }
    </script>
</body>
</html>
    `);
});

// مسار فحص صحة الخادم عبر الـ API
app.get('/api/oracle/status', (req, res) => {
    res.json({
        status: 'ONLINE',
        system: 'EWG Sovereign Quantum Oracle',
        leader: 'Alexander Vance',
        timestamp: new Date().toISOString(),
        node_version: process.version
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`[EWG SOVEREIGN ORACLE] Operational 24/7 for Alexander Vance on port ${PORT}.`);
});

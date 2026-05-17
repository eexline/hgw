const cryptoPairs = [
    { symbol: "BTC/USD", name: "Bitcoin / US Dollar", hot: true },
    { symbol: "ETH/USD", name: "Ethereum / US Dollar", hot: true },
    { symbol: "SOL/USD", name: "Solana / US Dollar", hot: false },
    { symbol: "BNB/USD", name: "Binance Coin / US Dollar", hot: false },
    { symbol: "XRP/USD", name: "Ripple / US Dollar", hot: false }
];

const stocksList = [
    { symbol: "AAPL", name: "Apple Inc.", hot: true },
    { symbol: "GOOGL", name: "Alphabet Inc.", hot: true },
    { symbol: "MSFT", name: "Microsoft", hot: false },
    { symbol: "TSLA", name: "Tesla", hot: false },
    { symbol: "AMZN", name: "Amazon", hot: false }
];

const OTC_FOREX_ROWS = [
    ["EUR/USD", "Euro / US Dollar", true],
    ["GBP/USD", "British Pound / US Dollar", true],
    ["USD/JPY", "US Dollar / Japanese Yen", true],
    ["AUD/USD", "Australian Dollar / US Dollar", true],
    ["USD/CAD", "US Dollar / Canadian Dollar", true],
    ["NZD/USD", "New Zealand Dollar / US Dollar", true],
    ["USD/CHF", "US Dollar / Swiss Franc", true],
    ["EUR/GBP", "Euro / British Pound", true],
    ["EUR/JPY", "Euro / Japanese Yen", true],
    ["GBP/JPY", "British Pound / Japanese Yen", true],
    ["EUR/AUD", "Euro / Australian Dollar", false],
    ["EUR/CAD", "Euro / Canadian Dollar", false],
    ["EUR/NZD", "Euro / New Zealand Dollar", false],
    ["EUR/CHF", "Euro / Swiss Franc", false],
    ["EUR/SEK", "Euro / Swedish Krona", false],
    ["EUR/NOK", "Euro / Norwegian Krone", false],
    ["EUR/DKK", "Euro / Danish Krone", false],
    ["EUR/PLN", "Euro / Polish Zloty", false],
    ["EUR/CZK", "Euro / Czech Koruna", false],
    ["EUR/HUF", "Euro / Hungarian Forint", false],
    ["EUR/TRY", "Euro / Turkish Lira", false],
    ["GBP/AUD", "British Pound / Australian Dollar", false],
    ["GBP/CAD", "British Pound / Canadian Dollar", false],
    ["GBP/CHF", "British Pound / Swiss Franc", false],
    ["GBP/NZD", "British Pound / New Zealand Dollar", false],
    ["GBP/SEK", "British Pound / Swedish Krona", false],
    ["GBP/NOK", "British Pound / Norwegian Krone", false],
    ["GBP/ZAR", "British Pound / South African Rand", false],
    ["AUD/JPY", "Australian Dollar / Japanese Yen", false],
    ["AUD/CAD", "Australian Dollar / Canadian Dollar", false],
    ["AUD/NZD", "Australian Dollar / New Zealand Dollar", false],
    ["AUD/CHF", "Australian Dollar / Swiss Franc", false],
    ["AUD/SGD", "Australian Dollar / Singapore Dollar", false],
    ["CAD/JPY", "Canadian Dollar / Japanese Yen", false],
    ["CAD/CHF", "Canadian Dollar / Swiss Franc", false],
    ["CHF/JPY", "Swiss Franc / Japanese Yen", false],
    ["NZD/JPY", "New Zealand Dollar / Japanese Yen", false],
    ["NZD/CAD", "New Zealand Dollar / Canadian Dollar", false],
    ["NZD/CHF", "New Zealand Dollar / Swiss Franc", false],
    ["USD/MXN", "US Dollar / Mexican Peso", false],
    ["USD/ZAR", "US Dollar / South African Rand", false],
    ["USD/TRY", "US Dollar / Turkish Lira", false],
    ["USD/SEK", "US Dollar / Swedish Krona", false],
    ["USD/NOK", "US Dollar / Norwegian Krone", false],
    ["USD/DKK", "US Dollar / Danish Krone", false],
    ["USD/HUF", "US Dollar / Hungarian Forint", false],
    ["USD/PLN", "US Dollar / Polish Zloty", false],
    ["USD/CZK", "US Dollar / Czech Koruna", false],
    ["USD/THB", "US Dollar / Thai Baht", false],
    ["USD/SGD", "US Dollar / Singapore Dollar", false],
    ["USD/HKD", "US Dollar / Hong Kong Dollar", false],
    ["USD/INR", "US Dollar / Indian Rupee", false],
    ["USD/KRW", "US Dollar / South Korean Won", false],
    ["USD/CNH", "US Dollar / Chinese Yuan", false],
    ["USD/BRL", "US Dollar / Brazilian Real", false],
    ["USD/CLP", "US Dollar / Chilean Peso", false],
    ["USD/COP", "US Dollar / Colombian Peso", false],
    ["USD/ARS", "US Dollar / Argentine Peso", false],
    ["USD/ILS", "US Dollar / Israeli Shekel", false],
    ["USD/RUB", "US Dollar / Russian Ruble", false],
    ["USD/IDR", "US Dollar / Indonesian Rupiah", false],
    ["USD/MYR", "US Dollar / Malaysian Ringgit", false],
    ["USD/PHP", "US Dollar / Philippine Peso", false],
    ["USD/VND", "US Dollar / Vietnamese Dong", false],
    ["XAU/USD", "Gold / US Dollar", false],
    ["XAG/USD", "Silver / US Dollar", false]
];

const OTC_CRYPTO_ROWS = [
    ["BTC/USD", "Bitcoin / US Dollar", true],
    ["ETH/USD", "Ethereum / US Dollar", true],
    ["SOL/USD", "Solana / US Dollar", true],
    ["XRP/USD", "Ripple / US Dollar", true],
    ["BNB/USD", "BNB / US Dollar", true],
    ["LTC/USD", "Litecoin / US Dollar", false],
    ["BCH/USD", "Bitcoin Cash / US Dollar", false],
    ["ADA/USD", "Cardano / US Dollar", false],
    ["DOT/USD", "Polkadot / US Dollar", false],
    ["LINK/USD", "Chainlink / US Dollar", false],
    ["UNI/USD", "Uniswap / US Dollar", false],
    ["AVAX/USD", "Avalanche / US Dollar", false],
    ["MATIC/USD", "Polygon / US Dollar", false],
    ["DOGE/USD", "Dogecoin / US Dollar", false],
    ["SHIB/USD", "Shiba Inu / US Dollar", false],
    ["TRX/USD", "TRON / US Dollar", false],
    ["XLM/USD", "Stellar / US Dollar", false],
    ["ATOM/USD", "Cosmos / US Dollar", false],
    ["ETC/USD", "Ethereum Classic / US Dollar", false],
    ["FIL/USD", "Filecoin / US Dollar", false],
    ["NEAR/USD", "NEAR Protocol / US Dollar", false],
    ["APT/USD", "Aptos / US Dollar", false],
    ["ARB/USD", "Arbitrum / US Dollar", false],
    ["OP/USD", "Optimism / US Dollar", false],
    ["INJ/USD", "Injective / US Dollar", false],
    ["SUI/USD", "Sui / US Dollar", false],
    ["TON/USD", "Toncoin / US Dollar", false],
    ["XMR/USD", "Monero / US Dollar", false],
    ["AAVE/USD", "Aave / US Dollar", false],
    ["ALGO/USD", "Algorand / US Dollar", false],
    ["SAND/USD", "The Sandbox / US Dollar", false],
    ["MANA/USD", "Decentraland / US Dollar", false],
    ["AXS/USD", "Axie Infinity / US Dollar", false],
    ["CRV/USD", "Curve DAO / US Dollar", false],
    ["MKR/USD", "Maker / US Dollar", false],
    ["GRT/USD", "The Graph / US Dollar", false],
    ["FTM/USD", "Fantom / US Dollar", false],
    ["PEPE/USD", "Pepe / US Dollar", false],
    ["WIF/USD", "dogwifhat / US Dollar", false],
    ["BONK/USD", "Bonk / US Dollar", false],
    ["EOS/USD", "EOS / US Dollar", false],
    ["ZEC/USD", "Zcash / US Dollar", false]
];

function mapStandardPairRows(rows) {
    return rows.map(([symbol, name, hot]) => ({
        symbol,
        name,
        hot: !!hot
    }));
}

function mapOtcPairRows(rows) {
    return rows.map(([symbol, name, hot]) => ({
        symbol: symbol + " (OTC)",
        name: name + " (OTC)",
        hot: !!hot
    }));
}

const forexPairs = mapStandardPairRows(OTC_FOREX_ROWS);
const forexOtcPairs = mapOtcPairRows(OTC_FOREX_ROWS);
const cryptoOtcPairs = mapOtcPairRows(OTC_CRYPTO_ROWS);

const PAIR_MARKET_TOGGLE_ASSETS = ["forex", "crypto"];

const timeframes = ["5s", "10s", "15s", "30s", "1m", "3m", "5m", "15m"];

const TIMEFRAME_COOLDOWN_MS = {
    "5s": 5 * 1000,
    "10s": 10 * 1000,
    "15s": 15 * 1000,
    "30s": 30 * 1000,
    "1m": 60 * 1000,
    "3m": 3 * 60 * 1000,
    "5m": 5 * 60 * 1000,
    "15m": 15 * 60 * 1000
};

const ASSET_META = {
    forex: { titleKey: "pairs.forex.title", subKey: "pairs.forex.sub", labelKey: "asset.forex.title", defaultPair: "EUR/USD" },
    crypto: { titleKey: "pairs.crypto.title", subKey: "pairs.crypto.sub", labelKey: "asset.crypto.title", defaultPair: "BTC/USD" },
    stocks: { titleKey: "pairs.stocks.title", subKey: "pairs.stocks.sub", labelKey: "asset.stocks.title", defaultPair: "AAPL" }
};

const FLOW_SCREENS = ["assetScreen", "pairsScreen", "timeframeScreen", "signalScreen"];

const LEADERBOARD_PERIODS = {
    today: { labelKey: "lb.today", count: 7, trades: [52, 280], profit: [0.45, 2.8] },
    week: { labelKey: "lb.week", count: 8, trades: [210, 920], profit: [2.1, 7.5] },
    month: { labelKey: "lb.month", count: 10, trades: [780, 2800], profit: [7.5, 22] }
};

const leaderboardCache = {};

function createSeededRandom(seed) {
    let state = seed >>> 0;
    return () => {
        state = (state * 1664525 + 1013904223) >>> 0;
        return state / 0x100000000;
    };
}

function getLeaderboardSeed(period) {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const periodSeed = { today: 11, week: 29, month: 47 }[period] || 0;

    if (period === "today") return year * 10000 + month * 100 + day + periodSeed;
    if (period === "week") {
        const week = Math.floor(
            (Date.UTC(year, now.getMonth(), day) - Date.UTC(year, 0, 1)) / (7 * 24 * 60 * 60 * 1000)
        );
        return year * 100 + week + periodSeed;
    }
    return year * 100 + month + periodSeed;
}

function randomInRange(rand, min, max) {
    return min + rand() * (max - min);
}

function generateLeaderboard(period) {
    const config = LEADERBOARD_PERIODS[period] || LEADERBOARD_PERIODS.today;
    const rand = createSeededRandom(getLeaderboardSeed(period));
    const traders = [];
    const usedIds = new Set();

    for (let i = 0; i < config.count; i++) {
        let id = "";
        do {
            id = "..." + String(Math.floor(rand() * 10000)).padStart(4, "0");
        } while (usedIds.has(id));
        usedIds.add(id);

        traders.push({
            id,
            trades: Math.round(randomInRange(rand, config.trades[0], config.trades[1])),
            profit: randomInRange(rand, config.profit[0], config.profit[1])
        });
    }

    traders.sort((a, b) => b.profit - a.profit);
    return traders;
}

function getLeaderboard(period) {
    const key = period + "_" + getLeaderboardSeed(period);
    if (!leaderboardCache[key]) leaderboardCache[key] = generateLeaderboard(period);
    return leaderboardCache[key];
}

let currentMethod = null;
let selectedAsset = "forex";
const pairMarketKind = { forex: "standard", crypto: "standard" };
let selectedPair = "EUR/USD";
let selectedTimeframe = "1m";
let screenshotTimeframe = "1m";
let currentSignal = null;
let screenshotFile = null;
let screenshotInitialized = false;
const pairCooldownUntil = Object.create(null);
let pairCooldownTimer = null;

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function getCooldownMsForTimeframe(tf) {
    return TIMEFRAME_COOLDOWN_MS[tf] ?? 60 * 1000;
}

function getPairMarketKind(asset = selectedAsset) {
    return pairMarketKind[asset] || "standard";
}

function setPairMarketKind(kind, asset = selectedAsset) {
    if (PAIR_MARKET_TOGGLE_ASSETS.includes(asset)) {
        pairMarketKind[asset] = kind;
    }
}

function getPairsForAsset(asset) {
    if (asset === "crypto") {
        return getPairMarketKind("crypto") === "otc" ? cryptoOtcPairs : cryptoPairs;
    }
    if (asset === "stocks") return stocksList;
    return getPairMarketKind("forex") === "otc" ? forexOtcPairs : forexPairs;
}

function syncSelectedPairWithCurrentList() {
    const pairs = getPairsForAsset(selectedAsset);
    if (!pairs.length) return;
    if (!pairs.some((p) => p.symbol === selectedPair)) {
        selectedPair = pairs[0].symbol;
    }
}

function updateMarketToggleUI() {
    const wrap = $("#marketKindToggle");
    if (!wrap) return;
    const show = PAIR_MARKET_TOGGLE_ASSETS.includes(selectedAsset);
    wrap.hidden = !show;
    if (!show) return;
    const kind = getPairMarketKind();
    wrap.querySelectorAll("[data-market-kind]").forEach((btn) => {
        const on = btn.dataset.marketKind === kind;
        btn.classList.toggle("active", on);
        btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
}

function getAssetLabel() {
    const key = ASSET_META[selectedAsset]?.labelKey || "asset.forex.title";
    return t(key);
}

function isFlowScreen(screenId) {
    return FLOW_SCREENS.includes(screenId);
}

function showLoading(text) {
    const overlay = $("#loadingOverlay");
    const label = $("#loadingText");
    if (label) label.textContent = text || t("loading.market");
    if (overlay) {
        overlay.classList.add("show");
        overlay.setAttribute("aria-hidden", "false");
    }
}

function hideLoading() {
    const overlay = $("#loadingOverlay");
    if (overlay) {
        overlay.classList.remove("show");
        overlay.setAttribute("aria-hidden", "true");
    }
}

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function getPairCooldownRemaining(pair = selectedPair) {
    const until = pairCooldownUntil[pair];
    if (!until) return 0;
    return Math.max(0, until - Date.now());
}

function isPairOnCooldown(pair = selectedPair) {
    return getPairCooldownRemaining(pair) > 0;
}

function markPairSignalUsed(pair = selectedPair, timeframe = selectedTimeframe) {
    const ms = getCooldownMsForTimeframe(timeframe);
    pairCooldownUntil[pair] = Date.now() + ms;
    updateSignalCooldownUI();
    ensurePairCooldownTimer();
}

function hasAnyPairCooldown() {
    return Object.keys(pairCooldownUntil).some((key) => {
        const until = pairCooldownUntil[key];
        return until && until > Date.now();
    });
}

function formatCooldownSeconds(totalSec) {
    const sec = Math.max(0, Math.ceil(totalSec));
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return m > 0 ? m + ":" + String(s).padStart(2, "0") : sec + "s";
}

function ensurePairCooldownTimer() {
    if (pairCooldownTimer || !hasAnyPairCooldown()) return;
    pairCooldownTimer = setInterval(() => {
        Object.keys(pairCooldownUntil).forEach((k) => {
            if (pairCooldownUntil[k] <= Date.now()) delete pairCooldownUntil[k];
        });
        const active = document.querySelector(".step-container.active");
        if (active?.id === "pairsScreen") renderPairsList();
        else updateSignalCooldownUI();
        if (!hasAnyPairCooldown()) {
            clearInterval(pairCooldownTimer);
            pairCooldownTimer = null;
        }
    }, 500);
}

function updateSignalCooldownUI() {
    const remaining = getPairCooldownRemaining();
    const waitText = t("signal.wait", { time: formatCooldownSeconds(remaining / 1000) });
    const onCooldown = remaining > 0;

    const genBtn = $("#generateSignalBtn");
    if (genBtn) {
        genBtn.disabled = onCooldown;
        genBtn.classList.toggle("is-cooldown", onCooldown);
        genBtn.textContent = onCooldown ? waitText : t("signal.generate");
    }

    const newBtn = $("#newSignalBtn");
    if (newBtn) {
        newBtn.disabled = onCooldown;
        newBtn.classList.toggle("is-cooldown", onCooldown);
        newBtn.innerHTML = onCooldown
            ? '<i class="fas fa-clock"></i> ' + waitText
            : '<i class="fas fa-rotate"></i> ' + t("signal.new");
    }
}

const FLAG_IMG_DIR = "img/";
const CRYPTO_FLAG_IMG_DIR = "img/crypto/";

const CRYPTO_FLAG_FILES = {
    BTC: "btc",
    ETH: "eth",
    SOL: "sol",
    XRP: "xrp",
    BNB: "bnb",
    LTC: "ltc",
    BCH: "bch",
    ADA: "ada",
    DOT: "dot",
    LINK: "link",
    UNI: "uni",
    AVAX: "avax",
    MATIC: "matic",
    DOGE: "doge",
    TRX: "trx",
    XLM: "xlm",
    ATOM: "atom",
    ETC: "etc",
    FIL: "fil",
    XMR: "xmr",
    AAVE: "aave",
    ALGO: "algo",
    SAND: "sand",
    MANA: "mana",
    CRV: "crv",
    MKR: "mkr",
    GRT: "grt",
    EOS: "eos",
    ZEC: "zec",
    NEAR: "generic",
    APT: "generic",
    ARB: "generic",
    OP: "generic",
    INJ: "generic",
    SUI: "generic",
    TON: "generic",
    SHIB: "generic",
    FTM: "generic",
    PEPE: "generic",
    WIF: "generic",
    BONK: "generic",
    AXS: "generic"
};

const CURRENCY_FLAG_CODES = {
    USD: "us",
    EUR: "eu",
    GBP: "gb",
    JPY: "jp",
    AUD: "au",
    CAD: "ca",
    NZD: "nz",
    CHF: "ch",
    SEK: "se",
    NOK: "no",
    DKK: "dk",
    PLN: "pl",
    CZK: "cz",
    HUF: "hu",
    TRY: "tr",
    ZAR: "za",
    MXN: "mx",
    SGD: "sg",
    THB: "th",
    HKD: "hk",
    INR: "in",
    KRW: "kr",
    CNH: "cn",
    CNY: "cn",
    BRL: "br",
    CLP: "cl",
    COP: "co",
    ARS: "ar",
    ILS: "il",
    RUB: "ru",
    IDR: "id",
    MYR: "my",
    PHP: "ph",
    VND: "vn"
};

function normalizePairSymbol(symbol) {
    return symbol.replace(/\s*\(OTC\)\s*$/i, "").trim();
}

function getCurrencyFlagCode(currency) {
    return CURRENCY_FLAG_CODES[String(currency || "").toUpperCase()] || null;
}

function getCryptoFlagFile(currency) {
    const key = String(currency || "").toUpperCase();
    if (CRYPTO_FLAG_FILES[key]) return CRYPTO_FLAG_FILES[key];
    return key.toLowerCase();
}

function resolvePairFlag(currency) {
    const fiat = getCurrencyFlagCode(currency);
    if (fiat) return { dir: FLAG_IMG_DIR, file: fiat };
    return { dir: CRYPTO_FLAG_IMG_DIR, file: getCryptoFlagFile(currency) };
}

function getPairMark(symbol) {
    const clean = normalizePairSymbol(symbol);
    const parts = clean.split("/");
    if (parts.length === 2) {
        return (parts[0].slice(0, 1) + parts[1].slice(0, 1)).toUpperCase();
    }
    return clean.slice(0, 2).toUpperCase();
}

function createPairFlagImg(currency) {
    const label = String(currency || "");
    const { dir, file } = resolvePairFlag(label);
    const img = document.createElement("img");
    img.className = "pair-card__flag" + (dir === CRYPTO_FLAG_IMG_DIR ? " pair-card__flag--crypto" : "");
    img.src = dir + file + ".svg";
    img.alt = label;
    img.loading = "lazy";
    img.decoding = "async";

    img.addEventListener("error", () => {
        if (dir === CRYPTO_FLAG_IMG_DIR && file !== "generic") {
            img.src = CRYPTO_FLAG_IMG_DIR + "generic.svg";
            img.classList.add("pair-card__flag--crypto");
            return;
        }
        img.replaceWith(createPairMarkFallback(label));
    });

    return img;
}

function hasPairFlagIcon(currency) {
    const key = String(currency || "").toUpperCase();
    if (getCurrencyFlagCode(key)) return true;
    if (CRYPTO_FLAG_FILES[key]) return true;
    return /^[A-Z0-9]{2,12}$/.test(key) && key !== "XAU" && key !== "XAG";
}

function createPairMarkFallback(label) {
    const el = document.createElement("span");
    el.className = "pair-card__mark-fallback";
    el.textContent = String(label || "??").slice(0, 2).toUpperCase();
    el.setAttribute("aria-hidden", "true");
    return el;
}

function fillPairMark(markEl, symbol) {
    markEl.textContent = "";
    markEl.classList.remove("pair-card__mark--flags", "pair-card__mark--text");

    const clean = normalizePairSymbol(symbol);
    const slash = clean.indexOf("/");

    if (slash === -1) {
        markEl.classList.add("pair-card__mark--text");
        markEl.textContent = getPairMark(symbol);
        return;
    }

    const base = clean.slice(0, slash);
    const quote = clean.slice(slash + 1);
    const baseHasIcon = hasPairFlagIcon(base);
    const quoteHasIcon = hasPairFlagIcon(quote);

    if (!baseHasIcon && !quoteHasIcon) {
        markEl.classList.add("pair-card__mark--text");
        markEl.textContent = getPairMark(symbol);
        return;
    }

    markEl.classList.add("pair-card__mark--flags");
    markEl.appendChild(baseHasIcon ? createPairFlagImg(base) : createPairMarkFallback(base));
    markEl.appendChild(quoteHasIcon ? createPairFlagImg(quote) : createPairMarkFallback(quote));
}

function updatePairsScreenHeader() {
    const meta = ASSET_META[selectedAsset];
    const titleEl = $("#pairsScreenTitle");
    const subEl = $("#pairsScreenSubtitle");
    const countEl = $("#pairsCount");
    const pairs = getPairsForAsset(selectedAsset);
    if (titleEl) titleEl.textContent = t(meta.titleKey);
    if (subEl) {
        if (selectedAsset === "forex") {
            subEl.textContent =
                getPairMarketKind("forex") === "otc" ? t("pairs.forex.subOtc") : t("pairs.forex.subStd");
        } else if (selectedAsset === "crypto") {
            subEl.textContent =
                getPairMarketKind("crypto") === "otc" ? t("pairs.crypto.subOtc") : t("pairs.crypto.subStd");
        } else {
            subEl.textContent = t(meta.subKey);
        }
    }
    if (countEl) countEl.textContent = t("pairs.available", { n: pairs.length });
}

function updateAssetCards() {
    $$(".asset-card").forEach((card) => {
        card.classList.toggle("selected", card.dataset.asset === selectedAsset);
    });
}

function setBottomNavVisible(visible) {
    const nav = $("#bottomNav");
    if (nav) nav.classList.toggle("hidden", !visible);
}

function showScreen(screenId) {
    $$(".step-container").forEach((el) => el.classList.remove("active"));
    const screen = document.getElementById(screenId);
    if (screen) screen.classList.add("active");

    setBottomNavVisible(true);
    updateBottomNav(screenId);

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateBottomNav(screenId) {
    const navMap = {
        homeScreen: "signals",
        educationScreen: "education",
        leadersScreen: "leaders",
        faqScreen: "faq",
        screenshotScreen: "signals"
    };
    const activeNav = navMap[screenId] || "signals";
    $$(".nav-item").forEach((item) => {
        item.classList.toggle("active", item.dataset.nav === activeNav);
    });
}

function showHome() {
    currentMethod = null;
    showScreen("homeScreen");
}

function showAssetScreen() {
    updateAssetCards();
    showScreen("assetScreen");
}

function showPairsScreen() {
    updateMarketToggleUI();
    syncSelectedPairWithCurrentList();
    updatePairsScreenHeader();
    renderPairsList();
    showScreen("pairsScreen");
}

function showTimeframeScreen() {
    renderTimeframes();
    updateSignalCooldownUI();
    ensurePairCooldownTimer();
    showScreen("timeframeScreen");
}

const FLOW_BACK_ROUTES = {
    home: showHome,
    asset: showAssetScreen,
    pairs: showPairsScreen,
    timeframe: showTimeframeScreen
};

function handleFlowBack(target) {
    const navigate = FLOW_BACK_ROUTES[target];
    if (navigate) navigate();
}

async function showSignalScreen() {
    if (isPairOnCooldown()) {
        updateSignalCooldownUI();
        ensurePairCooldownTimer();
        return;
    }

    showLoading(t("loading.generating"));
    await delay(900);
    currentSignal = generateRandomSignal();
    markPairSignalUsed(selectedPair, selectedTimeframe);
    renderSignal();
    hideLoading();
    showScreen("signalScreen");
    updateSignalCooldownUI();
}

function showScreenshotScreen() {
    showScreen("screenshotScreen");
    const hasResult = Boolean($("#screenshotResult")?.innerHTML.trim());
    renderScreenshotTimeframes();
    setScreenshotHubVisible(!screenshotFile && !hasResult);
    setScreenshotUploadVisible(!hasResult);
    setScreenshotBackVisible(!hasResult);
    setScreenshotTimeframeVisible(Boolean(screenshotFile) && !hasResult);
    if (!screenshotInitialized) setupScreenshot();
}

function showEducationScreen() {
    renderEducation("all");
    showScreen("educationScreen");
}

function showLeadersScreen() {
    renderLeaderboard("today");
    showScreen("leadersScreen");
}

function showFaqScreen() {
    renderFaq();
    showScreen("faqScreen");
}

function createPairElement(pair) {
    const item = document.createElement("article");
    item.className = "pair-card" + (pair.symbol === selectedPair ? " is-selected" : "");
    item.dataset.symbol = pair.symbol;

    const mark = document.createElement("span");
    mark.className = "pair-card__mark";
    fillPairMark(mark, pair.symbol);

    const body = document.createElement("span");
    body.className = "pair-card__body";

    const row = document.createElement("span");
    row.className = "pair-card__row";

    const sym = document.createElement("span");
    sym.className = "pair-card__symbol";
    sym.textContent = pair.symbol;

    row.appendChild(sym);

    if (pair.hot) {
        const badge = document.createElement("span");
        badge.className = "pair-card__hot";
        badge.textContent = t("pairs.hot");
        row.appendChild(badge);
    }

    const name = document.createElement("span");
    name.className = "pair-card__name";
    name.textContent = pair.name;

    body.appendChild(row);
    body.appendChild(name);

    const check = document.createElement("span");
    check.className = "pair-card__check";
    check.innerHTML = '<i class="fas fa-check"></i>';

    item.appendChild(mark);
    item.appendChild(body);
    item.appendChild(check);

    item.addEventListener("click", () => {
        selectedPair = pair.symbol;
        $$(".pair-card").forEach((card) => {
            card.classList.toggle("is-selected", card.dataset.symbol === selectedPair);
        });
        showTimeframeScreen();
    });

    return item;
}

function renderPairsList() {
    const container = $("#pairsList");
    if (!container) return;

    const pairs = getPairsForAsset(selectedAsset);
    const searchValue = ($("#searchPairsInput")?.value || "").toLowerCase();
    const filtered = pairs.filter(
        (p) =>
            p.symbol.toLowerCase().includes(searchValue) ||
            p.name.toLowerCase().includes(searchValue)
    );

    container.innerHTML = "";

    if (!filtered.length) {
        const empty = document.createElement("div");
        empty.className = "empty-state";
        empty.innerHTML = '<i class="fas fa-search"></i><p>' + t("pairs.none") + "</p>";
        container.appendChild(empty);
        return;
    }

    const countEl = $("#pairsCount");
    if (countEl) {
        countEl.textContent =
            filtered.length === pairs.length
                ? t("pairs.available", { n: filtered.length })
                : filtered.length + " / " + pairs.length;
    }

    filtered.forEach((pair) => container.appendChild(createPairElement(pair)));
    if (hasAnyPairCooldown()) ensurePairCooldownTimer();
}

function updateTimeframeScreenSub() {
    const el = $("#timeframeScreenSub");
    if (el) el.textContent = t("tf.sub", { pair: selectedPair });
}

const TIMEFRAME_GROUPS = [
    { labelKey: "tf.seconds", items: ["5s", "10s", "15s", "30s"] },
    { labelKey: "tf.minutes", items: ["1m", "3m", "5m", "15m"] }
];

function createTimeframeChip(tf, selected, onSelect) {
    const el = document.createElement("button");
    el.type = "button";
    el.className = "tf-chip" + (selected === tf ? " is-selected" : "");
    el.dataset.tf = tf;
    el.textContent = tf;
    el.addEventListener("click", () => onSelect(tf));
    return el;
}

function renderTimeframePanel(container, selected, onSelect) {
    if (!container) return;
    container.innerHTML = "";

    TIMEFRAME_GROUPS.forEach((group) => {
        const section = document.createElement("section");
        section.className = "tf-group";

        const label = document.createElement("p");
        label.className = "tf-group__label";
        label.textContent = t(group.labelKey);

        const grid = document.createElement("div");
        grid.className = "tf-grid";
        group.items.forEach((tf) => grid.appendChild(createTimeframeChip(tf, selected, onSelect)));

        section.appendChild(label);
        section.appendChild(grid);
        container.appendChild(section);
    });
}

function renderTimeframes() {
    const container = $("#timeframeSelector");
    if (!container) return;

    updateTimeframeScreenSub();
    renderTimeframePanel(container, selectedTimeframe, (tf) => {
        selectedTimeframe = tf;
        renderTimeframes();
        updateSignalCooldownUI();
    });
}

function renderScreenshotTimeframes() {
    renderTimeframePanel($("#screenshotTimeframeSelector"), screenshotTimeframe, (tf) => {
        screenshotTimeframe = tf;
        renderScreenshotTimeframes();
    });
}

const SIGNAL_INDICATOR_KEYS = ["rsi", "macd", "ema", "bb", "stoch", "volume", "atr", "adx"];

function pickRandomItems(arr, count) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, count);
}

function generateRandomSignal() {
    const direction = Math.random() > 0.5 ? "up" : "down";
    const patterns = getSignalPatterns();
    const reasons = getSignalReasons();
    const upTrends = ["bullish", "strongBull", "moderateBull"];
    const downTrends = ["bearish", "strongBear", "moderateBear"];
    const upMomentum = ["high", "building", "steady"];
    const downMomentum = ["fading", "weak", "steady"];
    const indicatorCount = 3;

    return {
        direction,
        pattern: patterns[Math.floor(Math.random() * patterns.length)],
        reason: reasons[Math.floor(Math.random() * reasons.length)],
        confidence: Math.floor(Math.random() * 20) + 70,
        trendKey: pickRandomItems(direction === "up" ? upTrends : downTrends, 1)[0],
        momentumKey: pickRandomItems(direction === "up" ? upMomentum : downMomentum, 1)[0],
        indicatorKeys: pickRandomItems(SIGNAL_INDICATOR_KEYS, indicatorCount)
    };
}

function getSignalIndicatorsChipsHtml(keys) {
    return keys
        .map((key) => '<span class="scan-result__chip">' + t("signal.ind." + key) + "</span>")
        .join("");
}

function getVerdictStepArrowHtml(isUp) {
    const label = isUp ? t("signal.bullish") : t("signal.bearish");
    const path = isUp
        ? "M7 25 L23 9 M23 9 H13 M23 9 V17"
        : "M7 7 L23 23 M23 23 H13 M23 23 V15";
    return (
        '<span class="scan-result__verdict" aria-label="' +
        label +
        '" title="' +
        label +
        '"><svg class="scan-result__arrow" viewBox="0 0 32 32" aria-hidden="true">' +
        '<path class="scan-result__arrow-path" d="' +
        path +
        '"/></svg></span>'
    );
}

function buildScanResultHtml(signal, options = {}) {
    const screenshot = Boolean(options.screenshot);
    const timeframe = screenshot ? options.timeframe || screenshotTimeframe : selectedTimeframe;
    const isUp = signal.direction === "up";
    const mod = isUp ? "up" : "down";
    const trendKey = signal.trendKey || (isUp ? "bullish" : "bearish");
    const momentumKey = signal.momentumKey || "steady";
    const indicatorKeys = signal.indicatorKeys || SIGNAL_INDICATOR_KEYS.slice(0, 3);
    let factsHtml =
        "<dt>" +
        t("signal.timeframe") +
        "</dt><dd>" +
        timeframe +
        "</dd>" +
        "<dt>" +
        t("signal.pattern") +
        "</dt><dd>" +
        signal.pattern +
        "</dd>" +
        "<dt>" +
        t("signal.trend") +
        '</dt><dd class="scan-result__trend scan-result__trend--' +
        mod +
        '">' +
        t("signal.trend." + trendKey) +
        "</dd>" +
        "<dt>" +
        t("signal.momentum") +
        "</dt><dd>" +
        t("signal.momentum." + momentumKey) +
        "</dd>";

    const indicatorsBlockHtml =
        '<div class="scan-result__indicators-row">' +
        '<span class="scan-result__indicators-label">' +
        t("signal.indicators") +
        "</span>" +
        '<span class="scan-result__chips">' +
        getSignalIndicatorsChipsHtml(indicatorKeys) +
        "</span></div>";

    const indicatorNames = indicatorKeys.map((key) => t("signal.ind." + key)).join(", ");
    const detailHtml =
        '<p class="scan-result__detail">' +
        t("signal.detail", {
            indicators: indicatorNames,
            trend: t("signal.trend." + trendKey),
            direction: isUp ? t("signal.up") : t("signal.down")
        }) +
        "</p>";

    const pairLineHtml = screenshot
        ? ""
        : '<p class="scan-result__pair-line"><span class="scan-result__pair-label">' + t("signal.pair") + "</span> " +
          selectedPair +
          "</p>";


    return (
        '<article class="scan-result scan-result--' +
        mod +
        '">' +
        '<header class="scan-result__banner">' +
        getVerdictStepArrowHtml(isUp) +
        '<p class="scan-result__signal-text">' + t("signal.yourIs") + ' <span class="scan-result__signal-dir">' +
        (isUp ? t("signal.up") : t("signal.down")) +
        "</span></p></header>" +
        '<div class="scan-result__body">' +
        pairLineHtml +
        '<div class="scan-result__row">' +
        '<span class="scan-result__label">' + t("signal.confidence") + "</span>" +
        '<span class="scan-result__track" aria-hidden="true"><i style="width:' +
        signal.confidence +
        '%"></i></span>' +
        '<span class="scan-result__value">' +
        signal.confidence +
        "%</span></div>" +
        '<dl class="scan-result__facts">' +
        factsHtml +
        "</dl>" +
        indicatorsBlockHtml +
        '<p class="scan-result__insight">' +
        signal.reason +
        "</p>" +
        detailHtml +
        "</div></article>"
    );
}

function buildSignalCardHtml(signal, options) {
    return buildScanResultHtml(signal, options);
}

function renderSignal() {
    if (!currentSignal) currentSignal = generateRandomSignal();
    const el = $("#signalContent");
    if (el) {
        el.innerHTML = buildSignalCardHtml(currentSignal, { screenshot: false });
    }
}

async function newSignal() {
    if (isPairOnCooldown()) {
        updateSignalCooldownUI();
        ensurePairCooldownTimer();
        return;
    }

    const newBtn = $("#newSignalBtn");
    if (newBtn?.dataset.generating === "1") return;

    if (newBtn) newBtn.dataset.generating = "1";

    showLoading("Generating signal...");
    await delay(900);
    currentSignal = generateRandomSignal();
    markPairSignalUsed(selectedPair, selectedTimeframe);
    renderSignal();
    hideLoading();

    if (newBtn) delete newBtn.dataset.generating;

    updateSignalCooldownUI();
}

function setScreenshotHubVisible(visible) {
    const hub = $("#screenshotHub");
    if (hub) hub.hidden = !visible;
}

function setScreenshotUploadVisible(visible) {
    const panel = $("#screenshotUpload");
    if (panel) panel.hidden = !visible;
}

function setScreenshotBackVisible(visible) {
    const btn = $("#screenshotBackBtn");
    if (btn) btn.hidden = !visible;
}

function setScreenshotTimeframeVisible(visible) {
    const wrap = $("#screenshotTimeframeWrap");
    if (wrap) wrap.hidden = !visible;
}

function getScreenshotResultActionsHtml() {
    return (
        '<div class="screenshot-result-actions">' +
        '<button type="button" class="btn-secondary" data-screenshot-back>' +
        '<i class="fas fa-arrow-left"></i> ' + t("btn.backSignals") + "</button>" +
        '<button type="button" class="btn-secondary screenshot-result__reset" data-screenshot-reset>' + t("shot.new") + "</button>" +
        "</div>"
    );
}

function resetScreenshotUI() {
    screenshotFile = null;
    const uploadArea = $("#uploadArea");
    const placeholder = $("#uploadPlaceholder");
    const actions = $("#screenshotActions");
    const result = $("#screenshotResult");
    const fileInput = $("#fileInput");

    if (uploadArea) {
        uploadArea.classList.remove("has-image");
        const img = uploadArea.querySelector("img");
        if (img) img.remove();
    }
    if (placeholder) placeholder.style.display = "";
    if (actions) actions.hidden = true;
    if (result) result.innerHTML = "";
    if (fileInput) fileInput.value = "";
    setScreenshotHubVisible(true);
    setScreenshotUploadVisible(true);
    setScreenshotBackVisible(true);
    setScreenshotTimeframeVisible(false);
}

function showScreenshotPreview(file) {
    if (!file || !file.type.startsWith("image/")) return;
    if (file.size > 10 * 1024 * 1024) {
        alert(t("shot.fileLarge"));
        return;
    }

    screenshotFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
        const uploadArea = $("#uploadArea");
        const placeholder = $("#uploadPlaceholder");
        const actions = $("#screenshotActions");
        if (!uploadArea) return;

        let img = uploadArea.querySelector("img");
        if (!img) {
            img = document.createElement("img");
            img.alt = "Chart preview";
            uploadArea.appendChild(img);
        }
        img.src = e.target.result;
        uploadArea.classList.add("has-image");
        if (placeholder) placeholder.style.display = "none";
        if (actions) actions.hidden = false;
        $("#screenshotResult").innerHTML = "";
        setScreenshotHubVisible(false);
        setScreenshotUploadVisible(true);
        setScreenshotTimeframeVisible(true);
        renderScreenshotTimeframes();
    };
    reader.readAsDataURL(file);
}

function setupScreenshot() {
    screenshotInitialized = true;
    const uploadArea = $("#uploadArea");
    const fileInput = $("#fileInput");

    uploadArea?.addEventListener("click", (e) => {
        if (e.target.closest("#screenshotActions, #screenshotBackBtn, #screenshotTimeframeWrap")) return;
        fileInput?.click();
    });

    fileInput?.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) showScreenshotPreview(file);
    });

    uploadArea?.addEventListener("dragover", (e) => {
        e.preventDefault();
        uploadArea.classList.add("dragover");
    });

    uploadArea?.addEventListener("dragleave", () => {
        uploadArea.classList.remove("dragover");
    });

    uploadArea?.addEventListener("drop", (e) => {
        e.preventDefault();
        uploadArea.classList.remove("dragover");
        const file = e.dataTransfer.files[0];
        if (file) showScreenshotPreview(file);
    });

    $("#clearScreenshotBtn")?.addEventListener("click", (e) => {
        e.stopPropagation();
        resetScreenshotUI();
    });

    $("#analyzeScreenshotBtn")?.addEventListener("click", async (e) => {
        e.stopPropagation();
        if (!screenshotFile) return;
        showLoading(t("loading.chart"));
        await delay(1200);
        const signal = generateRandomSignal();
        const result = $("#screenshotResult");
        if (result) {
            result.innerHTML =
                buildSignalCardHtml(signal, { screenshot: true, timeframe: screenshotTimeframe }) +
                getScreenshotResultActionsHtml();
            setScreenshotUploadVisible(false);
            setScreenshotHubVisible(false);
            setScreenshotBackVisible(false);
        }
        hideLoading();
    });

    $("#screenshotBackBtn")?.addEventListener("click", () => {
        resetScreenshotUI();
        showHome();
    });

    $("#screenshotResult")?.addEventListener("click", (e) => {
        if (e.target.closest("[data-screenshot-back]")) {
            resetScreenshotUI();
            showHome();
            return;
        }
        if (e.target.closest("[data-screenshot-reset]")) resetScreenshotUI();
    });
}

function renderEducation(category) {
    const catKey = category === "all" ? "all" : category;
    const meta = {
        label: t("edu.meta." + catKey + ".label"),
        subtitle: t("edu.meta." + catKey + ".sub")
    };
    const allLessons = getEducationLessons();
    const lessons = category === "all" ? allLessons : allLessons.filter((l) => l.cat === category);
    const container = $("#educationList");
    if (!container) return;

    const head =
        '<div class="education-head">' +
        '<div><p class="education-head__label">' + t("edu.hub") + "</p>" +
        '<p class="education-head__title">' + meta.label + "</p>" +
        '<p class="education-head__subtitle">' + meta.subtitle + "</p></div>" +
        '<div class="education-head__stat">' + lessons.length + " " + (lessons.length === 1 ? t("edu.lesson") : t("edu.lessons")) + "</div></div>";

    const stack =
        lessons.length === 0
            ? '<p class="edu-empty">' + t("edu.empty") + "</p>"
            : '<div class="edu-stack">' +
              lessons
                  .map((lesson, index) => {
                      const num = String(index + 1).padStart(2, "0");
                      const tag = t("edu.cat." + lesson.cat) || lesson.cat;
                      return (
                          '<article class="edu-lesson edu-lesson--' + lesson.cat + '">' +
                          '<button type="button" class="edu-lesson__trigger" aria-expanded="false">' +
                          '<span class="edu-lesson__icon"><i class="fas ' + lesson.icon + '"></i></span>' +
                          '<span class="edu-lesson__body">' +
                          '<span class="edu-lesson__meta">' +
                          '<span class="edu-lesson__tag">' + tag + "</span>" +
                          "</span>" +
                          '<span class="edu-lesson__title">' + lesson.title + "</span>" +
                          "</span>" +
                          '<span class="edu-lesson__num">' + num + "</span>" +
                          '<span class="edu-lesson__chevron" aria-hidden="true"><i class="fas fa-chevron-down"></i></span>' +
                          "</button>" +
                          '<div class="edu-lesson__content">' +
                          '<div class="edu-lesson__content-inner"><p>' + lesson.desc + "</p></div>" +
                          "</div></article>"
                      );
                  })
                  .join("") +
              "</div>";

    container.innerHTML = head + stack;
}

function formatProfit(value) {
    return "+$" + value.toFixed(2) + "k";
}

function renderLeaderboard(period) {
    const config = LEADERBOARD_PERIODS[period] || LEADERBOARD_PERIODS.today;
    const data = getLeaderboard(period);
    const container = $("#leaderboardList");
    if (!container) return;

    const medals = ["\ud83e\udd47", "\ud83e\udd48", "\ud83e\udd49"];
    const topProfit = data[0]?.profit || 0;

    const head =
        '<div class="leaderboard-head">' +
        '<div><p class="leaderboard-head__label">' + t("lb.head") + "</p>" +
        '<p class="leaderboard-head__period">' + t(config.labelKey) + "</p></div>" +
        '<div class="leaderboard-head__badge">' + t("lb.active", { n: data.length }) + "</div></div>";

    const podiumOrder = [1, 0, 2];
    const podiumHtml = podiumOrder
        .map((idx) => {
            const trader = data[idx];
            if (!trader) return "";
            const place = idx + 1;
            const extra = place === 1 ? " leader-podium__item--first" : "";
            return (
                '<article class="leader-podium__item' + extra + " leader-podium__item--p" + place + '">' +
                '<span class="leader-podium__medal">' + medals[idx] + "</span>" +
                '<span class="leader-podium__id">' + trader.id + "</span>" +
                '<span class="leader-podium__profit">' + formatProfit(trader.profit) + "</span>" +
                '<span class="leader-podium__trades">' + trader.trades + " " + t("lb.trades") + "</span>" +
                "</article>"
            );
        })
        .join("");

    const podium = '<div class="leaderboard-podium">' + podiumHtml + "</div>";

    const list =
        '<div class="leaderboard-list">' +
        data
            .map((trader, idx) => {
                const rank = idx + 1;
                const isTop = idx < 3;
                const rankLabel = isTop ? medals[idx] : String(rank);
                const progress = topProfit > 0 ? Math.max(12, Math.round((trader.profit / topProfit) * 100)) : 0;
                return (
                    '<article class="leader-card' +
                    (isTop ? " leader-card--top leader-card--rank-" + rank : "") +
                    '">' +
                    '<div class="leader-card__rank">' + rankLabel + "</div>" +
                    '<div class="leader-card__main">' +
                    '<div class="leader-card__row">' +
                    '<span class="leader-card__id">' + trader.id + "</span>" +
                    '<span class="leader-card__profit">' + formatProfit(trader.profit) + "</span>" +
                    "</div>" +
                    '<div class="leader-card__meta">' +
                    "<span>" + trader.trades + " " + t("lb.trades") + "</span>" +
                    '<span class="leader-card__bar"><i style="width:' + progress + '%"></i></span>' +
                    "</div></div></article>"
                );
            })
            .join("") +
        "</div>";

    container.innerHTML = head + podium + list;
}

function renderFaq() {
    const container = $("#faqList");
    if (!container) return;

    container.innerHTML = getFaqContent()
        .map((item, index) => {
            const num = String(index + 1).padStart(2, "0");
            return (
                '<article class="faq-card">' +
                '<button type="button" class="faq-card__trigger" aria-expanded="false">' +
                '<span class="faq-card__num">' + num + "</span>" +
                '<span class="faq-card__question">' + item.q + "</span>" +
                '<span class="faq-card__toggle" aria-hidden="true">' +
                '<i class="fas fa-plus faq-card__icon faq-card__icon--plus"></i>' +
                '<i class="fas fa-xmark faq-card__icon faq-card__icon--close"></i>' +
                "</span>" +
                "</button>" +
                '<div class="faq-card__answer"><div class="faq-card__answer-inner"><p>' +
                item.a +
                "</p></div></div>" +
                "</article>"
            );
        })
        .join("");
}

function bindEvents() {
    $$(".method-card").forEach((card) => {
        card.addEventListener("click", () => {
            currentMethod = card.dataset.method;
            if (currentMethod === "instrument") showAssetScreen();
            else if (currentMethod === "screenshot") showScreenshotScreen();
        });
    });

    $$(".asset-card").forEach((card) => {
        card.addEventListener("click", () => {
            selectedAsset = card.dataset.asset;
            if (PAIR_MARKET_TOGGLE_ASSETS.includes(selectedAsset)) {
                syncSelectedPairWithCurrentList();
            } else {
                selectedPair = ASSET_META[selectedAsset].defaultPair;
            }
            updateAssetCards();
        });
    });

    $("#marketKindToggle")?.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-market-kind]");
        if (!btn || !PAIR_MARKET_TOGGLE_ASSETS.includes(selectedAsset)) return;
        setPairMarketKind(btn.dataset.marketKind);
        updateMarketToggleUI();
        syncSelectedPairWithCurrentList();
        updatePairsScreenHeader();
        renderPairsList();
    });

    $("#assetContinueBtn")?.addEventListener("click", showPairsScreen);

    $("#generateSignalBtn")?.addEventListener("click", () => {
        showSignalScreen();
    });

    $("#newSignalBtn")?.addEventListener("click", newSignal);

    document.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-flow-back]");
        if (!btn) return;
        handleFlowBack(btn.dataset.flowBack);
    });

    $("#searchPairsInput")?.addEventListener("input", renderPairsList);

    $$("#eduCategory .edu-tab").forEach((tab) => {
        tab.addEventListener("click", () => {
            $$("#eduCategory .edu-tab").forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");
            renderEducation(tab.dataset.cat);
        });
    });

    $$("#lbTabs .lb-tab").forEach((tab) => {
        tab.addEventListener("click", () => {
            $$("#lbTabs .lb-tab").forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");
            renderLeaderboard(tab.dataset.period);
        });
    });

    $$(".nav-item").forEach((item) => {
        item.addEventListener("click", () => {
            const nav = item.dataset.nav;
            if (nav === "signals") showHome();
            else if (nav === "education") showEducationScreen();
            else if (nav === "leaders") showLeadersScreen();
            else if (nav === "faq") showFaqScreen();
        });
    });

    $("#educationList")?.addEventListener("click", (e) => {
        const trigger = e.target.closest(".edu-lesson__trigger");
        if (!trigger) return;
        const lesson = trigger.closest(".edu-lesson");
        const list = $("#educationList");
        if (!lesson || !list) return;
        const willOpen = !lesson.classList.contains("is-open");
        list.querySelectorAll(".edu-lesson").forEach((item) => {
            item.classList.toggle("is-open", willOpen && item === lesson);
            item.querySelector(".edu-lesson__trigger")?.setAttribute(
                "aria-expanded",
                willOpen && item === lesson ? "true" : "false"
            );
        });
    });

    $("#faqList")?.addEventListener("click", (e) => {
        const trigger = e.target.closest(".faq-card__trigger");
        if (!trigger) return;
        const card = trigger.closest(".faq-card");
        const list = $("#faqList");
        if (!card || !list) return;
        const willOpen = !card.classList.contains("is-open");
        list.querySelectorAll(".faq-card").forEach((c) => {
            c.classList.toggle("is-open", willOpen && c === card);
            c.querySelector(".faq-card__trigger")?.setAttribute(
                "aria-expanded",
                willOpen && c === card ? "true" : "false"
            );
        });
    });

    $("#brandHomeBtn")?.addEventListener("click", showHome);

    $("#closeBtn")?.addEventListener("click", () => {
        if (window.Telegram?.WebApp) {
            window.Telegram.WebApp.close();
        } else if (confirm(t("close.confirm"))) {
            showHome();
        }
    });
}

function initTelegramWebApp() {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;

    tg.ready();
    tg.expand();

    if (typeof tg.requestFullscreen === "function") {
        try {
            tg.requestFullscreen();
        } catch (_) {
            /* older Telegram clients */
        }
    }

    if (typeof tg.disableVerticalSwipes === "function") {
        tg.disableVerticalSwipes();
    }

    if (typeof tg.setHeaderColor === "function") {
        tg.setHeaderColor("#0a0a0f");
    }
    if (typeof tg.setBackgroundColor === "function") {
        tg.setBackgroundColor("#0a0a0f");
    }

    document.documentElement.classList.add("tg-webapp");

    const applyViewport = () => {
        const height = tg.viewportStableHeight || tg.viewportHeight;
        if (height) {
            document.documentElement.style.setProperty("--app-height", height + "px");
        }
    };

    const applySafeArea = () => {
        const inset = tg.safeAreaInset;
        const contentInset = tg.contentSafeAreaInset;
        if (inset) {
            document.documentElement.style.setProperty("--safe-top", inset.top + "px");
            document.documentElement.style.setProperty("--safe-bottom", inset.bottom + "px");
            document.documentElement.style.setProperty("--safe-left", inset.left + "px");
            document.documentElement.style.setProperty("--safe-right", inset.right + "px");
        }
        if (contentInset) {
            document.documentElement.style.setProperty("--tg-content-safe-top", contentInset.top + "px");
            document.documentElement.style.setProperty(
                "--tg-content-safe-bottom",
                contentInset.bottom + "px"
            );
        }
    };

    applyViewport();
    applySafeArea();
    tg.onEvent("viewportChanged", applyViewport);
    if (typeof tg.onEvent === "function") {
        tg.onEvent("safeAreaChanged", applySafeArea);
        tg.onEvent("contentSafeAreaChanged", applySafeArea);
    }
}

function refreshAppLanguage() {
    updatePairsScreenHeader();
    renderPairsList();
    renderTimeframes();
    renderScreenshotTimeframes();
    updateSignalCooldownUI();
    if (currentSignal) renderSignal();
    const activeEdu = document.querySelector("#eduCategory .edu-tab.active");
    renderEducation(activeEdu?.dataset.cat || "all");
    const activeLb = document.querySelector("#lbTabs .lb-tab.active");
    renderLeaderboard(activeLb?.dataset.period || "today");
    renderFaq();
}

window.refreshAppLanguage = refreshAppLanguage;

function init() {
    initI18n();
    initTelegramWebApp();
    bindEvents();
    renderPairsList();
    renderTimeframes();
    renderScreenshotTimeframes();
    renderEducation("all");
    renderLeaderboard("today");
    renderFaq();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}

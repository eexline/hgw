



function resolveApiUrl() {
    if (typeof window === "undefined") return "/api";
    const host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1") {
        return "http://127.0.0.1:8000";
    }
    return "/api";
}

const API_URL = resolveApiUrl();
const FLAGS_PATH = "img/flags";
const FLAGS_CDN = "https://hatscripts.github.io/circle-flags/flags";

function flagImgUrl(code) {
    return `${FLAGS_PATH}/${code}.svg`;
}

function flagImgTag(code, className, alt) {
    const cdn = `${FLAGS_CDN}/${code}.svg`;
    const local = flagImgUrl(code);
    return `<img src="${local}" class="${className}" alt="${alt}" onerror="this.onerror=null;this.src='${cdn}'">`;
}

const LANG_FLAG_FILES = {
    ru: "ru",
    en: "gb",
    uz: "uz",
    hi: "in",
    pt: "br",
    ar: "sa",
    kz: "kz",
};

function clearDirectionBorderClasses() {
    const mainCard = document.getElementById('mainCard');
    const pairRow = document.querySelector('.signal-pair');
    const chipTf = document.getElementById('chipTf');
    const chipAcc = document.getElementById('chipAcc');
    const dirBlock = document.getElementById('dirBlock');
    const progressTrack = document.getElementById('progressTrack');
    [pairRow, chipTf, chipAcc, dirBlock, progressTrack, mainCard].forEach((el) => {
        if (el) el.classList.remove('dir-up', 'dir-down');
    });
}

function syncDirectionStyles() {
    const dirBlock = document.getElementById('dirBlock');
    const pairRow = document.querySelector('.signal-pair');
    const chipTf = document.getElementById('chipTf');
    const chipAcc = document.getElementById('chipAcc');
    const progressTrack = document.getElementById('progressTrack');
    const mainCard = document.getElementById('mainCard');
    if (!metaDir) return;

    const isUp = metaDir.classList.contains('up');
    const isDown = metaDir.classList.contains('down');
    const showBorder = isSignalActive && (isUp || isDown);

    if (dirBlock) {
        dirBlock.classList.toggle('is-up', isUp);
        dirBlock.classList.toggle('is-down', isDown);
    }

    const hasResultGlow = mainCard && (
        mainCard.classList.contains('win-glow')
        || mainCard.classList.contains('lose-glow')
        || mainCard.classList.contains('neutral-glow')
    );

    const applyDir = (el) => {
        if (!el) return;
        el.classList.toggle('dir-up', showBorder && isUp && !hasResultGlow);
        el.classList.toggle('dir-down', showBorder && isDown && !hasResultGlow);
    };

    applyDir(pairRow);
    applyDir(chipTf);
    applyDir(chipAcc);
    applyDir(dirBlock);
    applyDir(progressTrack);

    if (mainCard && !hasResultGlow) {
        mainCard.classList.toggle('dir-up', showBorder && isUp);
        mainCard.classList.toggle('dir-down', showBorder && isDown);
    } else if (mainCard) {
        mainCard.classList.remove('dir-up', 'dir-down');
    }
}

function syncDirChip() {
    syncDirectionStyles();
}

function updateLangBtnFlag(lang) {
    const img = document.getElementById("currentLangFlag");
    if (!img) return;
    const file = LANG_FLAG_FILES[lang] || "gb";
    img.src = flagImgUrl(file);
    img.alt = lang;
    img.onerror = () => {
        img.onerror = null;
        img.src = `${FLAGS_CDN}/${file}.svg`;
    };
}

const translations = {
    ru: {
        select_language: "Выберите язык",
        lang_btn: "Выбрать язык",
        signal_label: "СИГНАЛ",
        pair_label: "Валютная пара",
        select_pair: "Выберите пару",
        pair_search_placeholder: "Поиск пары...",
        pair_badge_otc: "OTC",
        pair_badge_forex: "Forex",
        tf_label: "Таймфрейм",
        accuracy_label: "Точность",
        direction_label: "Направление",
        until_label: "до",
        waiting_status: "Ожидание...",
        get_signal_btn: "ПОЛУЧИТЬ СИГНАЛ",
        live_chart: "ЖИВОЙ ГРАФИК",
        searching_signal: "ПОИСК СИГНАЛА...",
        nav_home: "ГЛАВНАЯ",
        nav_profile: "ПРОФИЛЬ",
        signal_found: "Сигнал найден",
        error: "Ошибка",
        up: "Покупка",
        down: "Продажа",
        win: "WIN",
        lose: "LOSE",
        neutral: "NEUTRAL",
        profile_page_title: "ПРОФИЛЬ",
        total_signals: "Всего сигналов",
        win_rate_label: "Win Rate",
        stat_wins: "Побед",
        history_title: "ИСТОРИЯ СДЕЛОК",
        history_empty: "Нет сделок за этот период",
        history_loading: "Загрузка…",
        history_active: "Активна",
        profile_guest: "Откройте приложение в Telegram, чтобы видеть профиль и историю",
        filter_today: "Сегодня",
        filter_week: "Неделя",
        filter_month: "Месяц",
        filter_all: "Все",
        market_regular: "Обычный",
        market_otc: "OTC",
        chart_unavailable: "График недоступен",
        chart_otc_desc: "График недоступен для OTC пар",
        alert_title: "Сигнал недоступен",
        alert_desc: "Вы не можете получить сигнал сейчас, так как предыдущий сигнал еще активен. Пожалуйста, дождитесь окончания таймфрейма.",
        alert_cooldown_desc: "Новый сигнал будет доступен через",
        cooldown_status: "Кулдаун",
        cooldown_btn: "Подождите",
        alert_btn_got_it: "Понятно",
        market_closed_btn: "Откроется",
        market_closed_status: "Рынок Forex закрыт",
        market_closed_alert: "В выходные рынок Forex не торгуется. Сигнал будет доступен после открытия."
    },
    en: {
        select_language: "Select Language",
        lang_btn: "Select Language",
        signal_label: "SIGNAL",
        pair_label: "Currency Pair",
        select_pair: "Select pair",
        pair_search_placeholder: "Search pair...",
        pair_badge_otc: "OTC",
        pair_badge_forex: "Forex",
        tf_label: "Timeframe",
        accuracy_label: "Accuracy",
        direction_label: "Direction",
        until_label: "until",
        waiting_status: "Waiting...",
        get_signal_btn: "GET SIGNAL",
        live_chart: "LIVE CHART",
        searching_signal: "SEARCHING SIGNAL...",
        nav_home: "HOME",
        nav_profile: "PROFILE",
        signal_found: "Signal found",
        error: "Error",
        up: "Buy",
        down: "Sell",
        win: "WIN",
        lose: "LOSE",
        neutral: "NEUTRAL",
        profile_page_title: "PROFILE",
        total_signals: "Total Signals",
        win_rate_label: "Win Rate",
        stat_wins: "Wins",
        history_title: "TRADING HISTORY",
        history_empty: "No trades for this period",
        history_loading: "Loading…",
        history_active: "Active",
        profile_guest: "Open the app in Telegram to see your profile and history",
        filter_today: "Today",
        filter_week: "Week",
        filter_month: "Month",
        filter_all: "All",
        market_regular: "Regular",
        market_otc: "OTC",
        chart_unavailable: "Chart Unavailable",
        chart_otc_desc: "Chart is not available for OTC pairs",
        alert_title: "Signal Unavailable",
        alert_desc: "You cannot get a new signal right now because the previous signal is still active. Please wait for the timeframe to end.",
        alert_cooldown_desc: "Next signal available in",
        cooldown_status: "Cooldown",
        cooldown_btn: "Wait",
        alert_btn_got_it: "Got it",
        market_closed_btn: "Opens",
        market_closed_status: "Forex market is closed",
        market_closed_alert: "Forex is closed on weekends. Signals will be available when trading resumes."
    },
    uz: {
        select_language: "Tilni tanlang",
        lang_btn: "Tilni tanlang",
        signal_label: "SIGNAL",
        pair_label: "Valyuta juftligi",
        tf_label: "Taymfrey",
        accuracy_label: "Aniqlik",
        direction_label: "Yo'nalish",
        until_label: "gacha",
        waiting_status: "Kutilmoqda...",
        get_signal_btn: "SIGNAL OLISH",
        live_chart: "JONLI GRAFIK",
        searching_signal: "SIGNAL QIDIRILMOQDA...",
        nav_home: "ASOSIY",
        nav_profile: "PROFIL",
        signal_found: "Signal topildi",
        error: "Xato",
        up: "Sotib olish",
        down: "Sotish",
        win: "WIN",
        lose: "LOSE",
        neutral: "NEUTRAL",
        profile_page_title: "PROFIL",
        total_signals: "Jami signallar",
        win_rate_label: "Win Rate",
        history_title: "SAVDO TARIXI",
        filter_today: "Bugun",
        filter_week: "Hafta",
        filter_month: "Oy",
        filter_all: "Barchasi",
        market_regular: "Odatiy",
        market_otc: "OTC",
        chart_unavailable: "Grafik mavjud emas",
        chart_otc_desc: "OTC juftliklari uchun grafik mavjud emas",
        alert_title: "Signal mavjud emas",
        alert_desc: "Oldingi signal hali faol bo'lganligi sababli hozir yangi signal ololmaysiz. Iltimos, taymfrey tugashini kuting.",
        alert_cooldown_desc: "Keyingi signal",
        cooldown_status: "Kutish",
        cooldown_btn: "Kuting",
        alert_btn_got_it: "Tushunarli"
    },
    hi: {
        select_language: "भाषा चुनें",
        lang_btn: "भाषा चुनें",
        signal_label: "संकेत",
        pair_label: "मुद्रा जोड़ी",
        tf_label: "समय सीमा",
        accuracy_label: "सटीकता",
        direction_label: "दिशा",
        until_label: "तक",
        waiting_status: "प्रतीक्षा...",
        get_signal_btn: "संकेत प्राप्त करें",
        live_chart: "लाइव चार्ट",
        searching_signal: "संकेत खोज रहा है...",
        nav_home: "घर",
        nav_profile: "प्रोफ़ाइल",
        signal_found: "संकेत मिला",
        error: "त्रुटि",
        up: "खरीदें",
        down: "बेचें",
        win: "जीत",
        lose: "हार",
        neutral: "तटस्थ"
    },
    pt: {
        select_language: "Selecione o idioma",
        lang_btn: "Selecione o idioma",
        signal_label: "SINAL",
        pair_label: "Par de moedas",
        tf_label: "Prazo",
        accuracy_label: "Precisão",
        direction_label: "Direção",
        until_label: "até",
        waiting_status: "Aguardando...",
        get_signal_btn: "OBTER SINAL",
        live_chart: "GRÁFICO AO VIVO",
        searching_signal: "BUSCANDO SINAL...",
        nav_home: "INÍCIO",
        nav_profile: "PERFIL",
        signal_found: "Sinal encontrado",
        error: "Erro",
        up: "Compra",
        down: "Venda",
        win: "WIN",
        lose: "LOSE",
        neutral: "NEUTRAL"
    },
    ar: {
        select_language: "اختر اللغة",
        lang_btn: "اختر اللغة",
        signal_label: "إشارة",
        pair_label: "زوج العملات",
        tf_label: "الإطار الزمني",
        accuracy_label: "الدقة",
        direction_label: "الاتجاه",
        until_label: "حتى",
        waiting_status: "انتظار...",
        get_signal_btn: "احصل على إشارة",
        live_chart: "رسم بياني مباشر",
        searching_signal: "جاري البحث عن إشارة...",
        nav_home: "الرئيسية",
        nav_profile: "الملف الشخصي",
        signal_found: "تم العثور على إشارة",
        error: "خطأ",
        up: "شراء",
        down: "بيع",
        win: "فوز",
        lose: "خسارة",
        neutral: "محايد"
    },
    kz: {
        select_language: "Тілді таңдаңыз",
        lang_btn: "Тілді таңдаңыз",
        signal_label: "СИГНАЛ",
        pair_label: "Валюта жұбы",
        tf_label: "Таймфрейм",
        accuracy_label: "Дәлдік",
        direction_label: "Бағыт",
        until_label: "дейін",
        waiting_status: "Күту...",
        get_signal_btn: "СИГНАЛ АЛУ",
        live_chart: "ТІКЕЛЕЙ ГРАФИК",
        searching_signal: "СИГНАЛ ІЗДЕУ...",
        nav_home: "БАСТЫ",
        nav_profile: "ПРОФИЛЬ",
        signal_found: "Сигнал табылды",
        error: "Қате",
        up: "Сатып алу",
        down: "Сату",
        win: "WIN",
        lose: "LOSE",
        neutral: "NEUTRAL"
    }
};

let currentLang = localStorage.getItem('trade_ai_lang') || 'en';
let isOTC = false;
let isSignalActive = false; // Lock flag
let cooldownInterval = null;

const COOLDOWNS_KEY = 'trade_ai_pair_cooldowns';
const COOLDOWN_KEY_LEGACY = 'trade_ai_signal_cooldown';

function tKey(key) {
    return translations[currentLang][key] || translations.en[key] || key;
}

/** Forex: closed Fri 22:00 UTC → Sun 22:00 UTC (weekend). */
const FOREX_CLOSE_UTC_HOUR = 22;

function isForexMarketOpen(now = new Date()) {
    const day = now.getUTCDay();
    const mins = now.getUTCHours() * 60 + now.getUTCMinutes();
    const closeMins = FOREX_CLOSE_UTC_HOUR * 60;
    if (day === 5 && mins >= closeMins) return false;
    if (day === 6) return false;
    if (day === 0 && mins < closeMins) return false;
    return true;
}

function getNextForexOpenDate(now = new Date()) {
    if (isForexMarketOpen(now)) return null;

    const open = new Date(
        Date.UTC(
            now.getUTCFullYear(),
            now.getUTCMonth(),
            now.getUTCDate(),
            FOREX_CLOSE_UTC_HOUR,
            0,
            0,
            0
        )
    );
    const day = now.getUTCDay();
    const hour = now.getUTCHours();

    if (day === 5 && hour >= FOREX_CLOSE_UTC_HOUR) {
        open.setUTCDate(open.getUTCDate() + 2);
    } else if (day === 6) {
        open.setUTCDate(open.getUTCDate() + 1);
    } else if (day === 0 && hour < FOREX_CLOSE_UTC_HOUR) {
        /* same Sunday */
    } else {
        const daysUntilSunday = (7 - day) % 7 || 7;
        open.setUTCDate(open.getUTCDate() + daysUntilSunday);
    }
    return open;
}

function formatMarketOpenDate(date) {
    const locale =
        currentLang === "ru" ? "ru-RU"
        : currentLang === "uz" ? "uz-UZ"
        : currentLang === "hi" ? "hi-IN"
        : currentLang === "pt" ? "pt-BR"
        : currentLang === "ar" ? "ar-SA"
        : currentLang === "kz" ? "kk-KZ"
        : "en-GB";
    return date.toLocaleString(locale, {
        weekday: "short",
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
    });
}

function isForexModeClosed() {
    return !isOTC && !isForexMarketOpen();
}

let marketCheckInterval = null;

function ensureMarketTicker() {
    if (marketCheckInterval) return;
    marketCheckInterval = setInterval(() => refreshSignalButton(), 30000);
}

function normalizePairKey(pair) {
    return String(pair || '').trim();
}

function getCurrentPair() {
    return pairSelect ? normalizePairKey(pairSelect.value) : '';
}

function loadCooldownsMap() {
    try {
        const raw = localStorage.getItem(COOLDOWNS_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch {
        return {};
    }
}

function saveCooldownsMap(map) {
    localStorage.setItem(COOLDOWNS_KEY, JSON.stringify(map));
}

function migrateLegacyCooldown() {
    const legacy = localStorage.getItem(COOLDOWN_KEY_LEGACY);
    if (!legacy) return;
    localStorage.removeItem(COOLDOWN_KEY_LEGACY);
    const until = parseInt(legacy, 10);
    const pair = getCurrentPair();
    if (until > Date.now() && pair) {
        const map = loadCooldownsMap();
        map[pair] = until;
        saveCooldownsMap(map);
    }
}

function getCooldownUntil(pair) {
    const key = normalizePairKey(pair ?? getCurrentPair());
    const map = loadCooldownsMap();
    return parseInt(map[key] || '0', 10);
}

function getCooldownRemainingMs(pair) {
    return Math.max(0, getCooldownUntil(pair) - Date.now());
}

function setSignalCooldownUntil(untilMs, pair) {
    const key = normalizePairKey(pair ?? getCurrentPair());
    if (!key) return;
    const map = loadCooldownsMap();
    map[key] = untilMs;
    saveCooldownsMap(map);
    startCooldownTicker();
}

function pruneExpiredCooldowns() {
    const map = loadCooldownsMap();
    const now = Date.now();
    let changed = false;
    for (const key of Object.keys(map)) {
        if (map[key] <= now) {
            delete map[key];
            changed = true;
        }
    }
    if (changed) saveCooldownsMap(map);
}

function clearSignalCooldown(pair) {
    const key = normalizePairKey(pair ?? getCurrentPair());
    const map = loadCooldownsMap();
    if (map[key]) {
        delete map[key];
        saveCooldownsMap(map);
    }
    if (getCooldownRemainingMs() <= 0 && cooldownInterval) {
        clearInterval(cooldownInterval);
        cooldownInterval = null;
    }
    refreshSignalButton();
}

function formatCooldownButton(ms) {
    return `${Math.max(0, Math.ceil(ms / 1000))}s`;
}

function formatCooldown(ms) {
    return formatCooldownButton(ms);
}

function getSignalBtnLabel() {
    const span = getSignalBtn?.querySelector('span');
    return span;
}

function ensureCooldownTicker() {
    const cd = getCooldownRemainingMs();
    if (cd > 0 && !cooldownInterval) {
        startCooldownTicker();
    }
}

function refreshSignalButton() {
    if (!getSignalBtn) return;
    const span = getSignalBtnLabel();
    const cd = getCooldownRemainingMs();

    getSignalBtn.classList.remove("is-market-closed");

    if (isForexModeClosed()) {
        getSignalBtn.disabled = true;
        getSignalBtn.classList.add("is-market-closed");
        const openAt = getNextForexOpenDate();
        if (span) {
            span.textContent = openAt
                ? `${tKey("market_closed_btn")} ${formatMarketOpenDate(openAt)}`
                : tKey("market_closed_status");
        }
        if (statusText) statusText.textContent = tKey("market_closed_status");
        ensureMarketTicker();
        return;
    }

    if (cd > 0) {
        getSignalBtn.disabled = true;
        const secs = formatCooldownButton(cd);
        if (span) span.textContent = `${tKey('cooldown_btn')} ${secs}`;
        if (statusText) {
            statusText.textContent = isSignalActive
                ? tKey('signal_found')
                : `${tKey('cooldown_status')} ${secs}`;
        }
        ensureCooldownTicker();
        return;
    }

    if (cooldownInterval) {
        clearInterval(cooldownInterval);
        cooldownInterval = null;
    }

    if (isSignalActive) {
        getSignalBtn.disabled = true;
        if (span) span.textContent = tKey('get_signal_btn');
        return;
    }

    getSignalBtn.disabled = false;
    if (span) span.textContent = tKey('get_signal_btn');
    if (statusText) statusText.textContent = tKey('waiting_status');
}

function startCooldownTicker() {
    if (cooldownInterval) clearInterval(cooldownInterval);
    cooldownInterval = setInterval(() => {
        refreshSignalButton();
        pruneExpiredCooldowns();
        if (getCooldownRemainingMs() <= 0) {
            if (cooldownInterval) {
                clearInterval(cooldownInterval);
                cooldownInterval = null;
            }
        }
    }, 200);
    refreshSignalButton();
}

function initCooldownFromStorage() {
    migrateLegacyCooldown();
    pruneExpiredCooldowns();
    refreshSignalButton();
}

function onAppResume() {
    pruneExpiredCooldowns();
    refreshSignalButton();
    ensureCooldownTicker();
}

const standardPairs = [
    "EURUSD", "GBPUSD", "USDJPY", "USDCHF", "USDCAD", "AUDUSD", 
    "GBPJPY", "EURJPY", "EURGBP", "EURCAD", "GBPCHF", "CADJPY", 
    "AUDCAD", "AUDJPY", "EURCHF", "CADCHF"
];

const otcPairs = [
    "EURUSD OTC", "CADJPY OTC", "GBPCHF OTC", "EURCAD OTC", "EURGBP OTC", 
    "EURJPY OTC", "GBPJPY OTC", "AUDUSD OTC", "USDCAD OTC", "USDCHF OTC", 
    "USDJPY OTC", "GBPUSD OTC", "AUDCAD OTC", "GBPCAD OTC", "AUDJPY OTC", 
    "EURCHF OTC", "CADCHF OTC"
];

const standardTimeframes = ["1m", "3m", "5m", "15m"];
const otcTimeframes = ["5s", "15s", "30s", "1m", "2m", "3m", "4m", "5m"];

const pairSelect = document.getElementById("pair");
const timeframeSelect = document.getElementById("timeframe");
const getSignalBtn = document.getElementById("getSignalBtn");
// const curSignal = document.getElementById("curSignal"); // Removed
const chartFrame = document.getElementById("chartFrame");
const userInfo = document.getElementById("userInfo");
const userAvatar = document.getElementById("userAvatar");
const statusText = document.getElementById("statusText");
const metaPair = document.getElementById("metaPair");
const metaTf = document.getElementById("metaTf");
const metaTime = document.getElementById("metaTime");
const metaAcc = document.getElementById("metaAcc");
const metaDir = document.getElementById("metaDir");
const metaUntil = document.getElementById("metaUntil");
const spinner = document.getElementById("spinner");
const pairFlags = document.getElementById("pairFlags");
const pairFlagDisplay = document.getElementById("pairFlagDisplay");
const pairTextDisplay = document.getElementById("pairTextDisplay");
const tfTextDisplay = document.getElementById("tfTextDisplay");
const cardPairFlags = document.getElementById("cardPairFlags");
const spinnerOverlay = document.getElementById("spinnerOverlay");
const resultStamp = document.getElementById("resultStamp");
const dirIcon = document.getElementById("dirIcon");
const dirIconUse = document.getElementById("dirIconUse");
const dirCard = document.getElementById("dirCard");
const progressBar = document.getElementById("progressBar");
const progressLabel = document.getElementById("progressLabel");

function setProgressPct(pct) {
    const clamped = Math.max(0, Math.min(100, pct));
    const ratio = (clamped / 100).toFixed(4);

    if (progressBar) {
        progressBar.style.setProperty("--progress", ratio);
        progressBar.setAttribute("aria-valuenow", String(Math.floor(clamped)));
    }
    if (progressLabel) {
        progressLabel.textContent = clamped >= 100 ? "100%" : `${Math.floor(clamped)}%`;
    }
}

let progressResetTimer = null;

function stopProgressReset() {
    if (progressResetTimer) {
        clearTimeout(progressResetTimer);
        progressResetTimer = null;
    }
    if (progressBar) {
        progressBar.classList.remove("is-resetting");
    }
}

function resetProgressSmooth(callback) {
    stopProgressReset();

    if (!progressBar) {
        setProgressPct(0);
        if (callback) callback();
        return;
    }

    const current = parseFloat(
        progressBar.style.getPropertyValue("--progress") ||
        getComputedStyle(progressBar).getPropertyValue("--progress")
    ) || 0;

    if (current <= 0.01) {
        progressBar.classList.remove("is-filling", "is-resetting");
        setProgressPct(0);
        if (callback) callback();
        return;
    }

    progressBar.classList.remove("is-filling");
    progressBar.classList.add("is-resetting");
    progressBar.style.setProperty("--progress", "0");
    progressBar.setAttribute("aria-valuenow", "0");
    if (progressLabel) progressLabel.textContent = "0%";

    let finished = false;
    const done = () => {
        if (finished) return;
        finished = true;
        progressBar.classList.remove("is-resetting");
        progressBar.removeEventListener("transitionend", onTransitionEnd);
        if (progressResetTimer) {
            clearTimeout(progressResetTimer);
            progressResetTimer = null;
        }
        if (callback) callback();
    };

    const onTransitionEnd = (e) => {
        if (e.target === progressBar && e.propertyName === "transform") done();
    };

    progressBar.addEventListener("transitionend", onTransitionEnd);
    progressResetTimer = setTimeout(done, 900);
}
const resultLabel = document.getElementById("resultLabel");
const resultIconUse = document.getElementById("resultIconUse");
let progressTimer = null;
const langBtn = document.getElementById("langBtn");
const langModal = document.getElementById("langModal");
const closeLangBtn = document.getElementById("closeLangBtn");
const pairModal = document.getElementById("pairModal");
const closePairBtn = document.getElementById("closePairBtn");
const pairSearchInput = document.getElementById("pairSearchInput");
const pairList = document.getElementById("pairList");
const pairSelectTrigger = document.getElementById("pairSelectTrigger");
const alertModal = document.getElementById("alertModal");
const closeAlertBtn = document.getElementById("closeAlertBtn");
const homeView = document.getElementById("homeView");
const profileView = document.getElementById("profileView");
const profileAvatar = document.getElementById("profileAvatar");
let tgUser = null;
let currentView = "home";
let profileTabsInitialized = false;

const btnRegular = document.getElementById("btnRegular");
const btnOTC = document.getElementById("btnOTC");
const chartPlaceholder = document.getElementById("chartPlaceholder");
const marketToggleContainer = document.querySelector('.market-toggle-container');

function isOtcPairValue(pairValue) {
    return /\s+OTC$/i.test(String(pairValue));
}

function getPairBaseLabel(pairValue) {
    const clean = String(pairValue).replace(/\s+OTC$/i, "").replace(/\s/g, "");
    if (clean.length >= 6) return `${clean.slice(0, 3)}/${clean.slice(3, 6)}`;
    return clean || String(pairValue);
}

function getPairDisplayLabel(pairValue) {
    const base = getPairBaseLabel(pairValue);
    return isOtcPairValue(pairValue) ? `${base} OTC` : base;
}

function getPairCodes(pairValue) {
    const clean = String(pairValue).replace(/\s+OTC$/i, "").replace(/\s/g, "");
    if (clean.length >= 6) return `${clean.slice(0, 3)} · ${clean.slice(3, 6)}`;
    return "";
}

function getPairSearchKey(pairValue) {
    const clean = String(pairValue).replace(/\s+OTC$/i, "").replace(/\s/g, "").toLowerCase();
    const label = getPairDisplayLabel(pairValue).toLowerCase();
    return `${pairValue} ${label} ${clean}`.toLowerCase();
}

function updatePairTriggerDisplay() {
    if (!pairSelect) return;
    if (pairTextDisplay) pairTextDisplay.textContent = getPairDisplayLabel(pairSelect.value);
    if (pairFlagDisplay) pairFlagDisplay.innerHTML = flagsForPair(pairSelect.value);
}

function renderPairModalList() {
    if (!pairList || !pairSelect) return;
    pairList.innerHTML = "";

    Array.from(pairSelect.options).forEach((opt) => {
        const item = document.createElement("div");
        item.className = "pair-item";
        item.dataset.value = opt.value;
        item.dataset.search = getPairSearchKey(opt.value);
        const otc = isOtcPairValue(opt.value);
        const codes = getPairCodes(opt.value);
        item.innerHTML = `
            <div class="pair-item__main">
                ${flagsForPair(opt.value)}
                <span class="pair-item__text">
                    <span class="pair-item__label">${getPairBaseLabel(opt.value)}</span>
                    ${codes ? `<span class="pair-item__codes">${codes}</span>` : ""}
                </span>
            </div>
            <span class="pair-item__side">
                <span class="pair-item__badge ${otc ? "pair-item__badge--otc" : "pair-item__badge--forex"}">${otc ? tKey("pair_badge_otc") : tKey("pair_badge_forex")}</span>
            </span>
        `;
        if (opt.value === pairSelect.value) item.classList.add("selected");
        item.addEventListener("click", () => selectPair(opt.value));
        pairList.appendChild(item);
    });

    filterPairModalList(pairSearchInput?.value || "");
}

function filterPairModalList(query) {
    if (!pairList) return;
    const q = String(query).trim().toLowerCase();
    pairList.querySelectorAll(".pair-item").forEach((item) => {
        const hay = item.dataset.search || "";
        item.classList.toggle("hidden", Boolean(q) && !hay.includes(q));
    });
}

function selectPair(value) {
    if (!pairSelect) return;
    pairSelect.value = value;
    updatePairTriggerDisplay();
    pairList?.querySelectorAll(".pair-item").forEach((item) => {
        item.classList.toggle("selected", item.dataset.value === value);
    });
    hidePairModal();
    pairSelect.dispatchEvent(new Event("change"));
}

function showPairModal() {
    if (!pairModal) return;
    renderPairModalList();
    pairModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    if (pairSearchInput) {
        pairSearchInput.value = "";
        filterPairModalList("");
        setTimeout(() => pairSearchInput.focus(), 50);
    }
}

function hidePairModal() {
    if (!pairModal) return;
    pairModal.classList.add("hidden");
    document.body.style.overflow = "";
    if (pairSearchInput) pairSearchInput.value = "";
}

function findEquivalentPair(pairValue, pairs) {
    const clean = String(pairValue).replace(/\s+OTC$/i, "").replace(/\s/g, "");
    if (!clean) return null;
    if (isOTC) {
        const otcVal = `${clean} OTC`;
        return pairs.includes(otcVal) ? otcVal : null;
    }
    return pairs.includes(clean) ? clean : null;
}

function getExpectedSignalType() {
    return isOTC ? "OTC" : "REGULAR";
}

function stopProgressTimer() {
    if (progressTimer) {
        clearInterval(progressTimer);
        progressTimer = null;
    }
    stopProgressReset();
}

function reconcileSignalState() {
    if (!pairSelect) return;

    const currentPair = getCurrentPair();
    const stored = localStorage.getItem(ACTIVE_SIGNAL_KEY);
    let resumed = false;

    if (stored) {
        try {
            const state = JSON.parse(stored);
            const elapsed = Date.now() - state.startTime;
            const samePair = normalizePairKey(state.pair) === currentPair;
            const sameMode = state.type === getExpectedSignalType();

            if (samePair && sameMode && elapsed < state.duration) {
                restoreActiveSignal({ fromPairSwitch: true });
                resumed = true;
            } else {
                isSignalActive = false;
                stopProgressTimer();
                setProgressPct(0);
                syncDirectionStyles();
                if (elapsed >= state.duration) {
                    clearSignalState();
                }
            }
        } catch {
            isSignalActive = false;
            stopProgressTimer();
            setProgressPct(0);
            syncDirectionStyles();
        }
    } else {
        isSignalActive = false;
        stopProgressTimer();
        setProgressPct(0);
        syncDirectionStyles();
    }

    if (!resumed) {
        refreshSignalButton();
        ensureCooldownTicker();
    }
}

function updatePairOptions() {
    if (!pairSelect) return;
    const pairs = isOTC ? otcPairs : standardPairs;
    const currentVal = pairSelect.value;

    pairSelect.innerHTML = "";
    pairs.forEach((p) => {
        const opt = document.createElement("option");
        opt.value = p;
        opt.textContent = getPairDisplayLabel(p);
        pairSelect.appendChild(opt);
    });

    const equivalent = findEquivalentPair(currentVal, pairs);
    if (equivalent) {
        pairSelect.value = equivalent;
    } else if (pairs.includes(currentVal)) {
        pairSelect.value = currentVal;
    } else {
        pairSelect.selectedIndex = 0;
    }

    pairSelect.closest(".pair-picker, .custom-select")?.querySelector(".dropdown-list")?.remove();

    updatePairTriggerDisplay();
    renderPairModalList();
    syncMarketUi();
}

function updateTimeframeOptions() {
    if (!timeframeSelect) return;
    const tfs = isOTC ? otcTimeframes : standardTimeframes;
    
    timeframeSelect.innerHTML = '';
    tfs.forEach(tf => {
        const opt = document.createElement('option');
        opt.value = tf;
        opt.text = tf;
        timeframeSelect.appendChild(opt);
    });
    
    timeframeSelect.selectedIndex = 0;
    
    // Update Custom Dropdown for Timeframe
    const container = timeframeSelect.closest('.custom-select');
    if (container) {
        const list = container.querySelector('.dropdown-list');
        if (list) {
            list.innerHTML = '';
            
            Array.from(timeframeSelect.options).forEach(opt => {
                const item = document.createElement('div');
                item.className = 'dropdown-item';
                item.textContent = opt.text;
                item.dataset.value = opt.value;
                if (opt.selected) item.classList.add('selected');

                item.addEventListener('click', (e) => {
                    e.stopPropagation();
                    timeframeSelect.value = opt.value;
                    timeframeSelect.dispatchEvent(new Event('change'));
                    list.classList.remove('open');
                    
                    list.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('selected'));
                    item.classList.add('selected');
                });
                list.appendChild(item);
            });
        }
    }
    syncMarketUi();
    refreshSignalButton();
}

function setMarketMode(mode, options = {}) {
    isOTC = (mode === 'OTC');
    if (isOTC) {
        btnRegular.classList.remove('active');
        btnOTC.classList.add('active');
        if (marketToggleContainer) marketToggleContainer.classList.add('otc-active');
        if (chartFrame) chartFrame.classList.add('hidden');
        if (chartPlaceholder) chartPlaceholder.classList.remove('hidden');
    } else {
        btnOTC.classList.remove('active');
        btnRegular.classList.add('active');
        if (marketToggleContainer) marketToggleContainer.classList.remove('otc-active');
        if (chartFrame) chartFrame.classList.remove('hidden');
        if (chartPlaceholder) chartPlaceholder.classList.add('hidden');
    }
    updatePairOptions();
    updateTimeframeOptions();
    if (!options.skipReconcile) {
        reconcileSignalState();
    }
}

if (btnRegular) btnRegular.addEventListener('click', () => setMarketMode('Regular'));
if (btnOTC) btnOTC.addEventListener('click', () => setMarketMode('OTC'));

function mapToTradingViewSymbol(pair) {
    return `FX:${pair}`;
}

function mapTfToInterval(tf) {
    if (tf === "1m") return "1";
    if (tf === "3m") return "3";
    if (tf === "5m") return "5";
    if (tf === "15m") return "15";
    return "1";
}

function clearSignalCardPreview() {
    if (metaAcc) metaAcc.textContent = "--%";
    if (metaDir) {
        metaDir.textContent = "--";
        metaDir.classList.remove('up', 'down');
        syncDirChip();
    }
    if (metaUntil) metaUntil.textContent = "--:--";
    if (statusText && !isSignalActive && getCooldownRemainingMs() <= 0) {
        statusText.textContent = tKey('waiting_status');
    }
    setProgressPct(0);
    if (resultStamp) {
        resultStamp.textContent = '';
        resultStamp.classList.add('hidden');
        resultStamp.classList.remove('win', 'lose', 'neutral');
    }
    const mainCard = document.getElementById('mainCard');
    if (mainCard) {
        mainCard.classList.remove('win-glow', 'lose-glow', 'neutral-glow', 'dir-up', 'dir-down');
    }
    clearDirectionBorderClasses();
}

function syncMarketUi(options = {}) {
    const { clearSignalPreview = false } = options;
    if (!pairSelect || !timeframeSelect || !chartFrame) return;

    const livePairTextDisplay = document.getElementById("pairTextDisplay");
    const livePairFlagDisplay = document.getElementById("pairFlagDisplay");
    const liveTfTextDisplay = document.getElementById("tfTextDisplay");
    const pairLabel = getPairDisplayLabel(pairSelect.value);

    if (livePairTextDisplay) livePairTextDisplay.textContent = pairLabel;
    if (livePairFlagDisplay) livePairFlagDisplay.innerHTML = flagsForPair(pairSelect.value);
    if (liveTfTextDisplay) liveTfTextDisplay.textContent = timeframeSelect.value;

    if (cardPairFlags) cardPairFlags.innerHTML = flagsForPair(pairSelect.value);
    if (metaPair) metaPair.textContent = pairLabel;
    if (metaTf) metaTf.textContent = timeframeSelect.value;

    if (clearSignalPreview && !isSignalActive) {
        clearSignalCardPreview();
    }

    const symbol = mapToTradingViewSymbol(pairSelect.value);
    const interval = mapTfToInterval(timeframeSelect.value);
    chartFrame.src = `https://s.tradingview.com/widgetembed/?symbol=${encodeURIComponent(symbol)}&interval=${encodeURIComponent(interval)}&theme=dark`;
}

function onPairChange() {
    if (!pairSelect) return;
    syncMarketUi({ clearSignalPreview: true });
    reconcileSignalState();
}

function onTimeframeChange() {
    if (!pairSelect || !timeframeSelect || !chartFrame) return;
    const liveTfTextDisplay = document.getElementById("tfTextDisplay");
    if (liveTfTextDisplay) liveTfTextDisplay.textContent = timeframeSelect.value;
    if (metaTf) metaTf.textContent = timeframeSelect.value;
    const symbol = mapToTradingViewSymbol(pairSelect.value);
    const interval = mapTfToInterval(timeframeSelect.value);
    chartFrame.src = `https://s.tradingview.com/widgetembed/?symbol=${encodeURIComponent(symbol)}&interval=${encodeURIComponent(interval)}&theme=dark`;
    refreshSignalButton();
}

function updateIframe() {
    syncMarketUi({ clearSignalPreview: true });
    refreshSignalButton();
}

function getSecondsFromTf(tf) {
    if (tf.endsWith('s')) {
        return parseInt(tf);
    } else if (tf.endsWith('m')) {
        return parseInt(tf) * 60;
    }
    return 60; // default 1m
}

const ACTIVE_SIGNAL_KEY = 'trade_ai_active_signal';

function startSignalProgress(durationMs, startTime, onFinish) {
    stopProgressTimer();

    if (progressBar) {
        progressBar.classList.add("is-filling");
        progressBar.classList.remove("is-resetting");
    }
    setProgressPct(0);

    progressTimer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const pct = Math.min(100, (elapsed / durationMs) * 100);

        setProgressPct(pct);

        if (elapsed >= durationMs) {
            clearInterval(progressTimer);
            progressTimer = null;
            setProgressPct(100);
            resetProgressSmooth(() => {
                if (progressBar) progressBar.classList.remove("is-filling");
                if (onFinish) onFinish();
            });
        }
    }, 50);
}

function saveSignalState(state) {
    localStorage.setItem(ACTIVE_SIGNAL_KEY, JSON.stringify(state));
}

function clearSignalState() {
    localStorage.removeItem(ACTIVE_SIGNAL_KEY);
}

async function generateSignal() {
    const pair = pairSelect.value;
    const tf = timeframeSelect.value;

    if (isForexModeClosed()) {
        showCustomAlert("market_closed");
        return;
    }

    if (isSignalActive || getCooldownRemainingMs(pair) > 0) {
        showCustomAlert(isSignalActive ? 'active' : 'cooldown');
        return;
    }
    
    isSignalActive = true;
    refreshSignalButton();
    if (statusText) statusText.textContent = translations[currentLang].searching_signal;
    if (spinnerOverlay) spinnerOverlay.classList.remove("hidden");
    const spinnerText = spinnerOverlay.querySelector('.spinner-text');
    if (spinnerText) spinnerText.textContent = translations[currentLang].searching_signal;
    
    const pairLabel = pairSelect ? getPairDisplayLabel(pair) : pair;
    
    // Clear previous signal UI
    if (pairFlags) pairFlags.textContent = "";
    if (cardPairFlags) cardPairFlags.textContent = "";
    if (metaPair) metaPair.textContent = "";
    if (metaTf) metaTf.textContent = "";
    if (metaTime) metaTime.textContent = "";
    if (metaAcc) metaAcc.textContent = "";
    if (metaDir) metaDir.textContent = "";
    if (metaUntil) metaUntil.textContent = "";
    setProgressPct(0);
    if (progressLabel) progressLabel.textContent = '';
    if (resultStamp) { resultStamp.textContent = ''; resultStamp.classList.add('hidden'); resultStamp.classList.remove('win','lose','neutral'); }
    const mainCard = document.getElementById('mainCard');
    if (mainCard) { mainCard.classList.remove('win-glow', 'lose-glow', 'neutral-glow', 'dir-up', 'dir-down'); }
    clearDirectionBorderClasses();
    
    // OTC Random Logic
    if (isOTC) {
        setTimeout(() => {
            if (spinnerOverlay) spinnerOverlay.classList.add("hidden");
            
            const randomSignal = Math.random() > 0.5 ? 'BUY' : 'SELL';
            const randomConfidence = Math.floor(Math.random() * (92 - 75 + 1)) + 75;
            
            // Update UI
            if (statusText) statusText.textContent = translations[currentLang].signal_found;
            if (pairFlags) pairFlags.innerHTML = flagsForPair(pair);
            if (cardPairFlags) cardPairFlags.innerHTML = flagsForPair(pair);
            if (metaPair) metaPair.textContent = pairLabel;
            if (metaTf) metaTf.textContent = tf;
            if (metaTime) metaTime.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            if (metaAcc) metaAcc.textContent = `${randomConfidence}%`;
            
            if (metaDir) {
                metaDir.textContent = randomSignal === 'BUY' ? translations[currentLang].up : translations[currentLang].down;
                metaDir.classList.remove('up','down');
                metaDir.classList.add(randomSignal === 'BUY' ? 'up' : 'down');
                syncDirChip();
            }
            // Explicitly re-query
            const dIcon = document.getElementById("dirIcon");
            if (dIcon) {
                dIcon.classList.remove('up','down');
                dIcon.classList.add(randomSignal === 'BUY' ? 'up' : 'down');
            }
            if (dirIconUse) dirIconUse.setAttribute('href', randomSignal === 'BUY' ? '#icon-up' : '#icon-down');
            
            const tfSeconds = getSecondsFromTf(tf);
            const startTime = Date.now();
            const durationMs = Math.floor(tfSeconds * 1000);
            setSignalCooldownUntil(startTime + durationMs, pair);
            const untilDate = new Date(startTime + durationMs);
            if (metaUntil) metaUntil.textContent = untilDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            saveSignalState({
                type: 'OTC',
                pair: pair,
                pairLabel: pairLabel,
                tf: tf,
                startTime: startTime,
                duration: durationMs,
                signal: randomSignal,
                confidence: randomConfidence,
                price: null
            });

            startSignalProgress(durationMs, startTime, () => {
                isSignalActive = false;
                clearSignalState();
                syncDirectionStyles();
                refreshSignalButton();
            });
            
        }, 2000);
        return;
    }

    try {
        const params = new URLSearchParams({ pair, tf });
        if (tgUser && tgUser.id) params.append('user_id', tgUser.id);
        const resp = await fetch(`${API_URL}/run?${params.toString()}`, { method: "POST" });
        if (!resp.ok) {
            const err = await resp.json();
            throw new Error(err.detail || "Request failed");
        }
        const result = await resp.json();
        const data = result.data;
        
        // Always set random accuracy between 75 and 92 for regular signals
        data.confidence = Math.floor(Math.random() * (92 - 75 + 1)) + 75;
        
        // Update UI
        if (statusText) statusText.textContent = translations[currentLang].signal_found;
        if (pairFlags) pairFlags.innerHTML = flagsForPair(pair);
        if (cardPairFlags) cardPairFlags.innerHTML = flagsForPair(pair);
        if (metaPair) metaPair.textContent = pairLabel;
        if (metaTf) metaTf.textContent = tf;
        if (metaTime) metaTime.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        if (metaAcc) metaAcc.textContent = (typeof data.confidence !== 'undefined') ? `${Number(data.confidence).toFixed(0)}%` : '';
        if (metaDir) {
            metaDir.textContent = data.signal === 'BUY' ? translations[currentLang].up : (data.signal === 'SELL' ? translations[currentLang].down : '');
            metaDir.classList.remove('up','down');
            if (data.signal === 'BUY') metaDir.classList.add('up');
            if (data.signal === 'SELL') metaDir.classList.add('down');
            syncDirChip();
        }
        if (dirIconUse) dirIconUse.setAttribute('href', data.signal === 'BUY' ? '#icon-up' : '#icon-down');

        // Explicitly re-query to ensure we have the element
        const dIcon = document.getElementById("dirIcon");
        if (dIcon) {
            dIcon.classList.remove('up','down');
            // Force reflow
            void dIcon.offsetWidth;
            if (data.signal === 'BUY') dIcon.classList.add('up');
            if (data.signal === 'SELL') dIcon.classList.add('down');
        }
        
        const tfSeconds = getSecondsFromTf(tf);
        const startTime = Date.now();
        const durationMs = Math.floor(tfSeconds * 1000);
        setSignalCooldownUntil(startTime + durationMs, pair);
        
        const untilDate = new Date(startTime + tfSeconds * 1000); // Full duration for 'until' text
        if (metaUntil) metaUntil.textContent = untilDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // Save State
        saveSignalState({
            type: 'REGULAR',
            pair: pair,
            pairLabel: pairLabel,
            tf: tf,
            startTime: startTime,
            duration: durationMs, // Use the checking duration
            signal: data.signal,
            confidence: data.confidence,
            price: data.price,
            id: data.id
        });

        startSignalProgress(durationMs, startTime, async () => {
            isSignalActive = false;
            clearSignalState();
            syncDirectionStyles();
            if (data.id) {
                try {
                    const checkResp = await fetch(`${API_URL}/signal/check?signal_id=${data.id}`, {
                        method: 'POST'
                    });
                    if (checkResp.ok) {
                        const checkData = await checkResp.json();
                        applySignalResultUI(checkData.result);
                    }
                } catch (err) {
                    console.error("Failed to check result", err);
                }
            }
            
            refreshSignalButton();
            refreshProfileIfVisible();
        });

    } catch (e) {
        isSignalActive = false;
        clearSignalState();
        clearSignalCooldown(pair);
        if (statusText) statusText.textContent = tKey('error');
        refreshSignalButton();
    } finally {
        if (spinnerOverlay) spinnerOverlay.classList.add("hidden");
        refreshSignalButton();
    }
}

if (pairSelect) pairSelect.addEventListener("change", onPairChange);
if (timeframeSelect) timeframeSelect.addEventListener("change", onTimeframeChange);
if (getSignalBtn) getSignalBtn.addEventListener("click", generateSignal);
    // Custom Dropdown Logic
    function initCustomDropdown(container) {
        const select = container.querySelector('select');
        const trigger = container.querySelector('.select-trigger');
        if (!select || !trigger) return;
        if (select.id === 'pair') return;

        select.style.display = 'none';

        // Create custom list
        const list = document.createElement('div');
        list.className = 'dropdown-list';
        
        Array.from(select.options).forEach(opt => {
            const item = document.createElement('div');
            item.className = 'dropdown-item';
            // Default text content
            item.textContent = opt.text;
            
            item.dataset.value = opt.value;
            if (opt.selected) item.classList.add('selected');

            item.addEventListener('click', (e) => {
                e.stopPropagation();
                select.value = opt.value;
                select.dispatchEvent(new Event('change'));
                list.classList.remove('open');
                
                // Update selected class
                list.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');
            });
            list.appendChild(item);
        });

        container.appendChild(list);

        // Toggle list
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            // Close others
            document.querySelectorAll('.dropdown-list').forEach(l => {
                if (l !== list) l.classList.remove('open');
            });
            list.classList.toggle('open');
        });
    }

    function initCustomDropdowns() {
        // Native check removed to force custom dropdowns on all devices
        // const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        // if (isIOS) return; 

        document.querySelectorAll('.custom-select').forEach(container => {
            initCustomDropdown(container);
        });

        // Close on outside click
        document.addEventListener('click', () => {
            document.querySelectorAll('.dropdown-list').forEach(l => l.classList.remove('open'));
        });
    }

function restoreActiveSignal(options = {}) {
    const stored = localStorage.getItem(ACTIVE_SIGNAL_KEY);
    if (!stored) return;
    
    try {
        const state = JSON.parse(stored);
        const elapsed = Date.now() - state.startTime;

        if (options.fromPairSwitch && pairSelect && normalizePairKey(pairSelect.value) !== normalizePairKey(state.pair)) {
            return;
        }
        
        if (elapsed >= state.duration) {
            clearSignalState();
            isSignalActive = false;
            stopProgressTimer();
            setProgressPct(0);
            syncDirectionStyles();
            return;
        }
        
        if (!getSignalBtn || !progressBar) return;
        
        isSignalActive = true;
        setSignalCooldownUntil(state.startTime + state.duration, state.pair);
        refreshSignalButton();
        
        const mode = state.type === 'OTC' ? 'OTC' : 'Regular';
        setMarketMode(mode, { skipReconcile: true });

        if (pairSelect) {
            pairSelect.value = state.pair;
        }
        if (timeframeSelect) timeframeSelect.value = state.tf;

        updatePairTriggerDisplay();
        renderPairModalList();
        syncMarketUi();
        
        // Restore UI Texts (Meta)
        const pairLabel = state.pairLabel || state.pair;
        if (statusText) statusText.textContent = translations[currentLang].signal_found;
        if (pairFlags) pairFlags.innerHTML = flagsForPair(state.pair);
        if (cardPairFlags) cardPairFlags.innerHTML = flagsForPair(state.pair);
        if (metaPair) metaPair.textContent = pairLabel;
        if (metaTf) metaTf.textContent = state.tf;
        if (metaTime) metaTime.textContent = new Date(state.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        if (metaAcc) metaAcc.textContent = (typeof state.confidence !== 'undefined') ? `${Number(state.confidence).toFixed(0)}%` : '';
        
        if (metaDir) {
            metaDir.textContent = state.signal === 'BUY' ? translations[currentLang].up : (state.signal === 'SELL' ? translations[currentLang].down : '');
            metaDir.classList.remove('up','down');
            if (state.signal === 'BUY') metaDir.classList.add('up');
            if (state.signal === 'SELL') metaDir.classList.add('down');
            syncDirChip();
        }
        if (dirIcon) {
            dirIcon.classList.remove('up','down');
            if (state.signal === 'BUY') dirIcon.classList.add('up');
            if (state.signal === 'SELL') dirIcon.classList.add('down');
        }
        if (dirIconUse) dirIconUse.setAttribute('href', state.signal === 'BUY' ? '#icon-up' : '#icon-down');
        
        // Restore Until Time
        const tfSeconds = getSecondsFromTf(state.tf);
        const untilDate = new Date(state.startTime + tfSeconds * 1000);
        if (metaUntil) metaUntil.textContent = untilDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        // Resume Progress
        startSignalProgress(state.duration, state.startTime, async () => {
            isSignalActive = false;
            clearSignalState();
            syncDirectionStyles();
            
            if (state.type === 'OTC') {
                refreshSignalButton();
            } else {
                // Regular result check
                if (state.id) {
                    try {
                        const checkResp = await fetch(`${API_URL}/signal/check?signal_id=${state.id}`, {
                            method: 'POST'
                        });
                        if (checkResp.ok) {
                            const checkData = await checkResp.json();
                            applySignalResultUI(checkData.result);
                        }
                    } catch (err) {
                        console.error("Failed to check result", err);
                    }
                }
                refreshSignalButton();
                refreshProfileIfVisible();
            }
        });
        
    } catch (e) {
        console.error("Failed to restore signal", e);
        clearSignalState();
        refreshSignalButton();
    }
}

// Initialize
initCustomDropdowns();
updatePairTriggerDisplay();
renderPairModalList();
updateIframe();
changeLanguage(currentLang);
restoreActiveSignal();
initCooldownFromStorage();
ensureMarketTicker();
refreshSignalButton();
onAppResume();

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        onAppResume();
    }
});

const tg = window.Telegram && window.Telegram.WebApp ? window.Telegram.WebApp : null;
if (tg) {
    try {
        tg.ready();
        tg.expand();
        // Request full screen if available
        if (tg.requestFullscreen) {
            tg.requestFullscreen();
        }
        let u = tg.initDataUnsafe && tg.initDataUnsafe.user ? tg.initDataUnsafe.user : null;
        if (!u && tg.initData) {
            try {
                const params = new URLSearchParams(tg.initData);
                const userRaw = params.get('user');
                if (userRaw) u = JSON.parse(userRaw);
            } catch (_) {}
        }
        if (u) {
            tgUser = u;
            if (userInfo) {
                userInfo.textContent = [u.first_name, u.last_name].filter(Boolean).join(" ") || u.username || `ID ${u.id}`;
            }
            fetch(`${API_URL}/profile`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: u.id,
                    username: u.username,
                    first_name: u.first_name,
                    last_name: u.last_name,
                    language_code: u.language_code,
                    is_premium: u.is_premium,
                }),
            }).catch(() => {});
            
            updateUserAvatar(u);
        }
    } catch (_) {}
}

function updateUserAvatar(u) {
    const name = [u.first_name, u.last_name].filter(Boolean).join(" ") || u.username || `ID ${u.id}`;
    const fallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0b1220&color=bae6fd&size=128`;
    const src = u.photo_url
        || (u.username ? `https://unavatar.io/telegram/${u.username}` : fallback);

    [userAvatar, profileAvatar].forEach((img) => {
        if (!img) return;
        img.src = src;
        img.alt = name;
        img.onerror = () => {
            img.src = fallback;
        };
    });
}

function updateBackButton() {
    if (!tg || !tg.BackButton) return;
    if (currentView === "profile") {
        tg.BackButton.show();
    } else {
        tg.BackButton.hide();
    }
}

function switchView(view) {
    if (view !== "home" && view !== "profile") return;
    currentView = view;

    if (homeView) homeView.classList.toggle("hidden", view !== "home");
    if (profileView) profileView.classList.toggle("hidden", view !== "profile");

    document.querySelectorAll(".bottom-nav .nav-item").forEach((item) => {
        item.classList.toggle("active", item.getAttribute("data-view") === view);
    });

    if (view === "profile") {
        loadProfilePage();
    }

    updateBackButton();
}

document.querySelectorAll(".bottom-nav .nav-item").forEach((item) => {
    item.addEventListener("click", () => {
        const view = item.getAttribute("data-view");
        if (view) switchView(view);
    });
});

if (tg && tg.BackButton) {
    tg.BackButton.onClick(() => {
        if (currentView === "profile") switchView("home");
    });
}
updateBackButton();

// Language Modal Logic
function showLangModal() {
    if (langModal) {
        langModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function hideLangModal() {
    if (langModal) {
        langModal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function showCustomAlert(reason = 'active') {
    const descEl = alertModal?.querySelector('.alert-desc');
    const titleEl = alertModal?.querySelector('.alert-title');
    if (descEl) {
        if (reason === 'cooldown') {
            if (titleEl) titleEl.textContent = tKey('alert_title');
            descEl.textContent = `${tKey('alert_cooldown_desc')} ${formatCooldownButton(getCooldownRemainingMs())}.`;
        } else if (reason === 'market_closed') {
            const openAt = getNextForexOpenDate();
            if (titleEl) titleEl.textContent = tKey('market_closed_status');
            descEl.textContent = openAt
                ? `${tKey('market_closed_alert')} ${tKey('market_closed_btn')} ${formatMarketOpenDate(openAt)}.`
                : tKey('market_closed_alert');
        } else {
            if (titleEl) titleEl.textContent = tKey('alert_title');
            descEl.textContent = tKey('alert_desc');
        }
    }
    if (alertModal) {
        alertModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function hideCustomAlert() {
    const descEl = alertModal?.querySelector('.alert-desc');
    const titleEl = alertModal?.querySelector('.alert-title');
    if (titleEl) {
        titleEl.setAttribute('data-i18n', 'alert_title');
        titleEl.textContent = tKey('alert_title');
    }
    if (descEl) {
        descEl.setAttribute('data-i18n', 'alert_desc');
        descEl.textContent = tKey('alert_desc');
    }
    if (alertModal) {
        alertModal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function changeLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('trade_ai_lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    updateLangBtnFlag(lang);
    refreshSignalButton();
    
    document.querySelectorAll('.lang-item').forEach(item => {
        if (item.getAttribute('data-lang') === lang) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
}

if (langBtn) langBtn.addEventListener('click', showLangModal);
if (closeLangBtn) closeLangBtn.addEventListener('click', hideLangModal);
if (langModal) langModal.addEventListener('click', (e) => { if (e.target === langModal) hideLangModal(); });

if (pairSelectTrigger) pairSelectTrigger.addEventListener('click', showPairModal);
if (closePairBtn) closePairBtn.addEventListener('click', hidePairModal);
if (pairModal) pairModal.addEventListener('click', (e) => { if (e.target === pairModal) hidePairModal(); });
if (pairSearchInput) {
    pairSearchInput.addEventListener('input', (e) => filterPairModalList(e.target.value));
    pairSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') hidePairModal();
    });
}

if (closeAlertBtn) closeAlertBtn.addEventListener('click', hideCustomAlert);
if (alertModal) alertModal.addEventListener('click', (e) => { if (e.target === alertModal) hideCustomAlert(); });

document.querySelectorAll('.lang-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.lang-item').forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
        const langCode = item.getAttribute('data-lang');
        changeLanguage(langCode);
        hideLangModal();
    });
});

// header profile button removed per mobile design

const profileRoot = document.getElementById('profileRoot');
let currentHistoryPeriod = 'today';

function applySignalResultUI(resultStatus) {
    const key = resultStatus.toLowerCase();
    if (resultStamp) {
        resultStamp.textContent = tKey(key);
        resultStamp.classList.remove('hidden', 'win', 'lose', 'neutral');
        resultStamp.classList.add(key);
    }
    const mainCard = document.getElementById('mainCard');
    if (mainCard) {
        mainCard.classList.remove('win-glow', 'lose-glow', 'neutral-glow', 'dir-up', 'dir-down');
        mainCard.classList.add(`${key}-glow`);
        syncDirectionStyles();
    }
}

function refreshProfileIfVisible() {
    if (currentView === 'profile') loadProfilePage();
}

function formatHistoryTimestamp(ts) {
    if (!ts) return '';
    const d = new Date(String(ts).replace(' ', 'T'));
    if (Number.isNaN(d.getTime())) return ts;
    return d.toLocaleString([], { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
}

function getHistoryResultMeta(result) {
    if (!result) return { className: 'pending', label: tKey('history_active') };
    const key = String(result).toLowerCase();
    if (key === 'win' || key === 'lose' || key === 'neutral') {
        return { className: key, label: tKey(key) };
    }
    return { className: 'pending', label: result };
}

function setProfileStatsLoading() {
    const totalEl = document.getElementById('totalSignals');
    const winCountEl = document.getElementById('winCount');
    const winRateEl = document.getElementById('winRate');
    if (totalEl) totalEl.textContent = '0';
    if (winCountEl) winCountEl.textContent = '0';
    if (winRateEl) winRateEl.textContent = '0%';
}

async function loadProfilePage() {
    if (!profileRoot) return;

    if (!profileTabsInitialized) {
        profileTabsInitialized = true;
        const tabs = document.querySelectorAll('.filter-tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                currentHistoryPeriod = tab.getAttribute('data-period');
                fetchHistory();
            });
        });
    }

    const uName = document.getElementById('profileName');
    const uSub = document.getElementById('userSubtitle');

    if (tgUser) {
        const fullName = [tgUser.first_name, tgUser.last_name].filter(Boolean).join(' ') || 'User';
        if (uName) uName.textContent = fullName;
        if (uSub) {
            uSub.textContent = tgUser.username ? `@${tgUser.username}` : '@username';
        }
        updateUserAvatar(tgUser);
        setProfileStatsLoading();

        try {
            const s = await fetch(`${API_URL}/stats/user?uid=${tgUser.id}`);
            if (s.ok) {
                const stats = await s.json();
                const totalEl = document.getElementById('totalSignals');
                const winCountEl = document.getElementById('winCount');
                const winRateEl = document.getElementById('winRate');
                if (totalEl) totalEl.textContent = String(stats.total_signals ?? 0);
                if (winCountEl) winCountEl.textContent = String(stats.wins ?? 0);
                if (winRateEl) winRateEl.textContent = `${stats.win_rate ?? 0}%`;
            }
        } catch (_) {}

        await fetchHistory();
    } else {
        if (uName) uName.textContent = 'Guest';
        if (uSub) uSub.textContent = '@username';
        setProfileStatsLoading();
        const container = document.getElementById('historyList');
        if (container) {
            container.innerHTML = `<div class="profile-guest-hint">${tKey('profile_guest')}</div>`;
        }
    }
}

async function fetchHistory() {
    const container = document.getElementById('historyList');
    if (!tgUser || !container) return;

    container.innerHTML = `<div class="profile-loading">${tKey('history_loading')}</div>`;

    try {
        const h = await fetch(`${API_URL}/history/user?uid=${tgUser.id}&limit=50&period=${currentHistoryPeriod}`);
        if (h.ok) {
            const rows = await h.json();
            renderHistoryCards(rows);
        } else {
            container.innerHTML = `<div class="profile-empty">${tKey('history_empty')}</div>`;
        }
    } catch (_) {
        container.innerHTML = `<div class="profile-empty">${tKey('history_empty')}</div>`;
    }
}

function renderHistoryCards(rows) {
    const container = document.getElementById('historyList');
    if (!container) return;
    
    if (!rows.length) {
        container.innerHTML = `<div class="profile-empty">${tKey('history_empty')}</div>`;
        return;
    }

    container.innerHTML = rows.map(r => {
        const { className: resClass, label: resText } = getHistoryResultMeta(r.result);
        const pairLabel = getPairDisplayLabel(r.pair);
        const dirClass = r.signal === 'SELL' ? 'sell' : 'buy';
        const dirLabel = r.signal === 'SELL' ? tKey('down') : tKey('up');

        return `
        <article class="history-card">
            <div class="hc-top">${formatHistoryTimestamp(r.timestamp)}</div>
            <div class="hc-main">
                <div class="hc-pair-info">
                    <span class="hc-flags">${flagsForPair(r.pair)}</span>
                    <span class="hc-pair-name">${pairLabel}</span>
                </div>
                <div class="hc-center">
                    <span class="hc-tf">${r.timeframe || '—'}</span>
                    <span class="hc-dir ${dirClass}">${dirLabel}</span>
                </div>
                <div class="hc-status ${resClass}">${resText}</div>
            </div>
        </article>
        `;
    }).join('');
}

// Helper for flags (reusing existing logic if available or duplicating slightly for safety)
// Assuming flagsForPair is globally available from earlier script content.
// If not, I'll ensure it is.
// Based on previous reads, flagsForPair is defined in global scope.

function getCurrencyCountryCode(cur) {
    const m = {
        EUR: 'eu', USD: 'us', GBP: 'gb', JPY: 'jp', CHF: 'ch', CAD: 'ca', AUD: 'au', NZD: 'nz'
    };
    return m[cur] || null;
}

function flagsForPair(pair) {
    // Clean pair string from OTC suffix
    const cleanPair = pair.replace(' OTC', '');
    const base = cleanPair.slice(0,3);
    const quote = cleanPair.slice(3,6);
    const baseCode = getCurrencyCountryCode(base);
    const quoteCode = getCurrencyCountryCode(quote);
    
    if (baseCode && quoteCode) {
        return `
        <div class="pair-icons">
            ${flagImgTag(baseCode, "currency-icon base", base)}
            ${flagImgTag(quoteCode, "currency-icon quote", quote)}
        </div>
        `;
    }
    // Fallback to emojis if not found
    return `${flagForCurrency(base)} ${flagForCurrency(quote)}`.trim();
}

function flagForCurrency(cur) {
    const m = {
        EUR: '🇪🇺', USD: '🇺🇸', GBP: '🇬🇧', JPY: '🇯🇵', CHF: '🇨🇭', CAD: '🇨🇦', AUD: '🇦🇺', NZD: '🇳🇿'
    };
    return m[cur] || '';
}

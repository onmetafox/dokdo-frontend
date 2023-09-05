const $scope = {
  // Base strat with default values, used in strategy editors
  // Does not include extras like MM
  defaultStrat: {
    ADX_ENABLED: false,
    ADX_LEVEL: 25,
    ATRX: 0.5,
    ATR_PERIOD: 14,
    BTC_MONEY_FLOW: 35,
    BTC_PND_PERIOD: 14,
    BTC_PND_PROTECTION: false,
    BUYLVL: 1,
    BUYLVL1: 0.6,
    BUYLVL2: 2,
    BUYLVL3: 70,
    BUY_ENABLED: true,
    SINGLE_BUY: false,
    BUY_LEVEL: 1,
    BUY_METHOD: 'gain',
    BUY_RANGE: 0.5,
    CANDLES_LENGTH: 99,
    COUNT_SELL: 9999,
    DISPLACEMENT: 26,
    DI_PERIOD: 14,
    DOUBLE_CHECK_GAIN: true,
    DOUBLE_UP: false,
    DOUBLE_UP_CAP: 1,
    DU_BUYDOWN: 2,
    DU_CAP_COUNT: 0,
    DU_METHOD: 'HIGHBB',
    EMA1: 16,
    EMA2: 8,
    EMA3: 150,
    EMASPREAD: false,
    EMA_LENGTH: 50,
    EMAx: 0.5,
    FAST_SMA: 1,
    FUNDS_RESERVE: 0.0001,
    GAIN: 0.5,
    HIGH_BB: 0,
    ICHIMOKU_PROTECTION: true,
    IGNORE_TRADES_BEFORE: 0,
    LIQUIDITY: false,
    LIQUIDITY_TAKER: false,
    LIQUIDITY_GAIN: true,
    MAX_INVESTMENT: 1,
    NASH_LEAGUE: false,
    NASH_TIMER: 300,
    IS_MARGIN_STRAT: false,
    KEEP_QUOTE: 0,
    KIJUN_BUY: false,
    KIJUN_CLOSE: false,
    KIJUN_PERIOD: 26,
    KIJUN_SELL: false,
    KIJUN_STOP: false,
    KUMO_BUY: false,
    KUMO_CLOSE: false,
    KUMO_SELL: false,
    KUMO_SENTIMENTS: true,
    KUMO_STOP: true,
    LEVERAGE: 0,
    LONG_LEVEL: 1,
    LOW_BB: 0,
    MACD_LONG: 20,
    MACD_SHORT: 5,
    MACD_SIGNAL: 10,
    MAKER_FEES: false,
    TAKER_FEES: false,
    MARKET_BUY: false,
    MARKET_BUYBACK: false,
    MARKET_CLOSE: false,
    MARKET_DU: false,
    MARKET_FOK: false,
    MARKET_RTBUY: false,
    MARKET_RTSELL: false,
    MARKET_SELL: false,
    MARKET_STOP: false,
    MEAN_REVERSION: false,
    MFI_BUY_LEVEL: 30,
    MFI_ENABLED: false,
    MFI_LENGTH: 14,
    MFI_SELL_LEVEL: 70,
    MIN_VOLUME_TO_BUY: 0.001,
    MIN_VOLUME_TO_SELL: 0.001,
    NBA: 0,
    PANIC_SELL: false,
    PERIOD: 15,
    PP_BUY: 0,
    PP_SELL: 99999,
    PRE_ORDER: false,
    PRE_ORDER_GAP: 0,
    RENKO_ATR: false,
    RENKO_BRICK_SIZE: 0.0001,
    RENKO_PERIOD: 15,
    ROE: 1,
    ROE_CLOSE: false,
    ROE_LIMIT: 1,
    ROE_TRAILING: false,
    ROE_SCALPER: false,
    ROE_SPREAD: 0,
    RSI_BUY_ENABLED: false,
    RSI_BUY_LEVEL: 30,
    RSI_DU_BUY: 30,
    RSI_LENGTH: 14,
    RSI_METHOD: 'oscillator',
    RSI_SELL_ENABLED: false,
    RSI_SELL_LEVEL: 70,
    RT_BUY_LEVEL: 2,
    RT_BUY_UP_LEVEL: 0,
    RT_ENABLED: false,
    RT_GAIN: 1.5,
    RT_MAXBAG_PROTECTION: 10,
    RT_ONCE: false,
    RT_ONCE_AND_CONTINUE: false,
    RT_SELL_UP: 0.3,
    RT_TREND_ENABLED: false,
    SELLLVL: 1,
    SELLLVL1: 0.6,
    SELLLVL2: 2,
    SELLLVL3: 70,
    SELL_ENABLED: true,
    SELL_METHOD: 'gain',
    SELL_RANGE: 0.5,
    SENKOUSPAN_PERIOD: 52,
    SHORT_LEVEL: 1,
    SLOW_SMA: 2,
    SLOW_STOCH_K: 3,
    SL_DISABLE_BUY: false,
    SL_DISABLE_SELL: false,
    SMAPERIOD: 50,
    STDV: 2,
    STOCHRSI_BUY_LEVEL: 0.2,
    STOCHRSI_ENABLED: false,
    STOCHRSI_LENGTH: 14,
    STOCHRSI_METHOD: 'oscillator',
    STOCHRSI_SELL_LEVEL: 0.8,
    STOCH_BUY_LEVEL: 20,
    STOCH_D: 3,
    STOCH_ENABLED: false,
    STOCH_K: 14,
    STOCH_METHOD: 'oscillator',
    STOCH_SELL_LEVEL: 80,
    STOP_LIMIT: 9999,
    TAKE_BUY: false,
    TAKE_PROFIT: false,
    TBUY_RANGE: 0.5,
    TENKAN_BUY: true,
    TENKAN_CLOSE: true,
    TENKAN_PERIOD: 9,
    TENKAN_SELL: true,
    TENKAN_STOP: false,
    TL_ALLIN: false,
    TL_PERC: 0,
    TM_RT_SELL: false,
    TP_PROFIT_ONLY: true,
    TP_RANGE: 0.5,
    TRADES_TIMEOUT: 0,
    TRADING_LIMIT: 0.002,
    TRAIL_ME_BUY: false,
    TRAIL_ME_BUY_RANGE: 0.5,
    TRAIL_ME_DU: false,
    TRAIL_ME_RT: false,
    TRAIL_ME_RT_SELL_RANGE: 0.5,
    TRAIL_ME_SELL: false,
    TRAIL_ME_SELL_RANGE: 0.5,
    TSSL_TARGET_ONLY: true,
    USE_RENKO: false,
    XTREND_ENABLED: true,
    STOP_BUY: 0,
    STOP_SELL: 0,
    PND: false,
    PND_PROTECTION: 1.5,
    SupportResistance: false,
    SupRes_ALLOW_DCA: true,
    SupRes_SPREAD: 0.1,
    SupRes_LVL_SPREAD: 1,
    SupRes_MAX: 0,
    SupRes_TIMER: 300,
    SupResMinROE: 20,
    MAX_BUY_COUNT: 20,
    GRID_MULTIPLIER: 1,
    STOP_AFTER_SELL: false,
    AUTO_GAIN: true,
    TRAILING_MULTIPLIER: 1,
    START_CONT_TRADING: 3,
    CT_TL_MULTIPLIER: 0.5,
    CT_RESTART_MULTIPLIER: 1,
    TL_MULTIPLIER: 1,
    MAX_OPEN_CONTRACTS: 1,
    DCA_METHOD: 'NATIVE',
    DCA_SPREAD: 2,
    SAFETY_TIMER: 1800,
    TREND_OPEN: false,
    TREND_BLOCK_DCA: false,
    TREND_LOWER_DCA: false,
    DIRECTION: 'LONG',
    TREND_CT_MULTIPLIER: 2,
    TREND_GRID_MULTIPLIER: 2,
    AUTO_STEP_SIZE: true,
    STEP_SIZE: 500,
    ENFORCE_STEP: false,
    STRAT_FILENAME: 'filename.js',
    unit_cost: false,
    DYNAMIC_EXIT_LOGIC: true,
    bitRage: false,
    FIRST_ORDER_EXTRA_DELAY: 30,
    TREND_TRAILING: true,
    TREND_TRAILING_MULTIPLIER: 1,
    TREND_TRAILING_BEARISH_MULTIPLIER: 2,
    AUTO_TREND_ORDERS: true,
    GAIN_PARTIAL: 0.5,
    PARTIAL_SELL_CAP: false,
    PARTIAL_SELL_CAP_RATIO: 1,
    SUPPORT_TL_RATIO: 2,
    TREND_PLUS: true,
    TREND_PLUS_BUY_MULTIPLIER_SMALL: 1,
    TREND_PLUS_BUY_MULTIPLIER_MEDIUM: 2,
    TREND_PLUS_BUY_MULTIPLIER_LARGE: 5,
    TREND_PLUS_SELL_MULTIPLIER_SMALL: 0.5,
    TREND_PLUS_SELL_MULTIPLIER_MEDIUM: 2,
    TREND_PLUS_SELL_MULTIPLIER_LARGE: 5,
    TREND_SCALPING: true,
    SCALP_TL_RATIO: 0.625,
    EXHAUSTION_SENSITIVITY: 'SHORT',
    STRICT_ENTRY: true,
    PERIOD_MEDIUM: 60,
    PERIOD_LONG: 240,
    TRADE_SUPPORTS: true,
    SUPPORT2_TL_RATIO: 2,
    TREND_SYNC: true,
    MULTIPLE_TIMEFRAMES_MODE: false,
    LOWER_PERIOD_LOW: 5,
    LOWER_PERIOD_MEDIUM: 15,
    LOWER_PERIOD_HIGH: 30,
    MIDDLE_PERIOD_LOW: 15,
    MIDDLE_PERIOD_MEDIUM: 60,
    MIDDLE_PERIOD_HIGH: 240,
    ACCUMULATION_CYCLE: false,
    MTF_TL_RATIO: 1,
    PRICE_ACTION_TL_RATIO: 1,
    PRICE_ACTION_THRESHOLD: 0,
  },

  // Defaults for MM related strategy parameters
  defaultStratMM: {
    MAX_BUY: 5,
    MAX_SELL: 5,
    CANCEL_SPREAD: 0.05,
    FIRST_ORDER_SPREAD: 0.02,
    FLIP: true,
    MM_SPREAD: 0.02,
    SR_RATIO: 1,
    SR_INVESTED_PERC: 0.01,
    SR_SPREAD: 0.05,
    SR_LIMIT_LONG: 1,
    SR_LIMIT_SHORT: 1,
    REDUCING_RATIO: 4,
    INITIAL_CAPITAL: 0.01,
    CAPITAL_RISK: 0.01,
    INVESTED_PERC: 0.01,
    MAX_OPEN_CONTRACTS: 999999,
    MAX_LOSS: 999999,
    FIBONACCI: false,
    FIB_DCA_PERC: 0.3,
    DCA_METHOD: 'NATIVE',
    SupportResistance: false,
    SupRes_ALLOW_DCA: false,
    SupRes_SPREAD: 0.2,
    SupRes_LVL_SPREAD: 1,
    SupRes_MAX: 200,
    SupRes_TIMER: 300,
    SupResMinROE: 20,
    GRID: false,
    GRID_SPREAD: 0.03,
    GRID_SIDE: 'LONG',
    GRID_MAX: 200,
    GRID_TIMER: 20,
    x125: false,
    DCA_PRICE_SPREAD: false,
    DCA_SPREAD: 2,
    MAX_DCA_ORDERS: 10,
    DCA_SPREAD_CAP: 5,
    MOTION_OF_THE_OCEAN: false,
    oneSCALPER: false,
    oneSCALPER_DCA: false,
    oneSCALPER_TIMER: 1,
    MOTO_DCA_PERC: 0.5,
    MOTO_SIDE: 'BOTH',
    MOTO_TIMER: 900,
    MOTO_DCA_MULTIPLIER: 1,
    PULLBACK: false,
    PULLBACK_DCA_PERC: 0.5,
    PULLBACK_SIDE: 'BOTH',
    PULLBACK_DCA_MULTIPLIER: 1,
    PULLBACK_ENABLED: false,
    PRE_ORDER_GAP: 0,
    HEDGE_MODE: 'BOTH',
    MM_DCA: false,
    MIN_VOLUME_TO_SELL: 0.001,
    IS_MARGIN_STRAT: true,
    GAIN: 0.1,
    INTER_ARB: false,
    LIQUIDITY_MINING: false,
    EWO: false,
  },

  // Defaults for BR related strategy parameters
  defaultStratBR: {
    bitRage: true,
    WAIT_OPEN_ORDERS: true,
    bitRage_MODE: 'safe',
    AUTOSELL: false,
    MAIN_BASE: 'BTC',
    BR_PANIC_SELL: false,
    PSAR_PERIOD: 360,
    PSAR_STEP: 0.02,
    PSAR_MAX: 0.2,
    CLOSE_SPREAD: false,
    BUY_ENABLED: false,
    MAX_BUY: 1,
    MAX_SELL: 1,
    BR_SMART_MODE: true,
    BR_SLOW_MODE: true,
  },

  // Settings grouping for regular strategy editor
  stratEditorGrouping: {
    // Categories end with separator, used for visually separating settings groups
    Buy: [
      'BUY_ENABLED',
      'BUY_METHOD',
      'BUY_LEVEL',
      'BUY_RANGE',
      'BUYLVL',
      'BUYLVL1',
      'BUYLVL2',
      'BUYLVL3',
      'PP_BUY',
      'Separator_',
      'TAKE_BUY',
      'TBUY_RANGE',
      'SINGLE_BUY',
      'NBA',
      'SupRes_SPREAD',
      'SupRes_MAX',
    ],
    Sell: [
      'SELL_ENABLED',
      'SELL_METHOD',
      'GAIN',
      'SELL_RANGE',
      'TSSL_TARGET_ONLY',
      'SELLLVL',
      'SELLLVL1',
      'SELLLVL2',
      'SELLLVL3',
      'PP_SELL',
      'Separator_',
      'TAKE_PROFIT',
      'TP_PROFIT_ONLY',
      'TP_RANGE',
      'DOUBLE_CHECK_GAIN',
      'SupRes_SPREAD',
    ],
    Balance: [
      'TRADING_LIMIT',
      'TL_PERC',
      'TL_ALLIN',
      'Separator_',
      'MIN_VOLUME_TO_BUY',
      'MIN_VOLUME_TO_SELL',
      'Separator_',
      'FUNDS_RESERVE',
      'KEEP_QUOTE',
    ],
    Indicator: [
      'PERIOD',
      'EMA1',
      'EMA2',
      'EMA_LENGTH',
      'CANDLES_LENGTH',
      'Separator_',
      'HIGH_BB',
      'LOW_BB',
      'STDV',
      'SMAPERIOD',
      'ATRX',
      'ATR_PERIOD',
      'EMASPREAD',
      'EMAx',
      'SLOW_SMA',
      'FAST_SMA',
      'XTREND_ENABLED',
      'MACD_SHORT',
      'MACD_LONG',
      'MACD_SIGNAL',
      'Separator_',
      'ADX_ENABLED',
      'ADX_LEVEL',
      'DI_PERIOD',
      'Separator_',
      'BTC_PND_PROTECTION',
      'BTC_PND_PERIOD',
      'BTC_MONEY_FLOW',
      'Separator_',
      'MFI_ENABLED',
      'MFI_BUY_LEVEL',
      'MFI_SELL_LEVEL',
      'MFI_LENGTH',
      'Separator_',
      'RSI_BUY_ENABLED',
      'RSI_BUY_LEVEL',
      'RSI_SELL_ENABLED',
      'RSI_SELL_LEVEL',
      'RSI_METHOD',
      'RSI_LENGTH',
      'Separator_',
      'STOCH_ENABLED',
      'STOCH_BUY_LEVEL',
      'STOCH_SELL_LEVEL',
      'STOCH_METHOD',
      'STOCH_K',
      'SLOW_STOCH_K',
      'STOCH_D',
      'Separator_',
      'STOCHRSI_ENABLED',
      'STOCHRSI_BUY_LEVEL',
      'STOCHRSI_SELL_LEVEL',
      'STOCHRSI_METHOD',
      'STOCHRSI_LENGTH',
      'Separator_',
      'TENKAN_PERIOD',
      'KIJUN_PERIOD',
      'SENKOUSPAN_PERIOD',
      'DISPLACEMENT',
      'ICHIMOKU_PROTECTION',
      'KUMO_SENTIMENTS',
      'TENKAN_CLOSE',
      'KUMO_CLOSE',
      'KIJUN_CLOSE',
      'TENKAN_STOP',
      'KUMO_STOP',
      'KIJUN_STOP',
      'KUMO_BUY',
      'KIJUN_BUY',
      'TENKAN_BUY',
      'KUMO_SELL',
      'KIJUN_SELL',
      'TENKAN_SELL',
      'ROE_CLOSE',
      'RENKO_PERIOD',
      'RENKO_BRICK_SIZE',
      'RENKO_ATR',
      'USE_RENKO',
    ],

    'Dollar Cost Avg': [
      'DOUBLE_UP',
      'DOUBLE_UP_CAP',
      'DU_CAP_COUNT',
      'Separator_',
      'DU_METHOD',
      'RSI_DU_BUY',
      'DU_BUYDOWN',
    ],
    'Reversal Trading': [
      'RT_ENABLED',
      'RT_BUY_LEVEL',
      'RT_GAIN',
      'RT_BUY_UP_LEVEL',
      'Separator_',
      'RT_ONCE',
      'RT_ONCE_AND_CONTINUE',
      'RT_MAXBAG_PROTECTION',
      'RT_TREND_ENABLED',
    ],
    TrailMe: [
      'TRAIL_ME_BUY',
      'TRAIL_ME_BUY_RANGE',
      'TRAIL_ME_SELL',
      'TRAIL_ME_SELL_RANGE',
      'TRAIL_ME_RT',
      'TRAIL_ME_RT_SELL_RANGE',
      'TRAIL_ME_DU',
      'TM_RT_SELL',
      'RT_SELL_UP',
      'RT_BUY_LEVEL',
    ],
    Margin: [
      'IS_MARGIN_STRAT',
      'LEVERAGE',
      'SHORT_LEVEL',
      'LONG_LEVEL',
      'PND',
      'PND_PROTECTION',
      'ROE',
      'DCA_METHOD',
      'DCA_SPREAD',
      'MEAN_REVERSION',
      'Separator_',
      'ROE_TRAILING',
      'ROE_LIMIT',
      'ROE_SCALPER',
      'ROE_SPREAD',
      'STOP_BUY',
      'STOP_SELL',
      'Separator_',
      'PRE_ORDER',
      'PRE_ORDER_GAP',
      'MAKER_FEES',
    ],
    Misc: [
      'STOP_LIMIT',
      'SL_DISABLE_BUY',
      'SL_DISABLE_SELL',
      'COUNT_SELL',
      'PANIC_SELL',
      'Separator_',
      'MARKET_BUY',
      'MARKET_SELL',
      'MARKET_CLOSE',
      'MARKET_STOP',
      'MARKET_RTBUY',
      'MARKET_RTSELL',
      'MARKET_BUYBACK',
      'MARKET_DU',
      'MARKET_FOK',
      'Separator_',
      'SAFETY_TIMER',
      'TRADES_TIMEOUT',
      'IGNORE_TRADES_BEFORE',
      'Separator_' /*, "BAG_BUSTER"*/,
      'LIQUIDITY',
      'LIQUIDITY_TAKER',
      'LIQUIDITY_GAIN',
      'MAX_INVESTMENT',
    ],
    Rename: ['NAME', 'BUTTON'],
    /* 
    "Nash League": [
      "NASH_LEAGUE",
      'Separator_',
      "TRADING_LIMIT",
      "NASH_TIMER",
      "MAX_INVESTMENT",
      "GAIN",
      "MIN_VOLUME_TO_SELL",
      "MAKER_FEES",
      "TAKER_FEES"
    ], 
    */
  },

  // Settings grouping for MM strategy editor
  stratEditorMMGrouping: {
    // Categories end with separator, used for visually separating settings groups
    'Base settings': [
      'TRADING_LIMIT',
      'MAX_BUY',
      'MAX_SELL',
      'HEDGE_MODE',
      'Separator_',
      'CANCEL_SPREAD',
      'FIRST_ORDER_SPREAD',
      'FLIP',
    ],
    'Close Position': [
      'MARKET_CLOSE',
      'MARKET_BUY',
      'MARKET_SELL',
      'PRE_ORDER',
      'PRE_ORDER_GAP',
      'Separator_',
      'ROE',
      'ROE_TRAILING',
      'ROE_LIMIT',
      'ROE_SCALPER',
      'ROE_SPREAD',
      'PND',
      'PND_PROTECTION',
    ],
    'Risk Management': [
      'MM_SPREAD',
      'STOP_LIMIT',
      'Separator_',
      'SR_RATIO',
      'SR_INVESTED_PERC',
      'SR_SPREAD',
      'SR_LIMIT_LONG',
      'SR_LIMIT_SHORT',
      'Separator_',
      'REDUCING_RATIO',
      'INITIAL_CAPITAL',
      'CAPITAL_RISK',
      'INVESTED_PERC',
      'MAX_OPEN_CONTRACTS',
      'MAX_LOSS',
    ],
    'Strategy variants': [
      'DCA_METHOD',
      'Separator_',
      'FIBONACCI',
      'FIB_DCA_PERC',
      'Separator_',
      'SupportResistance',
      'SupRes_ALLOW_DCA',
      'SupRes_SPREAD',
      'SupRes_LVL_SPREAD',
      'SupRes_MAX',
      'SupRes_TIMER',
      'SupResMinROE',
      'BUY_ENABLED',
      'SELL_ENABLED',
      'Separator_',
      'GRID',
      'GRID_SPREAD',
      'GRID_SIDE',
      'GRID_MAX',
      'GRID_TIMER',
      'x125',
      'Separator_',
      'MOTION_OF_THE_OCEAN',
      'MOTO_DCA_PERC',
      'MOTO_SIDE',
      'MOTO_DCA_MULTIPLIER',
      'MOTO_TIMER',
      'Separator_',
      'PULLBACK',
      'PULLBACK_DCA_PERC',
      'PULLBACK_SIDE',
      'PULLBACK_DCA_MULTIPLIER',
      'EMA1',
      'EMA2',
      'EMA3',
      'Separator_',
      'oneSCALPER',
      'oneSCALPER_DCA',
      'oneSCALPER_TIMER',
      'DCA_SPREAD',
      'ROE_SPREAD',
      'Separator_',
      'EWO',
    ],
    Spot: [
      'MM_DCA',
      'DCA_PRICE_SPREAD',
      'DCA_SPREAD',
      'MAX_DCA_ORDERS',
      'DCA_SPREAD_CAP',
      'GAIN',
      'MAX_OPEN_CONTRACTS',
      'INITIAL_CAPITAL',
      'MIN_VOLUME_TO_SELL',
    ],
    Other: [
      'PERIOD',
      'SMAPERIOD',
      'EMA1',
      'EMA2',
      'EMA3',
      'IS_MARGIN_STRAT',
      'SAFETY_TIMER',
      'Separator_',
      'PULLBACK_ENABLED',
      'PULLBACK_DCA_PERC',
      'PULLBACK_SIDE',
      'PULLBACK_DCA_MULTIPLIER',
    ],
    Rename: ['NAME', 'BUTTON'],
  },

  // Settings grouping for BR strategy editor
  stratEditorBRGrouping: {
    // Categories end with separator, used for visually separating settings groups
    Bitrage: [
      'bitRage_MODE',
      'GAIN',
      'DCA_strategy',
      'Separator_',
      'WAIT_OPEN_ORDERS',
      'CLOSE_SPREAD',
      'Separator_',
      'BR_SMART_MODE',
      'BR_SLOW_MODE',
    ],
    Hedging: [
      'BR_HEDGING',
      'AUTOSELL',
      'BR_PANIC_SELL',
      'MAIN_BASE',
      'Separator_',
      'PSAR_PERIOD',
      'PSAR_STEP',
      'PSAR_MAX',
    ],
    Rename: ['NAME', 'BUTTON'],
  },

  // Settings grouping for spot grid strategy editor
  stratEditorSpotGridGrouping: {
    // Categories end with separator, used for visually separating settings groups
    Basic: ['TRADING_LIMIT', 'MIN_VOLUME_TO_SELL', 'Separator_', 'MAX_BUY_COUNT', 'STOP_AFTER_SELL'],
    'Advanced ': ['AUTO_GAIN', 'GAIN', 'GRID_MULTIPLIER', 'PERIOD', 'SMAPERIOD', 'Separator_', 'KEEP_QUOTE'],
    Rename: ['NAME', 'BUTTON'],
  },

  // Settings grouping for stepGrid strategy editor
  stratEditorStepGridGrouping: {
    // Categories end with separator, used for visually separating settings groups
    'Basic settings': [
      'TRADING_LIMIT',
      'MIN_VOLUME_TO_SELL',
      'KEEP_QUOTE',
      'Separator_',
      'MAX_BUY_COUNT',
      'STOP_AFTER_SELL',
    ],
    'Step settings': ['AUTO_STEP_SIZE', 'STEP_SIZE', 'ENFORCE_STEP', 'Separator_', 'PERIOD', 'SMAPERIOD', 'ATR_PERIOD'],
    Rename: ['NAME', 'BUTTON'],
  },

  // Settings grouping for futuresGrid strategy editor
  stratEditorFuturesGridGrouping: {
    // Categories end with separator, used for visually separating settings groups
    Basic: ['TRADING_LIMIT', 'DIRECTION', 'Separator_', 'MAX_BUY_COUNT', 'MAX_OPEN_CONTRACTS', 'STOP_AFTER_SELL'],
    'Advanced ': ['AUTO_GAIN', 'GAIN', 'GRID_MULTIPLIER', 'TL_MULTIPLIER', 'PERIOD', 'SMAPERIOD'],
    Rename: ['NAME', 'BUTTON'],
  },

  // Settings grouping for spot grid advanced strategy editor
  stratEditorSpotGridAdvancedGrouping: {
    // Categories end with separator, used for visually separating settings groups
    Basic: ['TRADING_LIMIT', 'MIN_VOLUME_TO_SELL', 'FUNDS_RESERVE', 'Separator_', 'MAX_BUY_COUNT', 'STOP_AFTER_SELL'],
    'Advanced ': [
      'AUTO_GAIN',
      'GAIN',
      'Separator_',
      'GRID_MULTIPLIER',
      'TL_MULTIPLIER',
      'TRAILING_MULTIPLIER',
      'CT_TL_MULTIPLIER',
      'START_CONT_TRADING',
      'CT_RESTART_MULTIPLIER',
      'Separator_',
      'TREND_OPEN',
      'TREND_BLOCK_DCA',
      'TREND_LOWER_DCA',
      'TREND_CT_MULTIPLIER',
      'TREND_GRID_MULTIPLIER',
      'Separator_',
      'PERIOD',
      'SMAPERIOD',
      'KEEP_QUOTE',
    ],
    Rename: ['NAME', 'BUTTON'],
  },

  // Settings grouping for tenkan strategy editor
  stratEditorTenkanGrouping: {
    // Categories end with separator, used for visually separating settings groups
    Buy: ['BUY_ENABLED'],
    Sell: ['SELL_ENABLED'],
    Balance: ['TRADING_LIMIT'],
    Indicator: [
      'PERIOD',
      'CANDLES_LENGTH',
      'Separator_',
      'TENKAN_PERIOD',
      'KIJUN_PERIOD',
      'SENKOUSPAN_PERIOD',
      'DISPLACEMENT',
    ],

    Margin: ['IS_MARGIN_STRAT', 'ROE', 'ROE_LIMIT', 'DCA_SPREAD', 'ROE_SPREAD', 'MAKER_FEES'],
    Misc: ['MARKET_CLOSE'],
    Rename: ['NAME', 'BUTTON'],
    /* 
    "Nash League": [
      "NASH_LEAGUE",
      'Separator_',
      "TRADING_LIMIT",
      "NASH_TIMER",
      "MAX_INVESTMENT",
      "GAIN",
      "MIN_VOLUME_TO_SELL",
      "MAKER_FEES",
      "TAKER_FEES"
    ], 
    */
  },

  // Settings grouping for custom strategy editor
  stratEditorCustomGrouping: {
    // Categories end with separator, used for visually separating settings groups
    'Custom strategy': ['STRAT_FILENAME', 'IS_MARGIN_STRAT', 'MIN_VOLUME_TO_SELL'],
    Data: [
      'PERIOD',
      'CANDLES_LENGTH',
      'Separator_',
      'EMA1',
      'EMA2',
      'EMA3',
      'Separator_',
      'HIGH_BB',
      'LOW_BB',
      'STDV',
      'SMAPERIOD',
      'Separator_',
      'ATR_PERIOD',
      'Separator_',
      'SLOW_SMA',
      'FAST_SMA',
      'Separator_',
      'MACD_SHORT',
      'MACD_LONG',
      'MACD_SIGNAL',
      'Separator_',
      'ADX_LEVEL',
      'DI_PERIOD',
      'Separator_',
      'MFI_BUY_LEVEL',
      'MFI_SELL_LEVEL',
      'MFI_LENGTH',
      'Separator_',
      'RSI_LENGTH',
      'Separator_',
      'STOCH_BUY_LEVEL',
      'STOCH_SELL_LEVEL',
      'STOCH_K',
      'SLOW_STOCH_K',
      'STOCH_D',
      'Separator_',
      'STOCHRSI_LENGTH',
      'Separator_',
      'TENKAN_PERIOD',
      'KIJUN_PERIOD',
      'SENKOUSPAN_PERIOD',
      'DISPLACEMENT',
    ],
    Rename: ['NAME', 'BUTTON'],
  },

  // List of buy and sell methods, used in strategy editor (bitRage is fictional, used to open generate a strat that uses the bitrage strat editor)
  buySellMethods: [
    'emotionless',
    'bb',
    'gain',
    'ichimoku',
    'pp',
    'stepgain',
    'spotGrid',
    'spotGridAdvanced',
    'stepGrid',
    'futuresGrid',
    'tsa',
    'tssl',
    'TENKAN',
    'ADX',
    'ATRTS',
    'BBTA',
    'EMASPREAD',
    'MACD',
    'MACDH',
    'SMACROSS',
    'SupportResistance',
    'Market_Maker',
    'bitRage',
    'custom',
  ],

  // List of available pair overrides
  overrides: [
    'IS_MARGIN_STRAT',
    'STOP_BUY',
    'STOP_SELL',
    'SINGLE_BUY',
    'ROE_LIMIT',
    'ROE_TRAILING',
    'ROE_SCALPER',
    'ROE_SPREAD',
    'MAKER_FEES',
    'TAKER_FEES',
    'MARKET_BUY',
    'MARKET_SELL',
    'MARKET_CLOSE',
    'MARKET_STOP',
    'MARKET_RTBUY',
    'MARKET_RTSELL',
    'MARKET_BUYBACK',
    'MARKET_DU',
    'MARKET_FOK',
    'USE_RENKO',
    'SHORT_LEVEL',
    'LONG_LEVEL',
    'ROE',
    'TENKAN_CLOSE',
    'KUMO_CLOSE',
    'KIJUN_CLOSE',
    'TENKAN_STOP',
    'KUMO_STOP',
    'KIJUN_STOP',
    'RENKO_PERIOD',
    'RENKO_BRICK_SIZE',
    'RENKO_ATR',
    'LEVERAGE',
    'ICHIMOKU_PROTECTION',
    'XTREND_ENABLED',
    'DISPLACEMENT',
    'RT_BUY_UP_LEVEL',
    'DOUBLE_CHECK_GAIN',
    'NBA',
    'SL_DISABLE_BUY',
    'COUNT_SELL',
    'BTC_PND_PERIOD',
    'STOCHRSI_ENABLED',
    'STOCHRSI_LENGTH',
    'STOCHRSI_BUY_LEVEL',
    'STOCHRSI_SELL_LEVEL',
    'STOCHRSI_METHOD',
    'RT_ONCE',
    'RT_ONCE_AND_CONTINUE',
    'TP_PROFIT_ONLY',
    'TAKE_BUY',
    'TBUY_RANGE',
    'TENKAN_PERIOD',
    'KIJUN_PERIOD',
    'SENKOUSPAN_PERIOD',
    'KEEP_QUOTE',
    'TL_PERC',
    'TL_ALLIN',
    'TAKE_PROFIT',
    'TP_RANGE',
    'EMAx',
    'BOUGHT_PRICE',
    'PP_BUY',
    'PP_SELL',
    'BUYLVL',
    'BUYLVL1',
    'BUYLVL2',
    'BUYLVL3',
    'SELLLVL',
    'SELLLVL1',
    'SELLLVL2',
    'SELLLVL3',
    'ATRX',
    'ATR_PERIOD',
    'RSI_METHOD',
    'STOCH_METHOD',
    'KUMO_SENTIMENTS',
    'CANDLES_LENGTH',
    'EMA_LENGTH',
    'MFI_LENGTH',
    'RT_SELL_UP',
    'RT_TREND_ENABLED',
    'RT_BUY_LEVEL',
    'RT_GAIN',
    'BUY_METHOD',
    'BUY_ENABLED',
    'BUY_LEVEL',
    'BUY_RANGE',
    'SELL_METHOD',
    'SELL_ENABLED',
    'GAIN',
    'SELL_RANGE',
    'TSSL_TARGET_ONLY',
    'TRADING_LIMIT',
    'FUNDS_RESERVE',
    'PERIOD',
    'EMA1',
    'EMA2',
    'EMA3',
    'HIGH_BB',
    'LOW_BB',
    'STDV',
    'SMAPERIOD',
    'SLOW_SMA',
    'FAST_SMA',
    'MACD_SHORT',
    'MACD_LONG',
    'MACD_SIGNAL',
    'STOCH_ENABLED',
    'STOCH_BUY_LEVEL',
    'STOCH_SELL_LEVEL',
    'STOCH_K',
    'SLOW_STOCH_K',
    'STOCH_D',
    'DI_PERIOD',
    'EMASPREAD',
    'ADX_LEVEL',
    'ADX_ENABLED',
    'RSI_BUY_ENABLED',
    'RSI_SELL_ENABLED',
    'RSI_BUY_LEVEL',
    'RSI_SELL_LEVEL',
    'RSI_LENGTH',
    'MFI_ENABLED',
    'MFI_SELL_LEVEL',
    'MFI_BUY_LEVEL',
    'BTC_PND_PROTECTION',
    'BTC_MONEY_FLOW',
    'DOUBLE_UP',
    'DOUBLE_UP_CAP',
    'DU_CAP_COUNT',
    'DU_METHOD',
    'RSI_DU_BUY',
    'RT_ENABLED',
    'RT_MAXBAG_PROTECTION',
    'DU_BUYDOWN',
    'TRAIL_ME_BUY',
    'TRAIL_ME_SELL',
    'TRAIL_ME_RT_SELL_RANGE',
    'TM_RT_SELL',
    'TRAIL_ME_RT',
    'TRAIL_ME_DU',
    'TRAIL_ME_SELL_RANGE',
    'TRAIL_ME_BUY_RANGE',
    'PANIC_SELL',
    'STOP_LIMIT',
    'MIN_VOLUME_TO_BUY',
    'MIN_VOLUME_TO_SELL',
    'TRADES_TIMEOUT',
    'IGNORE_TRADES_BEFORE',
    'LIQUIDITY',
    'LIQUIDITY_TAKER',
    'LIQUIDITY_GAIN',
    'MAX_INVESTMENT',
    'NASH_LEAGUE',
    'NASH_TIMER',
    'MEAN_REVERSION',
    'GRID',
    'MAX_BUY',
    'MAX_SELL',
    'TIMEOUT_CLOSE',
    'CAPITAL_RISK',
    'REDUCING_RATIO',
    'INVESTED_PERC',
    'MAX_LOSS',
    'SR_INVESTED_PERC',
    'SR_RATIO',
    'SR_LIMIT_LONG',
    'SR_LIMIT_SHORT',
    'INITIAL_CAPITAL',
    'bitRage',
    'WAIT_OPEN_ORDERS',
    'bitRage_MODE',
    'BR_SMART_MODE',
    'BR_SLOW_MODE',
    'CLOSE_SPREAD',
    'AUTOSELL',
    'MAIN_BASE',
    'BR_PANIC_SELL',
    'PSAR_PERIOD',
    'PSAR_STEP',
    'PSAR_MAX',
    'SupportResistance',
    'SupRes_ALLOW_DCA',
    'SupRes_SPREAD',
    'SupRes_LVL_SPREAD',
    'CANCEL_SPREAD',
    'FIRST_ORDER_SPREAD',
    'FLIP',
    'MM_SPREAD',
    'SR_SPREAD',
    'MAX_OPEN_CONTRACTS',
    'FIBONACCI',
    'FIB_DCA_PERC',
    'DCA_METHOD',
    'SupRes_MAX',
    'SupRes_TIMER',
    'SupResMinROE',
    'GRID_SPREAD',
    'GRID_SIDE',
    'GRID_MAX',
    'GRID_TIMER',
    'x125',
    'DCA_PRICE_SPREAD',
    'DCA_SPREAD',
    'MAX_DCA_ORDERS',
    'DCA_SPREAD_CAP',
    'HEDGE_MODE',
    'MOTION_OF_THE_OCEAN',
    'oneSCALPER',
    'oneSCALPER_DCA',
    'oneSCALPER_TIMER',
    'MOTO_DCA_PERC',
    'MOTO_SIDE',
    'MOTO_DCA_MULTIPLIER',
    'MOTO_TIMER',
    'PND',
    'PND_PROTECTION',
    'PULLBACK',
    'PULLBACK_DCA_PERC',
    'PULLBACK_SIDE',
    'PULLBACK_DCA_MULTIPLIER',
    'PULLBACK_ENABLED',
    'MM_DCA',
    'LIQUIDITY_MINING',
    'INTER_ARB',
    'MAX_BUY_COUNT',
    'GRID_MULTIPLIER',
    'STOP_AFTER_SELL',
    'AUTO_GAIN',
    'EWO',
    'TRAILING_MULTIPLIER',
    'START_CONT_TRADING',
    'TL_MULTIPLIER',
    'CT_TL_MULTIPLIER',
    'SAFETY_TIMER',
    'CT_RESTART_MULTIPLIER',
    'TREND_OPEN',
    'TREND_BLOCK_DCA',
    'TREND_LOWER_DCA',
    'DIRECTION',
    'TREND_CT_MULTIPLIER',
    'TREND_GRID_MULTIPLIER',
    'AUTO_STEP_SIZE',
    'STEP_SIZE',
    'ENFORCE_STEP',
    'STRAT_FILENAME',
    'TREND_TRAILING',
    'TREND_TRAILING_MULTIPLIER',
    'TREND_TRAILING_BEARISH_MULTIPLIER',
    'AUTO_TREND_ORDERS',
    'PROTECT_PARTIAL_SELL',
    'TREND_VARIANT',
    'BUYDOWN_EXPONENT',
    'MIN_BUYDOWN',
    'KEEP_ONE_TL',
    'MIN_STEP_PCT',
    'MIN_STEP_UP_PCT',
    'MIN_STEP_DOWN_PCT',
    'GAIN_PARTIAL',
    'PARTIAL_SELL_CAP',
    'PARTIAL_SELL_CAP_RATIO',
    'SUPPORT_TL_RATIO',
    'TREND_PLUS',
    'TREND_PLUS_BUY_MULTIPLIER_SMALL',
    'TREND_PLUS_BUY_MULTIPLIER_MEDIUM',
    'TREND_PLUS_BUY_MULTIPLIER_LARGE',
    'TREND_PLUS_SELL_MULTIPLIER_SMALL',
    'TREND_PLUS_SELL_MULTIPLIER_MEDIUM',
    'TREND_PLUS_SELL_MULTIPLIER_LARGE',
    'TREND_SCALPING',
    'SCALP_TL_RATIO',
    'EXHAUSTION_SENSITIVITY',
    'STRICT_ENTRY',
    'PERIOD_MEDIUM',
    'PERIOD_LONG',
    'unit_cost',
    'TRADE_SUPPORTS',
    'SUPPORT2_TL_RATIO',
    'MULTIPLE_TIMEFRAMES_MODE',
    'LOWER_PERIOD_LOW',
    'LOWER_PERIOD_MEDIUM',
    'LOWER_PERIOD_HIGH',
    'MIDDLE_PERIOD_LOW',
    'MIDDLE_PERIOD_MEDIUM',
    'MIDDLE_PERIOD_HIGH',
    'ACCUMULATION_CYCLE',
    'MTF_TL_RATIO',
    'PRICE_ACTION_TL_RATIO',
    'PRICE_ACTION_THRESHOLD',
  ],

  // Tooltip texts
  tooltips: {
    SUBACCOUNT: 'FTX subaccount name. Required field if the API key is from a subaccount',
    TOURNAMENT_AGREEMENT:
      'Opt-in for trading tournaments. Strategy performance data will be shared to display on the tournament board.',
    TOURNAMENT_NICKNAME: 'Your unique nickname for the tournament leaderboard',
    gunthy_wallet: 'Your registered ERC-20 wallet address. The address where you hold your Gunthy tokens.',
    SINGLE_BUY: 'Allow one single strategy buy order',
    ADX_ENABLED: 'Use ADX as a confirming indicator, applies to buy and sell side',
    ADX_LEVEL: 'Set ADX level, range 1 - 99 \n\nDefines the minimum trend level to be reached to allow trades',
    ATRX: 'Multiplier used for calculating the limits for trading with ATRTS',
    ATR_PERIOD: 'The number of candles used to calculate ATR',
    BEST_CURRENCIES: 'True/False - set it true and get the best pairs by volume and variance in the past 24h',
    BOT_CCLEAN: 'Clear the internal cache every x hours \n\nValue represents hours',
    BOT_DELAY: 'Bot will delay processing a new pair for a random amount of seconds',
    BTC_MONEY_FLOW:
      "Sets the MFI value used for BTC PND protection \n\nWhen BTC/USD MFI drops below this value buy orders won't be placed",
    BTC_PND_PERIOD: 'Define MFI period to use for BTC PND protection',
    BTC_PND_PROTECTION: 'Prevent buy orders when BTC/USD MFI is below a set level',
    BUYLVL: 'Defines which step should be considered for buying',
    BUYLVL1: 'Defines the first level below the lowest EMA to buy \n\nValue represents a percentage',
    BUYLVL2: 'Defines the second level below the lowest EMA to buy \n\nValue represents a percentage',
    BUYLVL3: 'Defines the third level below the lowest EMA to buy \n\nValue represents a percentage',
    BUY_ENABLED: 'Allow buy or long orders',
    BUY_LEVEL: 'Percentage below the lowest EMA to allow buy orders',
    BUY_METHOD: 'Sets the method used for strategy buy orders',
    BUY_RANGE: 'Sets the buy range for trailing \n\nValue represents a percentage',
    CANCEL_ORDERS_CYCLE_CAP: 'Number of rounds to wait before open orders are cancelled',
    CANCEL_ORDERS_ENABLED: 'Allow the bot to cancel open orders for active trading pairs when price moves away',
    CANCEL_ONCAP: 'Change the behavior of cancelling orders: orders are cancelled after CANCEL_ORDERS_CYCLE_CAP passes',
    CANDLES_LENGTH:
      'The number of candles to request from the exchange \n\nMake sure this value is at least equal to the highest period setting of any of your indicators',
    COUNT_SELL:
      'Disable a pair after a number of sell orders \n\nValue represents a number of sell orders since adding the pair',
    DEPTH_PRESSURE_LEVEL:
      'Autoconfig filter for bullish pairs: 99 means all the orders are on the ask side. 1 means that all orders are on the bid side, percentage',
    DISPLACEMENT: 'The number of candles to displace Chikou-span and Kumo',
    DI_PERIOD: 'The number of candles used to calculate ADX',
    DOUBLE_CHECK_GAIN:
      'Makes sure a positive gain is reached before placing a sell order \n\nDisable to allow indicators based strategies to sell at loss',
    DOUBLE_UP: 'Use Dollar Cost Averaging (DCA)',
    DOUBLE_UP_CAP:
      'Defines the number of units to buy, based on quote balance \n\nSetting it to 1 will lead to each DCA order to buy exactly as many quote units as you already own',
    DU_BUYDOWN:
      'Sets the minimum price drop between the last buy order and the next DCA order \n\nValue represents a percentage',
    DU_CAP_COUNT: 'Sets the maximum allowed number of DCA orders',
    DU_METHOD:
      'Method used for triggering DCA orders \n\nOptions: \n\nHIGHBB: allows DCA when upper bollinger band drops below last buy price \n\nRSI: allows DCA when RSI is lower than set \n\nNumerical: allows DCA from a set percentage below last buy price',
    EMA1: 'The number of candles used to calculate medium EMA',
    EMA2: 'The number of candles used to calculate fast EMA',
    EMA3: 'The number of candles used to calculate long EMA',
    EMASPREAD: 'Use EMASPREAD as a confirming indicator for both buy and sell orders',
    EMA_LENGTH: 'The number of candles used to calculate EMA',
    EMAx: 'Sets the minimum difference between fast and medium for EMASPREAD \n\nValue represents a percentage',
    FAST_SMA: 'The number of candles used to calculate fast SMA',
    FUNDS_RESERVE:
      'The amount of base currency that will not be traded \n\nNo more buy orders are allowed when the available funds drops below this value',
    GAIN: 'Gain target above break-even \n\nValue represents a percentage',
    HIGH_BB: 'The HIGH_BB target \n\nValue represents a percentage: 0 - 100, top to bottom',
    ICHIMOKU_PROTECTION:
      'Prevent closing positions if the current candle touches kumo on opposite direction of your position',
    IGNORE_TRADES_BEFORE:
      'Optional parameter to force Gunbot to not consider any trades before the time set \n\nValue represents a unix timestamp in milliseconds. Get a current timestamp on currentmillis.com',
    LIQUIDITY:
      'Enables the liquidity provider strategy at spot exchanges \n\nWarning: this will generate an extremely high number of trades, only use this when you want to provide liquidity and know the risks',
    LIQUIDITY_TAKER: 'Enables the taker side of liquidity strategy',
    MAX_INVESTMENT: ' The max amount of base value you want to invest in liquidity strategy',
    NASH_LEAGUE: 'Set true and you opt-in to participate to Nash.io League Tournament',
    NASH_TIMER: 'Interval in seconds to fire trades at Nash League Tournament',
    LIQUIDITY_GAIN: ' Enforce posting profitable sell orders. Disable to provide liquidity at possible loss',
    IS_MARGIN_STRAT: 'Is this a margin/futures strategy? \n\nToggle to show the appropriate settings',
    KEEP_QUOTE: 'Number of quote units to not sell and keep in balance',
    KIJUN_BUY: 'Buy using Kijun',
    KIJUN_CLOSE: 'Close position after crossing Kijun-sen',
    KIJUN_PERIOD: 'Tnumber of candles used to calculate Kijun-sen',
    KIJUN_SELL: 'Sell using Kijun',
    KIJUN_STOP: 'Stop position after crossing Kijun-sen',
    KUMO_BUY: 'Buy using Kumo',
    KUMO_CLOSE: 'Close position after crossing Kumo',
    KUMO_SELL: 'Sell using Kumo',
    KUMO_SENTIMENTS: 'Disable this to disregard Kumo when trading with ichimoku',
    KUMO_STOP: 'Stop position after crossing Kumo',
    LEVERAGE: 'Indicates the desired leverage level for a position \n\nSet 0 to use cross margin',
    LONG_LEVEL: 'Percentage from EMA to allow long orders.',
    LOW_BB: 'The LOW_BB target \n\nValue represents a percentage: 0 - 100, bottom to top',
    MACD_LONG: 'The number of candles used to calculate the long-term moving average for MACD',
    MACD_SHORT: 'The number of candles used to calculate the short-term moving average for MACD',
    MACD_SIGNAL: 'The number of candles used to calculate the MACD Signal line',
    MAKER_FEES: 'Use Post Only orders at Bitmex \n\nShould normally be used together with a negative pre order gap',
    MARKET_BUY: 'Place buy orders as market \n\nWhen disabled: orders are sent as limit',
    MARKET_BUYBACK: 'Place RT buyback orders as market \n\nWhen disabled: orders are sent as limit',
    MARKET_CLOSE: 'Place close orders as market \n\nWhen disabled: orders are sent as limit',
    MARKET_DU: 'Place Double Up orders as market \n\nWhen disabled: orders are sent as limit',
    MARKET_FOK: 'Place FOK orders as market \n\nWhen disabled: orders are sent as limit',
    MARKET_RTBUY: 'Place RT Buy orders as market \n\nWhen disabled: orders are sent as limit',
    MARKET_RTSELL: 'Place RT Sell orders as market \n\nWhen disabled: orders are sent as limit',
    MARKET_SELL: 'Place sell orders as market \n\nWhen disabled: orders are sent as limit',
    MARKET_STOP: 'Place stop orders as market \n\nWhen disabled: orders are sent as limit',
    MEAN_REVERSION: 'Use the mean reversion variant of the selected buy and sell methods',
    MERGE_AUTOCONFIG: 'Set this true and the autoconfig module will merge pairs in your config.js',
    MFI_BUY_LEVEL:
      'Set MFI_BUY_LEVEL, range 1 - 99 \n\nSets max allowed MFI level for strategy buy orders \n\nSet -1001 to disable',
    MFI_ENABLED: 'Use MFI as a confirming indicator',
    MFI_LENGTH: 'The number of candles used to calculate MFI',
    MFI_SELL_LEVEL:
      'Set MFI_SELL_LEVEL, range 1 - 99. Set min allowed MFI level for strategy sell orders \n\nSet -1001 to disable',
    MINIMUM_VARIATION_SUGGEST_TRADE: 'Numeric - Sets the minimum 24h variance for pair suggestions in BTC',
    MINIMUM_VOLUME_GOOD_CURRENCY: 'Numeric - Sets the trading volume threshold for pair suggestions',
    MIN_VOLUME_TO_BUY:
      'Sets threshold for buy orders \n\nSet this to the minimum trade size for your trading pair, defined in base currency',
    MIN_VOLUME_TO_SELL:
      "Sets threshold for sell orders to ignore small balances, Gunbot doesn't sell if quote value is less than defined \n\nSet this to the minimum trade size for your trading pair, defined in base currency",
    MULTIPLE_BASE:
      'Change selling behavior. \n\nDefault: each sell order will sell all available funds \n\nMultiple base: each sell order will sell only as much as the trading limit for a pair defines',
    NBA: 'Only allow buy orders when ask is at least x% below the last sell rate, set 0 to disable this feature \n\nValue represents a percentage',
    PANIC_SELL: 'Immediately sell all quote units at market price',
    PERIOD:
      'The "size" of the candlesticks used for indicator calculation, make sure to use a supported value for your exchange \n\nValue represents minutes',
    PP_BUY: 'Sets the exact price target for buying with pingpong',
    PP_SELL: 'Sets the exact price target for selling with pingpong',
    PRE_ORDER: 'Use an offset percentage for limit orders, compared to the current best price in the order book',
    PRE_ORDER_GAP:
      'Offset value for limit orders, use a negative value to place an order deeper in the order book \n\nValue represents a percentage',
    RENKO_ATR: 'Use ATR for Renk brick size',
    RENKO_BRICK_SIZE: 'Renko candles bricks size',
    RENKO_PERIOD: 'Period to draw RENKO candles, must be identical to PERIOD',
    RESERVE_PILE_UP: 'Automatically add trading gains to the funds reserve',
    RETRY_TV_ORDER: 'Retry placing orders \n\nOnly use this as a last resort, otherwise it can lead to double orders',
    ROE: 'ROE target to close positions \n\nValue represents (leveraged) ROE',
    ROE_CLOSE: 'Use reaching ROE as closing trigger',
    ROE_LIMIT: 'Trailing range for ROE trailing \n\nValue represents a percentage of actual ROE',
    ROE_TRAILING: 'Use ROE trailing for closing positions',
    ROE_SCALPER:
      'Use different style of ROE trailing: initial trailing stop is ROE_LIMIT below ROE target\n\nROE trailing must be enabled to use this feature',
    ROE_SPREAD:
      'Increase an open position with an additional order in value of Trading limit, when ROE has reached its target and increases by ROE_SPREAD, valid only if ROE_SCALPER is active. \n\n0 disables this feature',
    RSI_BUY_ENABLED: 'Use RSI as a confirming indicator for strategy buy orders',
    RSI_BUY_LEVEL: 'Set RSI_BUY_LEVEL range 1 - 99. Sets the max RSI level for allowing strategy buy orders',
    RSI_DU_BUY: 'The RSI level for buying when DU_METHOD is set to RSI',
    RSI_LENGTH: 'The number of candles to calculate RSI',
    RSI_METHOD: 'The method to use RSI. \n\nOscillator: RSI must be in range \n\nCross: RSI must cross the set level',
    RSI_SELL_ENABLED: 'Use RSI as a confirming indicator for strategy sell orders',
    RSI_SELL_LEVEL: 'Set RSI_BUY_LEVEL range 1 - 99. Sets the max RSI level for allowing strategy sell orders',
    RT_BUY_LEVEL: 'Percentage the price has to drop after RT_SELL to trigger RT_BUY \n\nValue represents a percentage',
    RT_BUY_UP_LEVEL:
      'Reverse stop loss. Percentage above the last RT_SELL to place an RT_BUY higher than latest RT_SELL. \n\nValue represents a percentage, set 0 to disable',
    RT_ENABLED:
      'Reversal Trading will be used if true. \nWARNING: if you disable RT while in RT process, you might need to set IGNORE_TRADES_BEFORE and delete the pairs json files!',
    RT_GAIN:
      'Defines a % after initial buy or RT_BUY to trigger an RT_SELL. \n\nSet this higher than the bid/ask spread in the orderbook!',
    RT_MAXBAG_PROTECTION:
      'Sets the maximum allowed difference between the break-even point and current price for starting RT',
    RT_ONCE: 'Disable pair after succesfully ending an RT cycle at profit',
    RT_ONCE_AND_CONTINUE: 'Trading will continue without RT after succesfully ending an RT cycle at profit',
    RT_SELL_UP: 'Sets the starting point for trailing up an RT_SELL. Only works when TM_RT_SELL is enabled',
    RT_TREND_ENABLED:
      ' Enables the use of forecast for placing RT_BUY or RT_SELL orders when using TM_RT_SELL and/or TRAIL_ME_BUY',
    SELLLVL: 'Defines which step should be considered for selling',
    SELLLVL1: 'Defines the first level above break-even to sell \n\nValue represents a percentage',
    SELLLVL2: 'Defines the second level above break-even to sell \n\nValue represents a percentage',
    SELLLVL3: 'Defines the third level above break-even to sell \n\nValue represents a percentage',
    SELL_ENABLED: 'Allow sell or short orders',
    SELL_METHOD: 'Sets the method used for strategy sell orders',
    SELL_RANGE: 'Sets the sell range for trailing \n\nValue represents a percentage',
    SENKOUSPAN_PERIOD: 'Defines the number of candles used to calculate Senkou-span',
    SHORT_LEVEL: 'Percentage from EMA to allow short orders \n\nSell method dependent',
    SLOW_SMA: 'The number of candles used to calculate slow SMA',
    SLOW_STOCH_K: 'The number of candles used to calculate slow STOCH %K',
    SL_DISABLE_BUY: 'Disable buy orders when STOP LIMIT is reached',
    SL_DISABLE_SELL: 'Disable sell orders when STOP LIMIT is reached for a short position',
    SMAPERIOD:
      'The number of candles used to calculate Bollinger Bands, trend watcher, support and resistance and Fibonacci retracements',
    STDV: 'Multiplier used to calculate Bollinger Bands',
    STOCHRSI_BUY_LEVEL:
      'Sets the maximumKIJUN_STOP Stoch RSI value to allow strategy buy orders \n\nValue between 0.01 - 0.99 \n\nSet -1001 to disable',
    STOCHRSI_ENABLED: 'Use Stoch RSI as confirming indicator',
    STOCHRSI_LENGTH: 'The number of candles used to calculate Stoch RSI',
    STOCHRSI_METHOD:
      'The method to use Stoch RSI \n\nOscillator: Stoch RSI must be in range \n\nCross: Stoch RSI must cross the set level',
    STOCHRSI_SELL_LEVEL:
      'Sets the minimum Stoch RSI value to allow strategy sell orders \n\nValue between 0.01 - 0.99 \n\nSet -1001 to disable',
    STOCH_BUY_LEVEL:
      'Sets the maximum Stoch value to allow strategy buy orders \n\nValue between 1 - 99 \n\nSet -1001 to disable',
    STOCH_D: 'The number of candles used to calculate Stoch %D',
    STOCH_ENABLED: 'Use Stoch as a confirming indicator',
    STOCH_K: 'The number of candles used to calculate Stoch %K',
    STOCH_METHOD:
      'The method to use Stoch \n\nOscillator: Stoch must be in range \n\nCross: Stoch must cross the set level',
    STOCH_SELL_LEVEL:
      'Sets the minimum Stoch value to allow strategy sell orders \n\nValue between 1 - 99 \n\nSet -1001 to disable',
    STOP_LIMIT:
      'Sets the threshold for when to sell or close at loss \n\nSpot: value represents a percentage below break even \n\nMargin: value represents ROE below break even',
    STRATEGY: 'Strategy name to use for autoconfig pair selections',
    TAKE_BUY: 'Use TakeBuy',
    TAKE_PROFIT: 'Use TakeProfit',
    TAKER_FEES: 'Enables Taker side orders at Nash League',
    TBUY_RANGE: 'Sets the range for TakeBuy \n\nValue represents a percentage',
    TELEGRAM_ENABLED: 'Enables Telegram trade notifications',
    TELEGRAM_NICK: 'Alphanumeric - The name you give this bot instance',
    TENKAN_BUY: 'Buy using Tenkan',
    TENKAN_CLOSE: 'Close position after crossing Tenkan-sen',
    TENKAN_PERIOD: 'Sets the number of candles used to calculate Tenkan-sen',
    TENKAN_SELL: 'Sell using Tenkan',
    TENKAN_STOP: 'Stop position after crossing Tenkan-sen',
    TG_ORDER_TIMEOUT:
      'Delay placing orders for a number of seconds, during this time the order can be confirmed through Telegram. \nSet it to 0 to disable delay and send orders immediately',
    TG_PL_ONLY: 'Send Telegram notifications for sell orders only',
    TG_TEST: 'Set this to true to test Telegram alerts',
    TL_ALLIN: 'Use all available base balance for each buy order',
    TL_PERC: 'Sets the trading limit to a percentage of available base currency for each buy order',
    TM_RT_SELL: 'Use tssl-style trailing for RT_SELL orders above the last RT_BUY rate',
    TOKEN: "The bot token you've received from @botfather",
    TP_PROFIT_ONLY: 'When enabled, take profit is only allowed to fire orders while price is above break even.',
    TP_RANGE: 'Sets the range for TakeProfit \n\nValue represents a percentage',
    TRADES_TIMEOUT: 'Force time inbetween two trades for the same pair \n\nValue represents seconds',
    TRADING_FEES: 'Percentage of trading fees for your exchange',
    TRADING_LIMIT:
      'This is the amount of base currency to spend per trade. \n\nBitmex and similar exchanges: enter the number of contracts',
    TRAIL_ME_BUY: 'Use tssl-style trailing after the normal strategy buy criteria are met',
    TRAIL_ME_BUY_RANGE: 'Trailing range \n\nValue represents a percentage',
    TRAIL_ME_DU: 'Use tssl-style trailing for double up orders',
    TRAIL_ME_RT: 'Use tssl-style trailing for RT_BUY orders',
    TRAIL_ME_RT_SELL_RANGE: 'Trailing range \n\nValue represents a percentage',
    TRAIL_ME_SELL: 'Use tssl-style trailing after the normal strategy sell criteria are met',
    TRAIL_ME_SELL_RANGE: 'Trailing range \n\nValue represents a percentage',
    TSSL_TARGET_ONLY:
      "Protects you from sell orders below gain when using tssl sell method, making the value you've set for GAIN the starting point for trailing",
    TV_GAIN: 'Minimum gain to reach before selling \n\nOnly works for spot trading',
    TV_GB: 'Use mixed mode: process Gunbot strategies and incoming alerts simultaneously',
    TV_LEVERAGE: 'Sets the leverage used for each trade',
    TV_MVTS:
      'Required minimum balance (expressed in base) for placing a sell order. Use this to avoid trading untradable amounts',
    TV_PROTECTION:
      'Check there is an overall profit before selling, as specified in TV_GAIN \n\nOnly works for spot trading',
    TV_PYRAMID: 'Enables pyramid selling',
    TV_STOPLOSS_PERCENTAGE:
      'Percentage below average bought price at which a sell signal should override TV_PROTECTION and sell in a stop-loss manner',
    TV_TRADING_LIMIT_ALLIN: 'Each buy order will use all available base currency balance',
    TV_TRADING_LIMIT_BUY: 'Sets the trading limit for each buy order placed',
    TV_TRADING_LIMIT_BUY_PYRAMID: 'Sets the trading limit for each pyramid buy order',
    TV_TRADING_LIMIT_CAP: 'The maximum amount of base currency to be invested in a pair',
    TV_TRADING_LIMIT_SELL: 'Sets the trading limit for sell orders placed through Tradingview',
    USE_RENKO: 'Use renko candles instead of regular candles',
    VERBOSE: 'Lead to more detailed information being shown in the console',
    WATCH_MODE:
      'Gunbot will process the configured pairs, but will not place actual buy or sell orders. \n\nFor spot strategies and futuresGrid only.',
    XTREND_ENABLED: 'Use XTREND to confirm trades when using stepgain',
    authorized_froms: 'Defines the E-Mail addresses Gunbot is allowed to read and use for Tradingview alerts',
    wh_port: 'client port used for webhooks',
    wh_passphrase: 'passphrase used for webhooks',
    chat_id: 'The ID you received from @myidbot',
    admin_id: 'Telegram ID that is allowed to interact with the bot  \n\nOften the same as chat ID',
    clientport: 'The port Gunbot uses to stream data',
    debug: 'Enables more detailed console logs',
    enabled:
      'Start listening for email alerts \n\nMake sure to have set at least one trading pair per exchange that you expect alerts for \n\nUnless you use GB_TV, this will stop processing regular trading strategies.',
    host: 'The hostname of the IMAP server to connect to',
    hostname: 'The name of the host Gunbot is located on',
    interval_ticker_update:
      'This parameter defines after how many milliseconds new prices are being pulled from the exchange for each pair (default value of 25000 = 25 seconds)',
    password: 'Your email password, or app password depending on your provider and security settings',
    period_storage_ticker:
      'This parameter defines how many of the received prices from the exchange are being kept in the array for calculating other indicators',
    port: 'The port number of the IMAP server',
    timeout_buy:
      'This is an internal timeout that prevents the bot from buying again within the set amount of milliseconds after a buy order has been placed',
    timeout_sell:
      'This is an internal timeout that prevents the bot from selling again within the set amount of milliseconds after a sell order has been placed',
    tls: 'Use TLS encryption for the IMAP connection',
    user: 'Your email address',
    withdraw_address: 'Set a valid BTC wallet address to enable automatic withdraws each time the threshold is reached',
    withdraw_threshold:
      'Set the amount of BTC to be accumulated with RESERVE_PILE_UP before an automatic withdraw will be executed',
    TG_AUTOCONFIG: 'Activates Telegram notifications of Autoconfig actions',
    OLD_TELEGRAM: 'Activates Telegram notifications for bitRage trades',
    BR_TOKEN: 'The bot token you received from @botfather \n\nMust use a sepate token',
    BR_SMART_MODE: 'bitRage analyzes all triple and spins only profitable ones',
    BR_SLOW_MODE: 'bitRage smart mode waits for previous opportunities to complete before firing a new one',
    TV_LENDING: 'Sets the maximum allowed lending rate for opening a position on Poloniex',
    STOP_BUY:
      'Places a stop market order at a specified price distance below entry \n\nValue represents a percentage of price, 0 disables the option \n\nFor Bitmex only',
    STOP_SELL:
      'Places a stop market order at a specified price distance above entry \n\nValue represents a percentage of price, 0 disables the option \n\nFor Bitmex only',
    TV_CLOSE_ALL:
      'Closes the entire long or short position, instead of using a specified trading limit \n\nOnly works for margin trading',
    INITIAL_CAPITAL:
      'Set your initial wallet balance before your run MM for the first time. Affects hard reductions by the Capital Risk option',
    MAX_BUY:
      'Number of orders to place below bid or average entry price \n\nSet 0 to effectively disable the long side',
    MAX_SELL:
      'Number of orders to place above ask or average entry price \n\nSet 0 to effectively disable the short side',
    CANCEL_SPREAD:
      'Sets how far price must move before open orders are cancelled and replaced. \n\nValue represents a percentage',
    FIRST_ORDER_SPREAD:
      'Sets how far apart orders are placed when you are in no position. \n\nValue represents a percentage',
    FLIP: 'When enabled, orders are placed on both the long and short side. \n\nWhen disabled, no MM orders are placed on the profit side',
    MM_SPREAD:
      'Sets the minimum distance between average entry price and where DCA orders are placed. \n\nValue represents a percentage',
    SR_RATIO:
      'Ratio used for soft reduction orders. \n\nWith 5000 contracts open and SR_RATIO: 2, an order will be sent for 2500 contracts, closing half of the position (5000/2 = 2500)',
    SR_INVESTED_PERC:
      'Threshold for allowing soft reduction orders (a reduction while in profit). \n\nWhen Invested Ratio drops below this threshold, an SR order will be placed the next time the position is profitable. \n\nSet a low value like 0.01 to effectively disable this',
    SR_LIMIT_LONG: 'Set how many SR orders may be placed for a single long position. \n\nCommonly set to 1',
    SR_LIMIT_SHORT: 'Set how many SR orders may be placed for a single long position \n\nCommonly set to 1',
    SR_SPREAD:
      'Sets the minimum distance between average entry price and where an SR order is first placed. Used to cover for fees on exchanges with taker fees > 0',
    CAPITAL_RISK:
      'When Capital Risk in grid is lower than set, a part of the position will be closed at loss with a market order. \n\nSet a low value like 0.01 to effectively disable this',
    INVESTED_PERC:
      'When Invested Perc in grid is lower than set, a part of the position will be closed at loss with a market order. \n\nSet a low value like 0.01 to effectively disable this',
    MAX_OPEN_CONTRACTS:
      'Limits the maximum position size of a futures position. Value is expressed in quote units. \n\nMM strategy variants and futuresGrid:\nif executing a next order would result in exceeding max open contracts, the order will not get fired.\n\nCore MM:\nif position size exceeds max open contracts, a hard reduction is triggered. ',
    REDUCING_RATIO:
      'Ratio used for hard reduction orders. \n\nWith 5000 contracts open and REDUCING_RATIO: 2, an order will be sent for 2500 contracts, closing half of the position (5000/2 = 2500)',
    MAX_LOSS:
      'Max loss on a position, compared to Initial Capital, before a hard reduction order is fired. Example: MAX_LOSS 5 would close a position if pnl is lower or equal to 5% of initial capital \n\nSet a high value like 10000000 to effectively disable this',
    FIBONACCI: 'Use Fibonacci retracements for triggering orders',
    FIB_DCA_PERC:
      'Sets the minimum distance between average entry price and where DCA orders are placed. \n\nValue represents a percentage',
    DCA_METHOD: 'Allows Native or Tenkan method for Futures Markets DCA orders',
    SupportResistance: 'Use support / resistance for triggering orders',
    SupRes_ALLOW_DCA: 'Allow DCA orders to happen after initially opening a position',
    SupRes_SPREAD:
      'Sets a range from first support/resistance, orders are allowed after this range is breached. \n\nApplies to strategy buy AND sell orders \n\nValue represents a percentage',
    SupRes_LVL_SPREAD:
      'Sets the minimum distance between last order rate and where DCA orders are placed. \n\nValue represents a percentage',
    SupRes_MAX:
      'Use this setting to limit how many times the strategy is allowed to buy, by setting a maximum allowed position size in base currency. \n\n If the combined value of quote balance, open orders and the next order to place are higher than set, then no further buy orders will be placed.',
    SupRes_TIMER: 'Timer in seconds between orders of the same type',
    SupResMinROE: 'Minimum ROE to reach before close orders are allowed',
    GRID: 'Use Grid for triggering orders',
    GRID_SPREAD: 'Minimum distance between grid orders. \n\nValue represents a percentage',
    GRID_SIDE: 'Sets the side in which new positions are opened.',
    GRID_MAX:
      'Max contract size. When this value is reached no further orders that would add to the position are allowed',
    GRID_TIMER: 'Timer in seconds between orders of the same type',
    x125: 'Enables a mixed mode between pure MM and Grid',
    DCA_PRICE_SPREAD: 'Use DCA price spread',
    DCA_SPREAD:
      'Sets the minimum distance between last order rate and where DCA orders are placed. \n\nValue represents a percentage',
    MAX_DCA_ORDERS: 'Maximum number of DCA orders to place in a single round',
    DCA_SPREAD_CAP: 'Maximum number of DCA rounds',
    bitRage: 'Use bitRage in this strategy',
    WAIT_OPEN_ORDERS:
      'Wait for open orders to fill in all stages, before starting to execute another arbitrage opportunity on the same triple',
    bitRage_MODE:
      'Safe mode picks arbitrage opportunities with market orders if possible, if not it uses limit orders. \n\nCrazybitch mode only allows for executing opportunities with market orders',
    AUTOSELL:
      'Enable this when you want to use automatic bitRage hedging, or enable it just before you want to manually trigger hedging',
    MAIN_BASE:
      'Set to the base currency you want to hedge to. \n\nThis option is only important to use yourself if you want to manually trigger hedging',
    BR_PANIC_SELL: 'Enable to manually trigger hedging to the set main base',
    PSAR_PERIOD: 'Candle period for calculating PSAR. Make sure to use a supported period setting for your exchange',
    PSAR_STEP: 'PSAR step size',
    PSAR_MAX: 'PSAR max value',
    CLOSE_SPREAD: 'Enable to allow bitRage to close the bid/ask spread when looking for arbitrage opportunities',
    bitRage_strategy: 'Strategy name used for bitRage',
    DCA_strategy: 'Strategy name used for handling bitRage bags',
    BR_HEDGING: 'Enable automatic hedging from USDT to BTC or vice versa, triggered by PSAR signals',
    MOTION_OF_THE_OCEAN: 'Follow whale movements for triggering orders',
    oneSCALPER: 'Enables a MA99 scalper you can use on any supported period',
    oneSCALPER_DCA: 'Allows DCA in 1Scalper using the DCA spread option',
    oneSCALPER_TIMER: 'How many seconds to wait between 2 consecutive DCA orders in 1scalper strategy',
    EWO: 'Enables the Elliot Waves Oscillator strategy for futures markets',
    MOTO_DCA_PERC:
      'Sets the minimum distance between average entry price and where DCA orders are placed. \n\nValue represents a percentage',
    MOTO_SIDE: 'Sets the side to perform MOTO orders. \n\nAccepted values: LONG, SHORT, BOTH',
    MOTO_DCA_MULTIPLIER: 'Multiplier for Moto DCA quantity: the formula is Trading Limit/Multiplier',
    MOTO_TIMER: 'Number of seconds to wait before performing another trade',
    PND: 'Close a position after a pump or dump finishes and price is better than average entry price. Overrules any ROE related setting',
    PND_PROTECTION:
      'Threshold to close a position when it drops below ROE again. \n\nA value of 1.5 means that if ROE reached 1.5x the minimum target, the position will get closed immediately if the trend turns',
    TV_MARKET_ORDERS: 'Send all orders as market orders. When disabled, limit orders are sent',
    PULLBACK: 'Use this strategy variant to base entry points on pullbacks',
    PULLBACK_DCA_PERC: 'Sets the distance between entry point and DCA orders. \n\nValue represents a percentage',
    PULLBACK_SIDE: 'Sets the side to perform Pullback orders. \n\nAccepted values: LONG, SHORT, BOTH',
    PULLBACK_DCA_MULTIPLIER: 'Multiplier for Pullback DCA quantity: Formula is Trading limit / Pullback DCA multiplier',
    PULLBACK_ENABLED: 'Enables PULLBACK entry logic for MM strats,',
    HEDGE_MODE:
      'Use this to allow for simultaneous positions in both directions, for OKEx and BitGet only. Accepted values are LONG, SHORT, BOTH',
    MM_DCA: 'Allow DCA orders to be placed',
    key: 'API key for trading on this exchange. Usually the same as the registered key',
    masterKey: 'Registered API key for this exchange',
    secret: 'API secret for the trading key. Some exchanges call this a private key',
    masterSecret: 'API secret for the registered key. Some exchanges call this a private key',
    clientId: 'Client ID for this  exchange',
    passphrase: 'API passphrase for the registered and trading key',
    delay:
      'Delay time in seconds between processing pairs. 10 works on almost every exchange, some exchanges like Binance allow much lower values',
    fees: 'Exchange fees as percentage of a single order, check your exchange for your fees level. Example: if Binance charges 0.1% per order, enter 0.1',
    market: 'Market type this API key will be used for. The most common options are spot or futures',
    MAX_BUY_COUNT:
      'Max number of buy orders, each for the same amount set as trading limit. When max is reached, the strategy goes in sell mode only',
    GRID_MULTIPLIER:
      'Can be used to increase or decrease the distance between buy orders. Default value 1 means that the hardcoded levels are used. \n\n1.5 would increase the levels with a factor 1.5x, a value of 0.5 would halve the default levels',
    STOP_AFTER_SELL:
      'Do not place a new buy order after the next time the strategy sells. Halts trading after the next sell order. \n\nWorks for both longs and shorts in futuresGrid, after closing any position it will not open a new one.',
    AUTO_GAIN:
      'Sets a dynamic sell target for spotGrid. Target is never lower than 2x trading fees, target decreases when position size increases. Overrules a manually set target.',
    TRAILING_MULTIPLIER:
      'Can be used to increase or decrease the trailing range for all order types. Default value 1 means that the hardcoded range is used. \n\n1.5 would increase the range with a factor 1.5x, a value of 0.5 would halve the default trailing range',
    START_CONT_TRADING:
      'Continuous trading allows you to continue trading while the current price is below break even, with the aim of lowering break even by accumulating quote and to gain base balance. You need to have a trading limit that is at least 2x the exchange defined minimum order size for this feature to work. \n\n This setting defines from which buy count continuous trading is allowed. \n\n A value of 3 means that when the position is 3x trading limit in size, the next sell target is placed above the last buy rate instead of above break even. Set a very high value to effectively disable this feature',
    TL_MULTIPLIER:
      'Can be used to increase or decrease the invested amount with each consecutive buy order. \n\nExamples with trading limit 100 usdt and max buy count 3:\n\n1: each buy order is for 100 usdt \n\n1.5: first buy 100, second buy 150, third buy 225\n\n2: first buy 100, second buy 200, third buy 400',
    CT_TL_MULTIPLIER:
      'Sets the ratio between last buy order invest in base, and the amount used for trades during continuous trading. Value between 0 and 1. \n\nWhen set to 0.5, halve of the base amount used for the previous DCA trade will be used for continuous trading. Setting 1 would use the same amount as the last DCA buy order \n\nWhen set too low, it is possible that CT sell orders fail because the order value is below exchange minimum.',
    CT_RESTART_MULTIPLIER:
      'Sets the distance between a CT sell and a buy above that. Default is 1, should usually not be changed. \n\nExamples:\n\n1: buy target above last sell rate is placed once price is 1x the distance between sup/res above last sell rate \n\n0.5: buy target above last sell rate is placed once price is 0.5x the distance between sup/res above last sell rate',
    SAFETY_TIMER: 'Attempts to pause trading for x seconds in case incomplete API data is detected on Binance Futures',
    INSTANCE_NAME: 'Optional instance name to show in page title in browser',
    TREND_OPEN:
      'When enabled, new positions are only opened when both 4h and 15m charts indicate a bullish market. \n\nThis check is independent from the PERIOD in your strategy. Requires the exchange to offer both 15m and 4h candle data',
    TREND_BLOCK_DCA:
      'When enabled, DCA trades are only allowed when both 4h and 15m charts indicate a bullish market \n\nThis check is independent from the PERIOD in your strategy. Requires the exchange to offer both 15m and 4h candle data',
    TREND_LOWER_DCA:
      'When enabled, the DCA distance gets doubled when the 4h and/or 15m chart do not indicate a bullish market \n\nThis check is independent from the PERIOD in your strategy. Requires the exchange to offer both 15m and 4h candle data',
    DIRECTION:
      'The direction to trade: LONG, SHORT or AUTO. \n\nIf you select LONG and have an open short, the strategy will act as if in LONG mode until the position can be closed at profit and a SHORT gets opened.\n\nThe AUTO mode sets the direction automatically based on the current trend detected on 4h and 15m chart, this check is independent from the PERIOD setting in your strategy. If the market seems undecided, no new positions are opened',
    TREND_CT_MULTIPLIER:
      'Multiplier to adjust CT buy target while trend is not bullish and TREND_LOWER_DCA is used\n\nA value of 2 would double the distance, a value of 1 results in the same behavior as when TREND_LOWER_DCA is disabled',
    TREND_GRID_MULTIPLIER:
      'Multiplier to adjust the next DCA target while trend is not bullish and TREND_LOWER_DCA is used\n\nA value of 2 would double the distance, a value of 1 results in the same behavior as when TREND_LOWER_DCA is disabled',
    AUTO_STEP_SIZE: 'When enabled, the step size for buy and sell orders is automatically set. Mainly based on ATR',
    STEP_SIZE:
      'Step size for buy and sell orders. Set as a price: setting 500 on USDT-BTC makes the bot trade each time price moves 500 USDT',
    ENFORCE_STEP: 'When enabled, trailing is not allowed to finish at a worse rate than the currently active step size',
    STRAT_FILENAME: 'Filename of a custom strategy file in Gunbot root folder',
    unit_cost:
      'Determines how the break even price gets calculated. \n\nWhen enabled, the break even line reprents the average cost per remaining unit in balance. \n\nWhen disabled, the highest value of unit price or the break even price for the complete order sequence is used. \n\nShould not be enabled together with dynamic exit logic.',
    DYNAMIC_EXIT_LOGIC:
      'Use this to dynamically change the exit logic used for the strategy. In uptrends the target is unit cost, in any other market situation the break even price for the complete order sequence is used. \n\nDisable unit cost to use this option.',
    futuresGrid:
      'DCA strategy with automatic buydown levels and price trailing. Invest per trade is static. Next target increases with each order',
    TREND_TRAILING:
      'Automatically use different buy trailing ranges for bearish situations. \n\nThe aim is to spend less on buy orders when price is not moving upwards, by using much bigger trailing ranges',
    TREND_TRAILING_MULTIPLIER:
      'Trailing range multiplier to use when 4h structure is bullish, but 15m structure is bearish. \n\nSets buy trailing range to "multiplier * ATR", or if you use a custom pct trailing range, to "multiplier * pct trailing range"',
    TREND_TRAILING_BEARISH_MULTIPLIER:
      'Trailing range multiplier to use when 4h structure is bearish and 15m structure is not bullish or is bearish. \n\nSets buy trailing range to "multiplier * ATR", or if you use a custom pct trailing range, to "multiplier * pct trailing range"',
    AUTO_TREND_ORDERS:
      'When used together with "trend orders: true", such trend initiated orders are restricted to be allowed only during a 4h uptrend',
  },

  // List of readable names for settings parameters
  // Conventions: Only first characters in a line get Caps. Exception: indicator names / abbreviations in ALLCAPS
  title: {
    gunthy_wallet: 'Gunthy wallet',
    TOURNAMENT_AGREEMENT: 'Tournament opt-in',
    TOURNAMENT_NICKNAME: 'Leaderboard nickname',
    IS_MARGIN_STRAT: 'Is margin strategy',
    STRATEGY: 'Strategy',
    KUMO_BUY: 'Kumo buy',
    KIJUN_BUY: 'Kijun buy',
    TENKAN_BUY: 'Tenkan buy',
    KUMO_SELL: 'Kumo sell',
    TENKAN_SELL: 'Tenkan sell',
    KIJUN_SELL: 'Kijun sell',
    MERGE_AUTOCONFIG: 'Merge autoconfig',
    DEPTH_PRESSURE_LEVEL: 'Depth pressure',
    ROE_CLOSE: 'ROE close',
    ROE_TRAILING: 'ROE trailing',
    ROE_LIMIT: 'ROE limit',
    ROE_SCALPER: 'ROE scalper',
    ROE_SPREAD: 'ROE spread',
    PRE_ORDER: 'Pre order',
    PRE_ORDER_GAP: 'Pre order gap',
    MAKER_FEES: 'Maker fees',
    TAKER_FEES: 'Taker fees',
    MEAN_REVERSION: 'Mean reversion',
    MARKET_BUY: 'Market buy',
    MARKET_SELL: 'Market sell',
    MARKET_CLOSE: 'Market close',
    MARKET_STOP: 'Market stop',
    MARKET_RTBUY: 'Market RTbuy',
    MARKET_RTSELL: 'Market RTsell',
    MARKET_BUYBACK: 'Market buyback',
    MARKET_DU: 'Market DU',
    MARKET_FOK: 'Market fok',
    TV_LEVERAGE: 'TV leverage',
    USE_RENKO: 'Use renko',
    SHORT_LEVEL: 'short level',
    LONG_LEVEL: 'Long level',
    ROE: 'ROE',
    TENKAN_CLOSE: 'Tenkan close',
    KUMO_CLOSE: 'Kumo close',
    KIJUN_CLOSE: 'Kijun close',
    TENKAN_STOP: 'Tenkan stop',
    KUMO_STOP: 'Kumo stop',
    KIJUN_STOP: 'Kijun stop',
    RENKO_PERIOD: 'Renko period',
    RENKO_BRICK_SIZE: 'Renko brick size',
    RENKO_ATR: 'Renko ATR',
    LEVERAGE: 'Leverage',
    ICHIMOKU_PROTECTION: 'Ichimoku protection',
    XTREND_ENABLED: 'Xtrend enabled',
    NBA: 'Never buy above',
    DOUBLE_CHECK_GAIN: 'Double check gain',
    DISPLACEMENT: 'Displacement',
    RT_BUY_UP_LEVEL: 'RT buy up level',
    SL_DISABLE_BUY: 'SL disable buy',
    SL_DISABLE_SELL: 'SL disable sell',
    COUNT_SELL: 'Count sell',
    BTC_PND_PERIOD: 'BTC pnd period',
    STOCHRSI_ENABLED: 'Stoch RSI enabled',
    STOCHRSI_LENGTH: 'Stoch RSI length',
    STOCHRSI_BUY_LEVEL: 'Stoch RSI buy level',
    STOCHRSI_SELL_LEVEL: 'Stoch RSI sell level',
    STOCHRSI_METHOD: 'Stoch RSI method',
    TG_PL_ONLY: 'TG pl only',
    RT_ONCE: 'RT once',
    RT_ONCE_AND_CONTINUE: 'RT once and continue',
    RSI_LENGTH: 'RSI length',
    login: 'Login',
    twoFA: 'Two factor authentication',
    trade: 'Trade',
    error: 'Error',
    warning: 'Warning',
    callback: 'Callback',
    TV_GB: 'TV GB',
    TP_PROFIT_ONLY: 'Tp profit only',
    TAKE_BUY: 'Take buy',
    TBUY_RANGE: 'Take buy range',
    TENKAN_PERIOD: 'Tenkan period',
    KIJUN_PERIOD: 'Kijun period',
    SENKOUSPAN_PERIOD: 'Senkouspan period',
    KEEP_QUOTE: 'Keep quote',
    TL_PERC: 'Trading limit pct',
    TL_ALLIN: 'Trading limit all-in',
    TG_TEST: 'TG test',
    TV_MVTS: 'TV mvts',
    TAKE_PROFIT: 'Take profit',
    TP_RANGE: 'Tp range',
    EMAx: 'EMAx',
    PP_BUY: 'Pingpong buy',
    PP_SELL: 'Pingpong sell',
    BUYLVL: 'Stepgain buy lvl',
    BUYLVL1: 'Stepgain buy lvl 1',
    BUYLVL2: 'Stepgain buy lvl 2',
    BUYLVL3: 'Stepgain buy lvl 3',
    SELLLVL: 'Stepgain sell lvl',
    SELLLVL1: 'Stepgain sell lvl 1',
    SELLLVL2: 'Stepgain sell lvl 2',
    SELLLVL3: 'Stepgain sell lvl 3',
    ATRX: 'ATRx',
    ATR_PERIOD: 'ATR period',
    RSI_METHOD: 'RSI method',
    STOCH_METHOD: 'Stoch method',
    KUMO_SENTIMENTS: 'Kumo sentiments',
    TG_ORDER_TIMEOUT: 'Telegram order timeout',
    CANDLES_LENGTH: 'Candles length',
    EMA_LENGTH: 'EMA length',
    MFI_LENGTH: 'MFI length',
    RT_SELL_UP: 'RT sell up',
    RT_TREND_ENABLED: 'RT trend enabled',
    RT_BUY_LEVEL: 'RT buy level',
    SELL_METHOD: 'Sell method',
    BUY_METHOD: 'Buy method',
    BEST_CURRENCIES: 'Best currencies',
    MINIMUM_VOLUME_GOOD_CURRENCY: 'Min volume good currency',
    MINIMUM_VARIATION_SUGGEST_TRADE: 'Min variation suggest trade',
    enabled: 'Enabled',
    authorized_froms: 'Authorized froms',
    wh_port: 'Webhooks port',
    wh_passphrase: 'Webhooks passphrase',
    user: 'User',
    password: 'Password',
    host: 'Host',
    tls: 'Tls',
    Port: 'Port',
    clientPort: 'Client Port',
    hostname: 'Hostname',
    TELEGRAM_ENABLED: 'Enabled',
    TELEGRAM_NICK: 'Bot nickname',
    TOKEN: 'Token',
    chat_id: 'Chat id',
    TV_GAIN: 'Gain',
    TV_TRADING_LIMIT_BUY: 'Trading limit buy',
    TV_TRADING_LIMIT_BUY_PYRAMID: 'Trading limit buy pyramid',
    TV_PYRAMID: 'Pyramid',
    TV_TRADING_LIMIT_SELL: 'Trading limit sell',
    TV_PROTECTION: 'Protection',
    TV_TRADING_LIMIT_CAP: 'Trading limit cap',
    TV_STOPLOSS_PERCENTAGE: 'Stoploss pct',
    TV_TRADING_LIMIT_ALLIN: 'Trading limit all-in',
    RETRY_TV_ORDER: 'Retry order',
    withdraw_address: 'Withdraw address',
    withdraw_threshold: 'Withdraw threshold',
    CANCEL_ORDERS_ENABLED: 'Cancel orders enabled',
    CANCEL_ORDERS_CYCLE_CAP: 'Cancel orders cycle cap',
    CANCEL_ONCAP: 'Cancel orders oncap',
    timeout_sell: 'Timeout sell',
    timeout_buy: 'Timeout buy',
    period_storage_ticker: 'Period storage ticker',
    interval_ticker_update: 'Interval ticker update',
    BOT_CCLEAN: 'Clean cache',
    BOT_DELAY: 'Bot delay',
    WATCH_MODE: 'Watch mode',
    MULTIPLE_BASE: 'Multiple base',
    debug: 'Debug',
    VERBOSE: 'Verbose',
    RESERVE_PILE_UP: 'Reserve pile up',
    IGNORE_TRADES_BEFORE: 'Ignore trades before',
    LIQUIDITY: 'Liquidity provider',
    LIQUIDITY_TAKER: 'Liquidity taker role',
    LIQUIDITY_GAIN: 'Liquidity gain',
    MAX_INVESTMENT: 'Max invested base',
    NASH_LEAGUE: 'Nash league',
    NASH_TIMER: 'Trades interval in seconds',
    TSSL_TARGET_ONLY: 'Tssl target only',
    SELL_RANGE: 'Sell range',
    ADX_ENABLED: 'ADX enabled',
    ADX_LEVEL: 'ADX level',
    DI_PERIOD: 'DI period',
    EMASPREAD: 'EMA spread',
    BUY_RANGE: 'Buy range',
    RT_GAIN: 'RT gain',
    BUY_ENABLED: 'Buy enabled',
    BUY_LEVEL: 'Buy level',
    SELL_ENABLED: 'Sell enabled',
    GAIN: 'Gain',
    TRADING_FEES: 'Trading fees',
    TRADING_LIMIT: 'Trading limit',
    FUNDS_RESERVE: 'Funds reserve',
    PERIOD: 'Period',
    EMA1: 'Medium EMA',
    EMA2: 'Fast EMA',
    EMA3: 'Long EMA',
    HIGH_BB: 'High BB',
    LOW_BB: 'Low BB',
    STDV: 'Standard deviation',
    SMAPERIOD: 'SMA period',
    SLOW_SMA: 'Slow SMA',
    FAST_SMA: 'Fast SMA',
    MACD_SHORT: 'MACD short',
    MACD_LONG: 'MACD long',
    MACD_SIGNAL: 'MACD signal',
    STOCH_ENABLED: 'Stoch enabled',
    STOCH_BUY_LEVEL: 'Stoch buy level',
    STOCH_SELL_LEVEL: 'Stoch sell level',
    STOCH_K: 'Stoch K',
    SLOW_STOCH_K: 'Slow stoch K',
    STOCH_D: 'Stoch D',
    RSI_BUY_ENABLED: 'RSI buy enabled',
    RSI_SELL_ENABLED: 'RSI sell enabled',
    RSI_BUY_LEVEL: 'RSI buy level',
    RSI_SELL_LEVEL: 'RSI sell level',
    MFI_ENABLED: 'MFI enabled',
    MFI_SELL_LEVEL: 'MFI sell level',
    MFI_BUY_LEVEL: 'MFI buy level',
    BTC_PND_PROTECTION: 'BTC pnd protection',
    BTC_MONEY_FLOW: 'BTC money flow',
    DOUBLE_UP: 'Double up enabled',
    DOUBLE_UP_CAP: 'DU cap',
    DU_CAP_COUNT: 'DU cap count',
    DU_METHOD: 'DU method',
    DU_BUYDOWN: 'DU buydown',
    RSI_DU_BUY: 'DU RSI buy',
    RT_ENABLED: 'RT enabled',
    RT_MAXBAG_PROTECTION: 'RT max bag protection',
    TM_RT_SELL: 'TrailMe RT sell',
    TRAIL_ME_RT_SELL_RANGE: 'TrailMe RT sell range',
    TRAIL_ME_SELL: 'TrailMe sell',
    TRAIL_ME_BUY: 'TrailMe buy',
    TRAIL_ME_RT: 'TrailMe RT buy',
    TRAIL_ME_DU: 'TrailMe DU',
    TRAIL_ME_SELL_RANGE: 'TrailMe sell range',
    TRAIL_ME_BUY_RANGE: 'TrailMe buy range',
    PANIC_SELL: 'Panic sell',
    STOP_LIMIT: 'Stop limit',
    MIN_VOLUME_TO_BUY: 'Min volume to buy',
    MIN_VOLUME_TO_SELL: 'Min volume to sell',
    TRADES_TIMEOUT: 'Trades timeout',
    TG_AUTOCONFIG: 'Autoconfig alerts',
    OLD_TELEGRAM: 'bitRage alerts',
    BR_TOKEN: 'Token for bitRage & autoconfig alerts',
    BR_SMART_MODE: 'bitRage smart mode',
    BR_SLOW_MODE: 'bitRage slow mode',
    admin_id: 'Admin id',
    TV_CLOSE_ALL: 'Close complete position',
    TV_LENDING: 'Max lending rate',
    SINGLE_BUY: 'Single buy',
    STOP_BUY: 'Buy stop',
    STOP_SELL: 'Sell stop',
    INITIAL_CAPITAL: 'Initial capital',
    MAX_BUY: 'Max buy',
    MAX_SELL: 'Max sell',
    CANCEL_SPREAD: 'Cancel spread',
    FIRST_ORDER_SPREAD: 'First order spread',
    FLIP: 'Flip',
    MM_SPREAD: 'MM spread',
    SR_RATIO: 'SR ratio',
    SR_INVESTED_PERC: 'SR invested perc',
    SR_LIMIT_LONG: 'SR limit long',
    SR_LIMIT_SHORT: 'SR limit short',
    SR_SPREAD: 'SR spread',
    CAPITAL_RISK: 'Capital risk',
    INVESTED_PERC: 'Invested perc',
    MAX_OPEN_CONTRACTS: 'Max open contracts',
    REDUCING_RATIO: 'Reducing ratio',
    MAX_LOSS: 'Max loss',
    FIBONACCI: 'Fibonacci',
    FIB_DCA_PERC: 'Fib DCA perc',
    DCA_METHOD: 'DCA method',
    SupportResistance: 'Support / resistance',
    SupRes_ALLOW_DCA: 'Sup / res allow DCA',
    SupRes_SPREAD: 'Sup / res spread',
    SupRes_LVL_SPREAD: 'Sup / res DCA spread',
    SupRes_MAX: 'Sup / res max',
    SupRes_TIMER: 'Sup / res timer',
    SupResMinROE: 'Sup / res min ROE',
    GRID: 'Grid',
    GRID_SPREAD: 'Grid spread',
    GRID_SIDE: 'Grid side',
    GRID_MAX: 'Grid max',
    GRID_TIMER: 'Grid timer',
    x125: 'X125',
    DCA_PRICE_SPREAD: 'DCA price spread',
    DCA_SPREAD: 'DCA spread',
    MAX_DCA_ORDERS: 'Max DCA orders',
    DCA_SPREAD_CAP: 'DCA spread cap',
    bitRage: 'Use bitRage',
    WAIT_OPEN_ORDERS: 'Wait for open orders',
    bitRage_MODE: 'bitRage mode',
    AUTOSELL: 'Autosell',
    MAIN_BASE: 'Base to hedge to',
    BR_PANIC_SELL: 'bitRage panic sell',
    PSAR_PERIOD: 'Psar period ',
    PSAR_STEP: 'Psar step',
    PSAR_MAX: 'Psar max',
    CLOSE_SPREAD: 'Close spread',
    bitRage_strategy: 'bitRage stratey',
    DCA_strategy: 'DCA strategy',
    BR_HEDGING: 'bitRage hedging',
    MOTION_OF_THE_OCEAN: 'Motion of the ocean',
    oneSCALPER: '1 scalper',
    oneSCALPER_DCA: '1 scalper DCA',
    oneSCALPER_TIMER: '1 scalper timer',
    MOTO_DCA_PERC: 'Moto DCA spread',
    MOTO_SIDE: 'Moto side',
    MOTO_TIMER: 'Moto timer',
    MOTO_DCA_MULTIPLIER: 'Moto DCA multiplier',
    PND: 'Pnd',
    BOUGHT_PRICE: 'Bought price',
    PND_PROTECTION: 'Pnd protection',
    TV_MARKET_ORDERS: 'Use market orders',
    PULLBACK: 'Pullback',
    PULLBACK_DCA_PERC: 'Pullback DCA pct',
    PULLBACK_SIDE: 'Pullback side',
    PULLBACK_DCA_MULTIPLIER: 'Pullback DCA multiplier',
    PULLBACK_ENABLED: 'Pullback enabled',
    HEDGE_MODE: 'Hedge mode',
    MM_DCA: 'Allow DCA for MM spot',
    INTER_ARB: 'Interexchange arbitrage (for gunthy token)',
    LIQUIDITY_MINING: 'Liquidity mining (for gunthy token)',
    MAX_BUY_COUNT: 'Max buy count',
    GRID_MULTIPLIER: 'Grid multiplier',
    STOP_AFTER_SELL: 'Stop after next sell',
    AUTO_GAIN: 'Auto gain',
    EWO: 'Elliot waves oscillator',
    TRAILING_MULTIPLIER: 'Trailing range multiplier',
    START_CONT_TRADING: 'Start CT',
    TL_MULTIPLIER: 'Trading limit multiplier',
    CT_TL_MULTIPLIER: 'CT TL limit multiplier',
    CT_RESTART_MULTIPLIER: 'CT restart multiplier',
    SAFETY_TIMER: 'Safety timer',
    INSTANCE_NAME: 'Instance name',
    TREND_OPEN: 'Trend open',
    TREND_BLOCK_DCA: 'Dynamic DCA block',
    TREND_LOWER_DCA: 'Dynamic DCA distance',
    DIRECTION: 'Direction',
    TREND_CT_MULTIPLIER: 'Trend CT multiplier',
    TREND_GRID_MULTIPLIER: 'Trend grid multiplier',
    AUTO_STEP_SIZE: 'Auto step size',
    STEP_SIZE: 'Step size',
    ENFORCE_STEP: 'Enforce step size',
    STRAT_FILENAME: 'Strategy filename',
    FOREVER_BAGS: 'Forever bags',
    USE_TLR: 'Auto TL ratio',
    USE_PSR: 'Auto Partial sell ratio',
    PARTIAL_SELL_RATIO: 'Partial sell ratio',
    PCT_STEP_SIZE: 'Pct step size',
    PCT_TRAILING_RANGE: 'Pct buy trailing range',
    CUSTOM_TRAILING_RANGE: 'Custom buy trailing range',
    PCT_SELL_TRAILING_RANGE: 'Pct sell trailing range',
    CUSTOM_SELL_TRAILING_RANGE: 'Custom sell trailing range',
    TREND_SYNC: 'Trend sync',
    TREND_BASIC: 'Trend basic',
    TREND_ORDERS: 'Trend orders',
    SELL_STEP_MULTIPLIER: 'Sell step multiplier',
    CUSTOM_TRADING_RANGE_MODE: 'Custom trading range',
    TRADING_RANGE_LOW: 'Trading range low',
    TRADING_RANGE_HIGH: 'Trading range high',
    TRADING_RANGE_STOP: 'Trading range stop',
    TRADING_RANGE_DCA_STOP: 'Trading range DCA stop',
    PULLBACK_MODE: 'Pullback mode',
    VOLATILITY_MODE: 'Volatility mode',
    TA_MODE: 'TA mode',
    DYNAMIC_SL: 'Dynamic stop loss',
    TRADING_LIMIT_SHORT: 'Trading limit short',
    MAX_UNHEDGED: 'Max unhedged',
    FIRST_TRADES_MULTIPLIER: 'First trades multiplier',
    FIRST_TRADES_THRESHOLD: 'First trades threshold',
    USE_TREND: 'Use trend',
    STOP_AFTER_CLOSE_LONG: 'Stop after close (long)',
    STOP_AFTER_CLOSE_SHORT: 'Stop after close (short)',
    CLOSE_LONG_ENABLED: 'Close long enabled',
    CLOSE_SHORT_ENABLED: 'Close short enabled',
    unit_cost: 'Unit cost',
    DYNAMIC_EXIT_LOGIC: 'Dynamic exit logic',
    FIRST_ORDER_EXTRA_DELAY: 'First order delay',
    TREND_TRAILING: 'Trend trailing',
    TREND_TRAILING_MULTIPLIER: 'Trend trailing multiplier (small)',
    TREND_TRAILING_BEARISH_MULTIPLIER: 'Trend trailing multiplier (big)',
    AUTO_TREND_ORDERS: 'Auto trend orders',
    PROTECT_PARTIAL_SELL: 'Protect partial sell',
    TREND_VARIANT: 'Trend variant',
    BUYDOWN_EXPONENT: 'Buydown exponent',
    MIN_BUYDOWN: 'Minimum buydown',
    KEEP_ONE_TL: 'Keep 1x TL',
    MIN_STEP_UP_PCT: 'Minimum step up pct',
    MIN_STEP_DOWN_PCT: 'Minimum step down pct',
    MIN_STEP_ASYMMETRIC: 'Minimum step asymmetric',
    INSTANT_OPEN_THRESHOLD_LONG: 'Instant open threshold (long)',
    INSTANT_OPEN_THRESHOLD_SHORT: 'Instant open threshold (short)',
    MIN_STEP_PCT: 'Minimum step pct',
    GAIN_PARTIAL: 'Partial sell gain',
    PARTIAL_SELL_CAP: 'Use partial sell cap',
    PARTIAL_SELL_CAP_RATIO: 'Partial sell cap ratio',
    SUPPORT_TL_RATIO: 'S1 TL ratio',
    TREND_PLUS: 'Trend plus',
    TREND_PLUS_BUY_MULTIPLIER_SMALL: 'Buy multiplier small',
    TREND_PLUS_BUY_MULTIPLIER_MEDIUM: 'Buy multiplier medium',
    TREND_PLUS_BUY_MULTIPLIER_LARGE: 'Buy multiplier large',
    TREND_PLUS_SELL_MULTIPLIER_SMALL: 'Sell multiplier small',
    TREND_PLUS_SELL_MULTIPLIER_MEDIUM: 'Sell multiplier medium',
    TREND_PLUS_SELL_MULTIPLIER_LARGE: 'Sell multiplier large',
    TREND_SCALPING: 'Micro scalping',
    SCALP_TL_RATIO: 'Micro scalp TL ratio',
    EXHAUSTION_SENSITIVITY: 'Exhaustion sensitivity',
    STRICT_ENTRY: 'Strict entry',
    STRICT_DCA: 'Strict DCA',
    PERIOD_MEDIUM: 'Period medium',
    PERIOD_LONG: 'Period long',
    TRADE_SUPPORTS: 'Trade supports',
    SUPPORT2_TL_RATIO: 'S2 TL ratio',
    MULTIPLE_TIMEFRAMES_MODE: 'Multi timeframes mode',
    LOWER_PERIOD_LOW: 'Lower set low period',
    LOWER_PERIOD_MEDIUM: 'Lower set medium period',
    LOWER_PERIOD_HIGH: 'Lower set high period',
    MIDDLE_PERIOD_LOW: 'Regular set low period',
    MIDDLE_PERIOD_MEDIUM: 'Regular set medium period',
    MIDDLE_PERIOD_HIGH: 'Regular set medium period',
    ACCUMULATION_CYCLE: 'Accumulation cycle',
    MTF_TL_RATIO: 'Multi timeframes mode TL ratio',
    PRICE_ACTION_TL_RATIO: 'Price action TL ratio',
    PRICE_ACTION_THRESHOLD: 'Price action threshold',
  },

  // List of parameter titles for use in the strategy wizard, using less complex verbiage (not every item used in wizard)
  titleInWizard: {
    gunthy_wallet: 'Gunthy Wallet',

    IS_MARGIN_STRAT: 'Is Margin Strategy',

    STRATEGY: 'Strategy',

    KUMO_BUY: 'Kumo Buy',
    KIJUN_BUY: 'Kijun Buy',
    TENKAN_BUY: 'Tenkan Buy',
    KUMO_SELL: 'Kumo Sell',
    TENKAN_SELL: 'Tenkan Sell',
    KIJUN_SELL: 'Kijun Sell',

    MERGE_AUTOCONFIG: 'Merge Autoconfig',
    DEPTH_PRESSURE_LEVEL: 'Depth Pressure',
    ROE_CLOSE: 'ROE Close',
    ROE_TRAILING: 'ROE Trailing',
    ROE_LIMIT: 'ROE Limit',
    ROE_SCALPER: 'ROE Scalper',
    ROE_SPREAD: 'ROE Spread',
    PRE_ORDER: 'Pre Order',
    PRE_ORDER_GAP: 'Pre Order Gap',
    MAKER_FEES: 'Maker Fees',
    TAKER_FEES: 'Taker fees',
    MEAN_REVERSION: 'Mean Reversion',

    MARKET_BUY: 'Market Buy',
    MARKET_SELL: 'Market Sell',
    MARKET_CLOSE: 'Market Close',
    MARKET_STOP: 'Market Stop',
    MARKET_RTBUY: 'Market RTBuy',
    MARKET_RTSELL: 'Market RTSell',
    MARKET_BUYBACK: 'Market Buyback',
    MARKET_DU: 'Market DU',
    MARKET_FOK: 'Market FOK',

    TV_LEVERAGE: 'TV Leverage',
    USE_RENKO: 'Use Renko',
    SHORT_LEVEL: 'Short Level',
    LONG_LEVEL: 'Long Level',
    ROE: 'ROE',
    TENKAN_CLOSE: 'Tenkan Close',
    KUMO_CLOSE: 'Kumo Close',
    KIJUN_CLOSE: 'Kijun Close',
    TENKAN_STOP: 'Tenkan Stop',
    KUMO_STOP: 'Kumo Stop',
    KIJUN_STOP: 'Kijun Stop',

    RENKO_PERIOD: 'Renko Period',
    RENKO_BRICK_SIZE: 'Renko Brick Size',
    RENKO_ATR: 'Renko ATR',
    LEVERAGE: 'Leverage',
    ICHIMOKU_PROTECTION: 'Ichimoku Protection',

    XTREND_ENABLED: 'XTrend Enabled',
    NBA: 'Never Buy Above',
    DOUBLE_CHECK_GAIN: 'Enforce profit target',

    //"BAG_BUSTER": "Bag Buster",
    DISPLACEMENT: 'Displacement',
    RT_BUY_UP_LEVEL: 'RT Buy Up Level',

    SL_DISABLE_BUY: 'Disable after stop',
    COUNT_SELL: 'Max number of sell orders',

    BTC_PND_PERIOD: 'BTC PND Period',
    STOCHRSI_ENABLED: 'Stoch RSI',
    STOCHRSI_LENGTH: 'Stoch RSI Length',
    STOCHRSI_BUY_LEVEL: 'Stoch RSI Buy Level',
    STOCHRSI_SELL_LEVEL: 'Stoch RSI Sell Level',
    STOCHRSI_METHOD: 'Stoch RSI Method',

    TG_PL_ONLY: 'TG PL Only',
    RT_ONCE: 'RT Once',
    RT_ONCE_AND_CONTINUE: 'RT Once and Continue',
    RSI_LENGTH: 'RSI Length',
    login: 'Login',
    twoFA: 'Two-Factor Authentication',
    trade: 'Trade',
    error: 'Error',
    warning: 'Warning',
    callback: 'Callback',
    TV_GB: 'TV GB',
    TP_PROFIT_ONLY: 'TP Profit Only',
    TAKE_BUY: 'Take Buy',
    TBUY_RANGE: 'TBuy Range',

    TENKAN_PERIOD: 'Tenkan Period',
    KIJUN_PERIOD: 'Kijun Period',
    SENKOUSPAN_PERIOD: 'Senkouspan Period',

    KEEP_QUOTE: 'Keep Quote',
    TL_PERC: 'Trading Limit Pct',
    TL_ALLIN: 'Trading Limit All-In',

    TG_TEST: 'TG Test',
    TV_MVTS: 'TV MVTS',

    TAKE_PROFIT: 'Take Profit',
    TP_RANGE: 'TP Range',

    EMAx: 'EMAx',
    PP_BUY: 'Buy target price',
    PP_SELL: 'Sell target price',
    BUYLVL: 'Stepgain Buy Lvl',
    BUYLVL1: 'Stepgain Buy Lvl 1',
    BUYLVL2: 'Stepgain Buy Lvl 2',
    BUYLVL3: 'Stepgain Buy Lvl 3',
    SELLLVL: 'Stepgain Sell Lvl',
    SELLLVL1: 'Stepgain Sell Lvl 1',
    SELLLVL2: 'Stepgain Sell Lvl 2',
    SELLLVL3: 'Stepgain Sell Lvl 3',

    ATRX: 'ATRX',
    ATR_PERIOD: 'ATR Period',
    RSI_METHOD: 'RSI Method',
    STOCH_METHOD: 'STOCH Method',
    KUMO_SENTIMENTS: 'Kumo Sentiments',
    TG_ORDER_TIMEOUT: 'Telegram Order Timeout',
    CANDLES_LENGTH: 'Candles Length',
    EMA_LENGTH: 'EMA Length',
    MFI_LENGTH: 'MFI Length',
    RT_SELL_UP: 'RT Sell Up',
    RT_TREND_ENABLED: 'RT Trend Enabled',
    RT_BUY_LEVEL: 'RT Buy Level',
    SELL_METHOD: 'Sell Method',
    BUY_METHOD: 'Buy Method',
    BEST_CURRENCIES: 'Best Currencies',
    MINIMUM_VOLUME_GOOD_CURRENCY: 'Min Volume Good Currency',
    MINIMUM_VARIATION_SUGGEST_TRADE: 'Min Variation Suggest Trade',
    enabled: 'Enabled',
    authorized_froms: 'Authorized Froms',
    wh_port: 'Webhooks port',
    wh_passphrase: 'Webhooks passphrase',
    user: 'User',
    password: 'Password',
    host: 'Host',
    tls: 'TLS',
    port: 'Port',
    clientport: 'Client Port',
    hostname: 'Host Name',
    TELEGRAM_ENABLED: 'Enabled',
    TELEGRAM_NICK: 'Bot Nickname',
    TOKEN: 'Token',
    chat_id: 'Chat ID',
    TV_GAIN: 'Gain',
    TV_TRADING_LIMIT_BUY: 'Trading Limit Buy',
    TV_TRADING_LIMIT_BUY_PYRAMID: 'Trading Limit Buy Pyramid',
    TV_PYRAMID: 'Pyramid',
    TV_TRADING_LIMIT_SELL: 'Trading Limit Sell',
    TV_PROTECTION: 'Protection',
    TV_TRADING_LIMIT_CAP: 'Trading Limit Cap',
    TV_STOPLOSS_PERCENTAGE: 'Stoploss Percentage',
    TV_TRADING_LIMIT_ALLIN: 'Trading Limit All-In',
    RETRY_TV_ORDER: 'Retry Order',
    withdraw_address: 'Withdraw Address',
    withdraw_threshold: 'Withdraw Threshold',
    CANCEL_ORDERS_ENABLED: 'Cancel Orders Enabled',
    CANCEL_ORDERS_CYCLE_CAP: 'Cancel Orders Cycle Cap',
    CANCEL_ONCAP: 'Cancel Orders Oncap',
    timeout_sell: 'Timeout Sell',
    timeout_buy: 'Timeout Buy',
    period_storage_ticker: 'Period Storage Ticker',
    interval_ticker_update: 'Interval Ticker Update',
    BOT_CCLEAN: 'Bot CClean',
    BOT_DELAY: 'Bot Delay',
    WATCH_MODE: 'Watch Mode',
    MULTIPLE_BASE: 'Multiple base',
    debug: 'Debug',
    VERBOSE: 'Verbose',
    RESERVE_PILE_UP: 'Reserve Pile Up',
    IGNORE_TRADES_BEFORE: 'Ignore Trades Before',
    LIQUIDITY: 'Liquidity provider',
    LIQUIDITY_TAKER: 'Liquidity taker role',
    MAX_INVESTMENT: 'Max invested base',
    NASH_LEAGUE: 'Nash League',
    NASH_TIMER: 'Nash League Trades Timer',
    TSSL_TARGET_ONLY: 'TSSL Target Only',
    SELL_RANGE: 'Sell Range',
    ADX_ENABLED: 'ADX Enabled',
    ADX_LEVEL: 'ADX Level',
    DI_PERIOD: 'DI Period',
    EMASPREAD: 'EMA Spread',
    BUY_RANGE: 'Buy Range',
    RT_GAIN: 'RT Gain',
    BUY_ENABLED: 'Allow buy orders',
    BUY_LEVEL: 'Buy Level',
    SELL_ENABLED: 'Allow sell orders',
    GAIN: 'Profit target',
    TRADING_FEES: 'Trading Fees',
    TRADING_LIMIT: 'Investment per order',
    FUNDS_RESERVE: 'Funds Reserve',
    PERIOD: 'Chart period',
    EMA1: 'Medium EMA',
    EMA2: 'Fast EMA',
    EMA3: 'Long EMA',
    HIGH_BB: 'High BB',
    LOW_BB: 'Low BB',
    STDV: 'Standard Deviation',
    SMAPERIOD: 'SMA Period',
    SLOW_SMA: 'Slow SMA',
    FAST_SMA: 'Fast SMA',
    MACD_SHORT: 'MACD Short',
    MACD_LONG: 'MACD Long',
    MACD_SIGNAL: 'MACD Signal',
    STOCH_ENABLED: 'Stoch Enabled',
    STOCH_BUY_LEVEL: 'Stoch Buy Level',
    STOCH_SELL_LEVEL: 'Stoch Sell Level',
    STOCH_K: 'Stoch K',
    SLOW_STOCH_K: 'Slow Stoch K',
    STOCH_D: 'Stoch D',
    RSI_BUY_ENABLED: 'RSI Buy Enabled',
    RSI_SELL_ENABLED: 'RSI Sell Enabled',
    RSI_BUY_LEVEL: 'RSI Buy Level',
    RSI_SELL_LEVEL: 'RSI Sell Level',
    MFI_ENABLED: 'MFI Enabled',
    MFI_SELL_LEVEL: 'MFI Sell Level',
    MFI_BUY_LEVEL: 'MFI Buy Level',
    BTC_PND_PROTECTION: 'BTC PND Protection',
    BTC_MONEY_FLOW: 'BTC Money Flow',
    DOUBLE_UP: 'Use DCA',
    DOUBLE_UP_CAP: 'DCA ratio',
    DU_CAP_COUNT: 'Max DCA Trades',
    DU_METHOD: 'DU Method',
    DU_BUYDOWN: 'DCA Buydown',
    RSI_DU_BUY: 'DU RSI Buy',
    RT_ENABLED: 'RT Enabled',
    RT_MAXBAG_PROTECTION: 'RT Max Bag Protection',
    TM_RT_SELL: 'Trail Me RT Sell',
    TRAIL_ME_RT_SELL_RANGE: 'Trail Me RT Sell Range',
    TRAIL_ME_SELL: 'Trail Me Sell',
    TRAIL_ME_BUY: 'Trail Me Buy',
    TRAIL_ME_RT: 'Trail Me RT Buy',
    TRAIL_ME_DU: 'Trail Me DU',
    TRAIL_ME_SELL_RANGE: 'Trail Me Sell Range',
    TRAIL_ME_BUY_RANGE: 'Trail Me Buy Range',
    PANIC_SELL: 'Panic Sell',
    STOP_LIMIT: 'Stop Limit',
    MIN_VOLUME_TO_BUY: 'Min Volume to Buy',
    MIN_VOLUME_TO_SELL: 'Min Volume to Sell',
    TRADES_TIMEOUT: 'Trades Timeout',
    TG_AUTOCONFIG: 'Autoconfig alerts',
    OLD_TELEGRAM: 'bitRage alerts',
    BR_TOKEN: 'Token for bitRage & Autoconfig alerts',
    admin_id: 'Admin ID',
    TV_CLOSE_ALL: 'Close complete position',
    TV_LENDING: 'Max lending rate',
    SINGLE_BUY: 'Single Buy',
    MAX_BUY_COUNT: 'Max buy count',
    GRID_MULTIPLIER: 'Grid multiplier',
    STOP_AFTER_SELL: 'Stop after next sell',
    AUTO_GAIN: 'Auto gain target',
    TRAILING_MULTIPLIER: 'Trailing range multiplier',
    START_CONT_TRADING: 'Start continuous trading',
    TL_MULTIPLIER: 'Trading limit multiplier',
    CT_TL_MULTIPLIER: 'CT TL multiplier',
  },
  autoconfigTooltips: {
    enabled: 'Use this job',
    schedule:
      'How often this job runs \n\nAlternatively, you can use cron-style notation like */6 * * * *, with an optional 6th place for seconds',
    type: 'The job type defines the possible output and filter options, can not be changed after creating a job',
    snapshots: 'Number of ticker snapshots kept \n\nSnapshots are collected according to job schedule',
    history:
      'Number of history ticker snapshots kept \n\nThe history interval defines how often a new history snapshot gets saved',
    historyInterval: 'Time between saving history ticker snapshots',
    debug: 'Get detailed logs for each filter in the console logs \n\nDisable for faster job execution',
    exchange: 'Sets the exchange the job works on',
    include:
      'Filters for including pairs, as a comma separated list \n\nFor example: "BTC-" includes all pairs beginning with BTC-, "BTC" includes all pairs that contain BTC',
    exclude:
      'Filters for excluding pairs, as a comma separated list \n\nFor example: "BTC-" excludes all pairs beginning with BTC-, "BTC" excludes all pairs that contain BTC',
    maxPairs: 'AutoConfig will not add more pairs for an exchange than set here',
    noBag: "Don't use this job for pairs with a quote balance big enough to sell",
    bag: 'Use this job only for pairs with a quote balance big enough to sell',
    removeDisabled: 'Remove all disabled pairs when at least one pair passes all filters in this job',
    notRemoveBefore:
      'Only remove pairs when they have been added at least x minutes ago, works for automatically added pairs only \n\nValue in minutes',
    noCrossOver: 'Prevent adding pairs with base/quote crossover, like BTC-ETH and ETH-XRM',
    removeBase: 'Remove all pairs with this base currency',
    baseFrom: 'Base currency to hedge away from',
    baseTo: 'Base currency to hedge to',
    hedgePair: 'Valid trading pair used for hedging, for example USDT-BTC',
    filteredQuote: 'List of quote coins to filter in bitRage, as a comma separated list',
    filteredPair: 'List of pairs to filter in bitRage, as a comma separated list',
    filteredBase: 'List of base coins to filter in bitRage, as a comma separated list',
    overrides: 'List of pair overrides to be set',
    strategy: 'Name of the strategy to assign to pairs passing all filters',
    setITB:
      'Set an Ignore Trades Before overrides when the job leads to config changes, with the current time as value',
    muteTG: 'Disable AutoConfig Telegram notifications for this job',
    clearOverrides: 'Remove all existing overrides before placing new ones',
    historyToggle:
      'Use a secondary ticker snapshot cache to store older ticker data, collected less frequently than the job schedule',
    delay: 'Change the exchange delay \n\nValue represents time in seconds',
  },
  buyDescription: {
    bb: 'Buy when price is below the lower Bollinger Band and below EMA. Minimum distance from lower band and EMA are configurable.',
    emotionless: 'Pre tuned buy method. Only configurable by setting buy level at a desired percentage below EMA.',
    gain: 'Buy when price is below EMA. Minimum distance from lowest EMA is configurable.',
    ichimoku:
      'A buy order is placed when the current candle goes completely below Kumo, Tenkan-Sen or Kijun-Sen. You can configure which line should be used for buy orders.',
    pp: 'Buy when price drops below an absolute value.',
    tsa: 'Buy when a time series analysis indicates price is likely to go up.',
    tssl: 'Buy when buy trailing finishes below EMA. Trailing range and minimum distance below EMA are configurable.',
    stepgain:
      'Buy when the trend reverses while price is in a defined range below EMA. Range below EMA is configurable',
    ADX: 'Buy when ADX has a minimum defined trend value, and di+ is above di-',
    ATRTS: 'Use ATR to calculate trailing stops to buy when volatility increases and crosses the trailing stop.',
    BBTA: 'A buy order is placed when price moves under the lower Bollinger Band, then crosses over it.',
    EMASPREAD:
      'Buy when the spread between fast and slow EMA decreases. Additionally a minimum difference between both EMAs must exist.',
    MACD: 'Buy when MACD crosses over the signal line. This strategy can buy multiple times.',
    MACDH: 'Buy when the MACD Histogram crosses over 0. This strategy can buy multiple times.',
    SMACROSS: 'Buy when fast SMA crosses over slow SMA. This strategy can buy multiple times.',
    spotGrid:
      'Always in position strategy for spot trading, with completely dynamic trailing buy targets based on the current support and resistance levels of any market. \nThe first few buy trades are fairly aggressive, if the market goes down it will automatically turn into a strategy that slowly accumulates at ever increasing steps. Uses market orders only.\nCan only be combined with spotGrid as sell method.',
    spotGridAdvanced:
      'Always in position strategy for spot trading, with completely dynamic trailing buy targets based on the current support and resistance levels of any market. \nThe first few buy trades are fairly aggressive, if the market goes down it will automatically turn into a strategy that slowly accumulates at ever increasing steps. Uses market orders only.\nCan only be combined with spotGridAdvanced as sell method.',
  },
  sellDescription: {
    bb: 'Sell when price reaches a defined distance from the upper Bollinger Band and the minimum profit target is reached.',
    emotionless: 'Pre tuned sell method. Only configurable by setting a minimum profit target.',
    gain: 'Sell when your profit target is reached.',
    ichimoku:
      'A sell order is placed when the current candle goes completely above Kumo, Tenkan-Sen or Kijun-Sen. You can configure which line should be used for sell orders.',
    pp: 'Sell when price reaches an absolute value.',
    tsa: 'Sell when a time series analysis indicates price is likely to go down.',
    tssl: 'Sell when profit target is reached and sell trailing finishes.',
    stepgain: 'Sell when trend reverses within a defined profit range.',
    ADX: 'Sell when ADX has a minimum defined trend value, and di- is above di+',
    ATRTS: 'Use ATR to calculate trailing stops sell when volatility decreases and crosses the trailing stop.',
    BBTA: 'A sell order is placed when price moves over the upper Bollinger Band, then moves below it.',
    EMASPREAD:
      'Sell when the spread between slow and fast EMA decreases. Additionally a minimum difference between both EMAs must exist.',
    MACD: 'Sell when MACD moves below the signal line.',
    MACDH: 'Sell when the MACD Histogram moves below 0.',
    SMACROSS: 'Sell when fast SMA moves below slow SMA.',
    spotGrid:
      'Sell with an automatic trailing stop. Uses market orders only. \nCan only be combined with spotGrid as buy method. ',
    spotGridAdvanced:
      'Always in position strategy for spot trading, with completely dynamic trailing buy targets based on the current support and resistance levels of any market. \nThe first few buy trades are fairly aggressive, if the market goes down it will automatically turn into a strategy that slowly accumulates at ever increasing steps. Uses market orders only.\nCan only be combined with spotGridAdvanced as buy method.',
  },
  indicatorDescription: 'Settings to customize how indicators are configured for the selected buy and sell method.',
  dcaDescription: 'Average down assets with Dollar Cost Averaging.',
  autoconfigFilterTooltips: {
    minPrice: ['Minimum price, in base currency'],
    maxPrice: ['Maximum price, in base currency'],
    custom: ['Custom expression. Filter passes when expression returns true'],
    minPricePctChangeInterval: [
      'Minimum price change of last price vs average price in interval \n\nValue represents a percentage',
    ],
    maxPricePctChangeInterval: [
      'Maximum price change of last price vs average price in interval \n\nValue represents a percentage',
    ],
    minVolumePctChangeInterval: [
      'Minimum 24h volume change of last value vs average volume in interval \n\nValue represents a percentage',
    ],
    maxVolumePctChangeInterval: [
      'Maximum 24h volume change of last value vs average volume in interval \n\nValue represents a percentage',
    ],
    minVolume24h: ['Minimum 24h volume, in base currency'],
    maxVolume24h: ['Maximum 24h volume, in base currency'],
    minVolatilityPct24h: ['Minimum 24h change \n\nValue represents a percentage'],
    maxVolatilityPct24h: ['Maximum 24h change \n\nValue represents a percentage'],
    minSpreadPct: ['Minimum spread between best bid and ask \n\nValue represents a percentage'],
    maxSpreadPct: ['Maximum spread between best bid and ask \n\nValue represents a percentage'],
    minSlopePctInterval: [
      'Minimum linear regression slope \n\nExpressed as percentage from last price \n\nValue represents a percentage',
    ],
    maxSlopePctInterval: [
      'Maximum linear regression slope \n\nExpressed as percentage from last price \n\nValue represents a percentage',
    ],
    minStandardDevPctInterval: [
      'Minimum standard deviation \n\nExpressed as percentage from last price \n\nValue represents a percentage',
    ],
    maxStandardDevPctInterval: [
      'Maximum standard deviation \n\nExpressed as percentage from last price \n\nValue represents a percentage',
    ],
    belowMedianVolume: [],
    aboveMedianVolume: [],
    minVolumeRank: ['Minimum volume rank'],
    maxVolumeRank: ['Maximum volume rank'],
    bullishStandardDeviationChannel: [
      'Target from lower standard deviation band \n\nRange 0 = same price as lower band \n\nRange 100 = same price as upper band',
    ],
    bearishStandardDeviationChannel: [
      'Target from upper standard deviation band \n\nRange 0 = same price as upper band \n\nRange 100 = same price as lower band',
    ],
    linearRegressionChannel: [
      'Target from lower linear regression channel band \n\nRange 0 = same price as lower band \n\nRange 100 = same price as upper band',
    ],
    allowsHedging: ['Base of pair used for hedging', 'Quote of pair used for hedging'],
    buyTrailing: [
      'Minimum distance below EMA of all snapshots \n\nValue represents a percentage',
      'Percentage of price to use as trailing range \n\nValue represents a percentage',
    ],
    volumeTrailing: [
      'Minimum distance below EMA of all snapshots \n\nValue represents a percentage',
      'Percentage of 24h volume to use as trailing range \n\nValue represents a percentage',
    ],
    slopeTrailing: [
      'Minimum distance below EMA of all snapshots \n\nValue represents a percentage',
      'Percentage of slope to use as trailing range \n\nValue represents a percentage',
    ],
    minPriceHistory: ['Minimum price at the time of defined history source, in base currency'],
    maxPriceHistory: ['Maximum price at the time of defined history source, in base currency'],
    maxVolumeRankHistory: ['Maximum volume rank at the time of defined history source'],
    minVolumeRankHistory: ['Minimum volume rank at the time of defined history source'],
    minPricePctChangeIntervalHistory: [
      'Minimum price change of history source price vs average price in history \n\nValue represents a percentage',
    ],
    maxPricePctChangeIntervalHistory: [
      'Maximum price change of history source price vs average price in history \n\nValue represents a percentage',
    ],
    minVolumePctChangeIntervalHistory: [
      'Minimum 24h volume change of history source price vs average volume in history \n\nValue represents a percentage',
    ],
    maxVolumePctChangeIntervalHistory: [
      'Maximum 24h volume change of history source price vs average volume in history \n\nValue represents a percentage',
    ],
    minVolume24hHistory: ['Minimum 24h volume at the time of defined history source, in base currency'],
    maxVolume24hHistory: ['Maximum 24h volume at the time of defined history source, in base currency'],
    minVolatilityPct24hHistory: [
      'Minimum 24h change at the time of defined history source \n\nValue represents a percentage',
    ],
    maxVolatilityPct24hHistory: [
      'Maximum 24h change at the time of defined history source \n\nValue represents a percentage',
    ],
    minSpreadPctHistory: [
      'Minimum spread between best bid and ask at the time of defined history source \n\nValue represents a percentage',
    ],
    maxSpreadPctHistory: [
      'Maximum spread between best bid and ask at the time of defined history source \n\nValue represents a percentage',
    ],
    minSlopePctIntervalHistory: [
      'Minimum linear regression slope of history data \n\nExpressed as percentage from the price at defined history source \n\nValue represents a percentage',
    ],
    maxSlopePctIntervalHistory: [
      'Maximum linear regression slope of history data \n\nExpressed as percentage from the price at defined history source \n\nValue represents a percentage',
    ],
    minStandardDevPctIntervalHistory: [
      'Minimum standard deviation of history data \n\nExpressed as percentage from the price at defined history source \n\nValue represents a percentage',
    ],
    maxStandardDevPctIntervalHistory: [
      'Maximum standard deviation of history data \n\nExpressed as percentage from the price at defined history source \n\nValue represents a percentage',
    ],
    bearishStandardDeviationChannelHistory: [
      'Target from lower standard deviation band of history data \n\nRange 0 = same price as lower band \n\nRange 100 = same price as upper band',
    ],
    bullishStandardDeviationChannelHistory: [
      'Target from upper standard deviation band of history data \n\nRange 0 = same price as upper band \n\nRange 100 = same price as lower band',
    ],
    exact: [
      'Name of key from pair state to filter on \n\nThe dropdown shows often used items, custom input is possible',
      'Exact value to match, depending on the chosen label this value can be a number, string or boolean',
    ],
    biggerThan: [
      'Name of key from pair state to filter on \n\nThe dropdown shows often used items, custom input is possible',
      'Minimum target  \n\nValue must be a number',
    ],
    smallerThan: [
      'Name of key from pair state to filter on \n\nThe dropdown shows often used items, custom input is possible',
      'Maximum target  \n\nValue must be a number',
    ],
    pairVariableBiggerThan: ['Exact name of variable', 'Minimum target  \n\nValue must be a number'],
    pairVariableSmallerThan: ['Exact name of variable', 'Maximum target  \n\nValue must be a number'],
    variableBiggerThan: ['Exact name of variable', 'Minimum target  \n\nValue must be a number'],
    variableSmallerThan: ['Exact name of variable', 'Maximum target  \n\nValue must be a number'],
    compareBigger: [
      'Value of this item must be bigger \n\nEnter the name of the key from pair state to filter on \n\nThe dropdown shows often used items, custom input is possible',
      'Value of this item must be smaller \n\nEnter the name of the key from pair state to filter on \n\nThe dropdown shows often used items, custom input is possible',
    ],
    compareSmaller: [
      'Value of this item must be smaller \n\nEnter the name of the key from pair state to filter on \n\nThe dropdown shows often used items, custom input is possible',
      'Value of this item must be bigger \n\nEnter the name of the key from pair state to filter on \n\nThe dropdown shows often used items, custom input is possible',
    ],
    differenceBigger: [
      'Value of this item must be bigger \n\nEnter the name of the key from pair state to filter on \n\nThe dropdown shows often used items, custom input is possible',
      'Value of this item must be smaller \n\nEnter the name of the key from pair state to filter on \n\nThe dropdown shows often used items, custom input is possible',
      'Minimum delta between label 1 and label 2 \n\nValue represents a percentage',
    ],
    differenceSmaller: [
      'Value of this item must be smaller \n\nEnter the name of the key from pair state to filter on \n\nThe dropdown shows often used items, custom input is possible',
      'Value of this item must be bigger \n\nEnter the name of the key from pair state to filter on \n\nThe dropdown shows often used items, custom input is possible',
      'Minimum delta between label 1 and label 2 \n\nValue represents a percentage',
    ],
    variableExact: ['Exact name of variable to match', 'Exact value of variable'],
    variableNotExist: ['Exact name of variable'],
    pairVariableExact: ['Exact name of pair specific variable to match', 'Exact value of pair specific variable'],
    strategyName: ['Exact strategy name'],
    minTimeInConfig: ['Minimum time since AutoConfig added a trading pair \n\nValue represents time in minutes'],
    maxTimeInConfig: ['Maximum time since AutoConfig added a trading pair \n\nValue represents time in minutes'],
    maxSameOrder: ['Maximum number of most recent orders to NOT have the defined type', 'Order type to search for'],
    minTimeSinceOrder: [
      'Minimum time since specified order type, for the same pair \n\nValue represents time in minutes',
      'Order type to search for',
    ],
    maxTimeSinceOrder: [
      'Maximum time since specified order type, for the same pair \n\nValue represents time in minutes',
      'Order type to search for',
    ],
    name: ['Unique name for this filter \n\nCannot be changed after saving'],
    lastSnapshots: ['Number of most recent ticker snapshots to use'],
    useLastSnapshots: ['Use a subset of collected ticker data for this filter'],
    historySource: [
      'History source target \n\nValue must be numerical and represents a specific value from history data \n\n0 is equal to the oldest data',
    ],
    newFilter: ['Select a filter type'],
    filterSet: [
      'Select a filter set for creating a new filter in, or to select existing filters from \n\nA job will lead to output when all filters in at least one filterset are passed',
    ],
    editFilter: ['Select an existing filter to edit'],
    select: ['This is a placeholder text for when no filter type is selected'],
    '': ['This is a placeholder text for when no filter type is selected'],
  },
  spotStrategyLinks: {
    bb: 'https://wiki.gunthy.org/trading-strategy-options/regular-strategies-spot-trading/bollinger-bands',
    emotionless: 'https://wiki.gunthy.org/trading-strategy-options/regular-strategies-spot-trading/emotionless',
    gain: 'https://wiki.gunthy.org/trading-strategy-options/regular-strategies-spot-trading/gain',
    ichimoku: 'https://wiki.gunthy.org/trading-strategy-options/regular-strategies-spot-trading/ichimoku',
    pp: 'https://wiki.gunthy.org/trading-strategy-options/regular-strategies-spot-trading/pingpong',
    tsa: 'https://wiki.gunthy.org/trading-strategy-options/regular-strategies-spot-trading/time-series-analysis',
    tssl: 'https://wiki.gunthy.org/trading-strategy-options/regular-strategies-spot-trading/tssl-trailing-stop-stop-limit',
    stepgain: 'https://wiki.gunthy.org/trading-strategy-options/regular-strategies-spot-trading/stepgain',
    ADX: 'https://wiki.gunthy.org/trading-strategy-options/regular-strategies-spot-trading/adx',
    ATRTS: 'https://wiki.gunthy.org/trading-strategy-options/regular-strategies-spot-trading/atrts',
    BBTA: 'https://wiki.gunthy.org/trading-strategy-options/regular-strategies-spot-trading/bollinger-bands-ta',
    EMASPREAD: 'https://wiki.gunthy.org/trading-strategy-options/regular-strategies-spot-trading/ema-spread',
    MACD: 'https://wiki.gunthy.org/trading-strategy-options/regular-strategies-spot-trading/macd',
    MACDH: 'https://wiki.gunthy.org/trading-strategy-options/regular-strategies-spot-trading/macdh',
    SMACROSS: 'https://wiki.gunthy.org/trading-strategy-options/regular-strategies-spot-trading/sma-cross',
    dca: 'https://wiki.gunthy.org/trading-strategy-options/dollar-cost-avg-dca',
    spotGrid: 'https://wiki.gunthy.org/trading-strategy-options/regular-strategies-spot-trading/spotgrid',
    stepGrid: 'https://wiki.gunthy.org/trading-strategy-options/regular-strategies-spot-trading/stepgrid',
    spotGridAdvanced:
      'https://wiki.gunthy.org/trading-strategy-options/regular-strategies-spot-trading/spotgrid-advanced',
  },

  // Readable titles for autoconfig parameters
  autoconfigTitles: {
    enabled: 'Enabled',
    schedule: 'Schedule',
    type: 'Type',
    snapshots: 'Ticker snapshots',
    history: 'History snapshots',
    historyInterval: 'History interval',
    debug: 'Debug',
    exchange: 'Exchange',
    include: 'Include',
    exclude: 'Exclude',
    maxPairs: 'Max pairs',
    noBag: 'Not for bags',
    bag: 'Only for bags',
    removeDisabled: 'Remove disabled pairs',
    notRemoveBefore: "Don't remove before",
    noCrossOver: 'Prevent crossover',
    removeBase: 'Base to remove',
    hedgeTo: 'Hedge to',
    baseFrom: 'Base from',
    baseTo: 'Base to',
    hedgePair: 'Hedge pair',
    filteredQuote: 'Filtered quote',
    filteredPair: 'Filtered pairs',
    filteredBase: 'Filtered base',
    overrides: 'Overrides',
    strategy: 'Strategy',
    setITB: 'Set ITB',
    muteTG: 'Mute Telegram notifications',
    clearOverrides: 'Clear overrides',
    delay: 'Exchange delay',
    brStrat: 'bitRage strategy name',
  },

  // Tab description texts
  tabDescriptions: {
    Tournament:
      'Join exclusive trading tournaments for Gunbot owners only. \nClick the question mark icon to get details about the current or upcoming tournament',
    'Trading Pairs': 'Add trading pairs and assign the strategy you want to run',
    'Override Settings': 'Pair specific strategy settings',
    'Modify Pairs': 'Change settings for existing trading pairs',
    'Filter Rules': 'Add filters to select trading pairs',
    'Create new trading strategy':
      'Create a new trading strategy. Strategies can be assigned to one or more trading pairs',
    Buy: 'Set the primary buy trigger for your strategy',
    Sell: 'Set the primary sell trigger for your strategy',
    Balance:
      'Configure how much the strategy is allowed to spend per trade. \nMake sure to set the minimums correctly for the pairs you want to run the strategy on',
    Indicator: 'Edit the main indicators used in the buy or sell method, or enable additional confirming indicators',
    'Dollar Cost Avg': 'With Double Up you can average down losing trades, to reduce the average price per unit',
    'Reversal Trading':
      "With RT you can accumulate an asset below it's break even price without investing additional funds",
    TrailMe: 'Add additional price trailing for selected order types',
    Margin: 'Settings specific to margin trading on supported exchanges',
    Misc: 'Various setting to change the order type, frequency and more',
    'Nash League': 'Settings to participate to Nash.io League Tournament',
    Bot: 'Global bot settings. Affects every trading pair and trading strategy',
    'Cancel Orders': 'Global settings for cancel order behavior. \nAffects every trading pair',
    Advanced: 'Various settings for advanced users',
    Notifications: 'Set which types of notifications you want to receive in this browser interface',
    'Step 1: enter your Gunthy wallet address':
      'Use the registered ERC-20 wallet address in which your Gunthy tokens are stored',
    'Step 2: add API keys for registered exchanges':
      "Connect to the exchange(s) that you've already registered. \nYou can use the same registered API key for both the master and trading key",
    Exchanges:
      'Connect a new registered exchange API key. \nMake sure to only use master keys that are already registered for your license. \nIn case you use a separate trading key, make sure it exists on the same exchange account as the registered key',
    'Connected Exchanges': "Edit or remove API keys for exchanges you've already connected",
    Telegram: 'Settings to control the built in Telegram bot, used for trade notifications and more',
    'Alert execution':
      'Settings to control how incoming email alerts are handled. \nMake sure to enable the email listener to start receiving alerts',
    'Email listener':
      'Connect your IMAP compatible mail box to be able to receive alerts. \nListening starts immediately once you enable it',
    'User Variables':
      'Variables are set when one pair passes all filters in a job. You can use them as filter criteria. Pair variables are saved and used for individual pairs',
    Webhooks: 'Receive alerts from TradingView webhooks',
    Filters:
      'All filters in a filterset must be passed to generate an output. When multiple filter sets exist in one job, output is generated when at least one pair passes all filters in one set',
    Pairs: 'Settings to specify which pairs on which exchange are affected by this job.',
    General: 'Configure how frequent your job runs, and more general settings',
    'Edit License': 'Self manage your registered API keys',
    'Custom strategy': 'Configure which strategy filename contains your code, and general settings that affect the GUI',
    Data: 'Configure the inputs for standard indicators. These settings do not trigger any orders, they only influence how indicators are calculated. You can use these indicators in any custom strategy',
    Rename:
      'Change your strategy name if needed. \nMake sure to also update the assigned strategy for pairs, the bot will error when a pair has a strategy assigned that no longer exists under the same name',
    'GUI Authentication': 'Change the security settings for the Gunbot interface',
    'Gunthy wallet': 'Enter the registered ERC-20 wallet address that holds your Gunthy tokens',
    'Automate settings changes with AutoConfig':
      'Create scheduled tasks to automate settings changes based on custom filter criteria',
    'Base settings':
      'Basic settings to control how Market Maker opens and adds to positions. The default behavior is that maker orders are placed directly around bid/ask. \n\nMarket Maker is only available to eligible users: Top 10 token rank or better',
    'Close Position': 'Close positions directly when reaching ROE, or trail for higher profits',
    'Risk Management':
      'Manage your risks with these options and reduce positions when they get too heavy. Beware that all hard reduction options cause an immediate loss. \n To prevent unwanted behavior: make sure to set everything in a way that fits your wallet size!',
    'Strategy variants':
      'These options fundamentally change how Market Maker enters posititions and when DCA orders are placed. \nPick any one strategy variant: you cannot combine Grid, Fibonacci and/or Support / Resistance',
    Spot: 'Options specific to spot trading with Market Maker',
    Other: 'Misc and indicator settings used by the selected market maker strategy variant',
    Bitrage:
      'Basic settings to control how bitRage works and which strategy is used to handle bags. \n\nMake sure to also set your balance and filter settings on the profile page, for each exchange you use bitRage on. \nIt is recommended to have only one bitRage strategy. The last one created automatically sets the bitRage strategy name used in the autopairs functionality \n\nbitRage is only available to eligible users: Top 20 token rank or better',
    Hedging: 'Use hedging to switch between accumulating USDT and BTC, depending on the direction of the market',
    Basic:
      'All essential settings for this strategy. This strategy is a bit different, common settings like confirming indicator have no role at all, there is no stop limit. \nIf market goes up, it rides the trend. If market goes down, it accumulates in ever increasing steps',
    'Advanced ':
      'This strategy was developed for 15m candles with an SMA period of 50 to calculate support and resistance levels. \nTrailing limits are dynamic, optionally you can use an automatic gain target',
    'Basic settings':
      'Configure how much the strategy is allowed to spend per trade. Max buy count it set very high intentionally, to never stop trading.\nMake sure to set min sell volume correctly for the pairs you want to run the strategy on',
    'Step settings':
      'This strategy buys each step down, and sells each step up. Above break even it closes a bag in several steps. Step size is automatic by default, but you can customize it.',
  },

  // Tab descriptions for Autoconfig output
  tabDescriptionsAutoconfigOutput: {
    addPairs:
      'Set the strategy name for pairs added by this job. Optionally you can also set overrides for newly added pairs.',
    removePairs: 'This job type removes pairs, there are no output settings needed.',
    removePairs2: 'This job type removes pairs, there are no output settings needed.',
    changeStrategy: 'Define the strategy to be assigned to pairs added by this job.',
    changeStrategy2: 'Define the strategy to be assigned to pairs added by this job.',
    manageOverrides: 'Set which overrides are used for pairs that pass all filters.',
    changeDelay: 'Change the exchange delay when at least one pair passes all filters.',
    manageBotSettings: 'Define which bot settings to change when at least one pair passes all filters.',
    hedgeGB: 'This job type starts hedging when one pair passes all filters, using the pair settings.',
    hedgeGB2: 'This job type starts hedging when one pair passes all filters, using the pair settings.',
    hedge:
      'This job type starts hedging when one pair passes all filters. Optionally you can update the bitRage filters when this happens.',
    filteredQuote:
      'This job type automatically fills the bitRage filteredQuote list with quote coins that passed all filters. There are no output settings needed.',
    collectData: '',
    backtesting: '',
  },

  // External links, placed tabs with specified title
  tabDescriptionLinks: {
    Tournament: 'https://wiki.gunthy.org/setup-and-general-settings/profile-settings/tournament',
    'Trading Pairs':
      'https://wiki.gunthy.org/how-to-work-with-gunbot/editing-strategies-and-pairs/trading-pairs#add-trading-pairs',
    'Override Settings':
      'https://wiki.gunthy.org/how-to-work-with-gunbot/editing-strategies-and-pairs/trading-pairs#override-settings',
    'Modify Pairs':
      'https://wiki.gunthy.org/how-to-work-with-gunbot/editing-strategies-and-pairs/trading-pairs#override-settings',
    'Create new trading strategy':
      'https://wiki.gunthy.org/how-to-work-with-gunbot/editing-strategies-and-pairs/strategy-editor',
    Buy: 'https://wiki.gunthy.org/trading-strategy-options/about-gunbot-strategies/trading-methods#available-buy-and-sell-methods',
    Sell: 'https://wiki.gunthy.org/trading-strategy-options/about-gunbot-strategies/trading-methods#available-buy-and-sell-methods',
    Balance: 'https://wiki.gunthy.org/how-to-work-with-gunbot/basic-workings/balance-settings',
    Indicator: 'https://wiki.gunthy.org/trading-strategy-options/confirming-indicators',
    'Dollar Cost Avg': 'https://wiki.gunthy.org/trading-strategy-options/dollar-cost-avg-dca',
    'Reversal Trading': 'https://wiki.gunthy.org/trading-strategy-options/reversal-trading-rt',
    TrailMe: 'https://wiki.gunthy.org/trading-strategy-options/trailme',
    Margin: 'https://wiki.gunthy.org/trading-strategy-options/margin-trading-strategies',
    Misc: 'https://wiki.gunthy.org/trading-strategy-options/misc-settings',
    'Nash League': 'https://app.nash.io/trade/league/squad/b172e8a2-2f18-4985-8cb7-59de6b6e80de',
    Bot: 'https://wiki.gunthy.org/setup-and-general-settings/global-settings/bot-settings',
    'Cancel Orders': 'https://wiki.gunthy.org/setup-and-general-settings/global-settings/cancel-orders',
    Advanced: 'https://wiki.gunthy.org/setup-and-general-settings/global-settings/advanced',
    Notifications: 'https://wiki.gunthy.org/setup-and-general-settings/preferences/gui-notifications',
    'Step 1: enter your Gunthy wallet address':
      'https://wiki.gunthy.org/setup-and-general-settings/exchange-and-license-settings/gunthy-wallet/how-to-create-a-wallet',
    'Step 2: add API keys for registered exchanges':
      'https://wiki.gunthy.org/setup-and-general-settings/exchange-and-license-settings/connect-exchange',
    Exchanges: 'https://wiki.gunthy.org/setup-and-general-settings/profile-settings/connect-exchange',
    'Gunthy wallet': 'https://wiki.gunthy.org/setup-and-general-settings/profile-settings/gunthy-wallet',
    'Update Registered Gunthy Wallet': 'https://wiki.gunthy.org/',
    'GUI Authentication': 'https://wiki.gunthy.org/setup-and-general-settings/profile-settings/gui-authentication',
    'Edit License': 'https://wiki.gunthy.org/setup-and-general-settings/profile-settings/edit-license',
    Telegram: 'https://wiki.gunthy.org/setup-and-general-settings/profile-settings/telegram-notifications',
    'Email listener': 'https://wiki.gunthy.org/how-to-work-with-gunbot/extras/tradingview-add-on/imap-listener',
    Webhooks: 'https://wiki.gunthy.org/how-to-work-with-gunbot/extras/tradingview-add-on/webhooks',
    'Alert execution': 'https://wiki.gunthy.org/how-to-work-with-gunbot/extras/tradingview-add-on',
    'Automate settings changes with AutoConfig': 'https://wiki.gunthy.org/how-to-work-with-gunbot/extras/autoconfig',
  },

  alertContents: {
    /*"Alert execution": ["item1", "item2"],
        "Edit license": ["item1", "item2"],
        "Exchanges": ["item1", "item2"],
        "Sell": ["item1", "item2"]*/
    'this is a tab title': ['item1', 'item2'],
  },

  marginExchanges: [
    'bitmex',
    'bitmex_testnet',
    'krakenFutures',
    'binanceFutures',
    'futures_gunthy',
    'kumex',
    'bitget',
    'ftx',
    // 'bybit',
    'okex5',
    'okgunbot',
  ],

  // list of all available exchanges
  ccxtExchanges: [
    'ftxus',
    'mex_gunthy',
    '_1btcxe',
    'acx',
    'allcoin',
    'anxpro',
    'anybits',
    'bcex',
    'beaxy',
    'bequant',
    'bibox',
    'bigone',
    'binance',
    'binanceje',
    'bit2c',
    'bitbank',
    'bitbay',
    'bitfinex',
    'bitfinex2',
    'bitflyer',
    'bitforex',
    'bithumb',
    'bitibu',
    'bitkk',
    'bitlish',
    'bitmart',
    'bitmarket',
    'nashio',
    'bitmex',
    'bitsane',
    'bitso',
    'bitstamp',
    'bitstamp1',
    'bittrex',
    'bitz',
    'bl3p',
    'bleutrade',
    'braziliex',
    'btcalpha',
    'btcbox',
    'btcchina',
    'btcexchange',
    'btcmarkets',
    'btctradeim',
    'btctradeua',
    'btcturk',
    'buda',
    'bxinth',
    'ccex',
    'cex',
    'chbtc',
    'chilebit',
    'cobinhood',
    'coinbase',
    'coinbaseprime',
    'coincheck',
    'coinegg',
    'coinex',
    'coinexchange',
    'coinfalcon',
    'coinfloor',
    'coingi',
    'coinmarketcap',
    'coinmate',
    'coinnest',
    'coinone',
    'coinspot',
    'cointiger',
    'coolcoin',
    'coss',
    'crex24',
    'crypton',
    'cryptopia',
    'deribit',
    'dsx',
    'dx',
    'ethfinex',
    'exmo',
    'exx',
    'fcoin',
    'fcoinjp',
    'flowbtc',
    'foxbit',
    'fybse',
    'fybsg',
    'gateio',
    'gdax',
    'gemini',
    'getbtc',
    'hadax',
    'hitbtc',
    'huobi',
    'huobiru',
    'ice3x',
    'independentreserve',
    'indodax',
    'itbit',
    'jubi',
    'kkex',
    'kraken',
    'kucoin',
    'kuna',
    'lakebtc',
    'lbank',
    'liqui',
    'liquid',
    'livecoin',
    'luno',
    'lykke',
    'mandala',
    'mercado',
    'mixcoins',
    'ftx',
    'negociecoins',
    'binanceus',
    'bitmex_testnet',
    'nova',
    'bitget',
    'latoken',
    'binanceFutures',
    'futures_gunthy',
    'krakenFutures',
    'bybit',
    'okcoincny',
    'kumex',
    'okcoinusd',
    'gunthy',
    'okex5',
    'okgunbot',
    'paymium',
    'poloniex',
    'quadrigacx',
    'rightbtc',
    'southxchange',
    'stronghold',
    'surbitcoin',
    'theocean',
    'therock',
    'tidebit',
    'tidex',
    'uex',
    'upbit',
    'urdubit',
    'vaultoro',
    'vbtc',
    'virwox',
    'xbtce',
    'yobit',
    'zaif',
    'zb',
    'txbit',
    'mexc',
  ],

  // List of often used state keys in Autoconfig
  stateKeys: [
    'ABP',
    'Ask',
    'AskVolume',
    'Bid',
    'BidVolume',
    'CHIKOU',
    'FAST_SMA',
    'KIJUN',
    'MACD',
    'MACD_HISTOGRAM',
    'MACD_SIGNAL',
    'ROE',
    'SLOW_SMA',
    'STOCHRSI',
    'STOCH_D',
    'STOCH_K',
    'TENKAN',
    'actualSENKOUSPANA',
    'actualSENKOUSPANB',
    'adx',
    'atr',
    'availableMargin',
    'avgEntryPrice',
    'baseBalance',
    'countsell',
    'currentQty',
    'diminus',
    'diplus',
    'ducount',
    'dudone',
    'ema1',
    'ema2',
    'ema3',
    'forecast',
    'highBB',
    'liquidationPrice',
    'lowBB',
    'mfi',
    'ourBaginBase',
    'pKIJUN',
    'pTENKAN',
    'pastSENKOUSPANA',
    'pastSENKOUSPANB',
    'prevAsk',
    'prevBid',
    'quoteBalance',
    'reversal',
    'rsi',
    'rtsoldprice',
  ],

  // static and non exchange specific data needed to render new strat editor
  easyStratEditor: {
    stepgrid: {
      info: {
        description:
          'Grid strategy with integrated trailing. Can do partial sell orders below break even. Targets up and down are set around last order rate.',
        docsUrl: 'https://wiki.gunthy.org/trading-strategy-options/spot/stepgrid/',
        market: 'spot',
        license: ['one', 'standard', 'standardtv', 'pro', 'protv', 'ultimate', 'promoultimate', 'br', 'mm'],
        exchangeBlacklist: ['bybit'],
      },
      'Pair name': {
        description: 'Set which pair to trade.',
        parameters: {
          PAIR_NAME: {
            defaultValue: 'USDT-BTC',
            tooltip: `Gunbot uses a standardized format for entering trading pairs, to allow a uniform way of adding pairs across platforms. Exchanges often use a different notation.
            
The general format is: BASECOIN-QUOTECOIN
            
All pairs with BTC as base currency are written like: BTC-ETH, BTC-ATOM, BTC-ETH
With a BTC-XXX pair, the aim is realize growth in BTC balance.
            
All pairs with USDT as base currency are written like: USDT-BTC, USDT-ETH, USDT-XMR
With an USDT-XXX pair, the aim is realize growth in USDT balance.`,
            inputType: 'string',
          },
        },
      },
      'Balance settings': {
        description: 'Configure how much the strategy can invest',
        parameters: {
          TRADING_LIMIT: {
            defaultValue: '20', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `The amount to invest for each individual buy order.`,
            inputType: 'string',
          },
          MAX_BUY_COUNT: {
            defaultValue: '40',
            tooltip: `Limits maximum position size. \n\nWhen max is reached, the strategy goes in sell mode only. \n\nA value of 40 means that the total position size may not exceed 40x the amount set as 'trading limit'\n\nWhen max is reached, the strategy goes in sell mode only`,
            inputType: 'range',
            rangeLowHigh: [1, 80],
            rangeInput: [1, 999],
          },
          MIN_VOLUME_TO_SELL: {
            defaultValue: '10', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `Minimum notional order value. Used to ignore balances that are too small to sell. \n\nDefault value is an estimation, please verify on your exchange what the actual minimum order value is for this pair. `,
            inputType: 'string',
          },
        },
      },
      'Customize grid': {
        description: 'Options to change grid step size',
        parameters: {
          PERIOD: {
            defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.`,
            inputType: 'select',
          },
          AUTO_STEP_SIZE: {
            defaultValue: true,
            tooltip: `Lets the bot automatically determine a grid step size that fits the pairs current volatility`,
            inputType: 'boolean',
          },
          STEP_SIZE: {
            defaultValue: '500',
            tooltip: `Manually defined grid step size for buy and sell orders, when auto step size is not enabled. \n\nSet as a price: setting 500 on USDT-BTC makes the bot trade each time price moves 500 USDT.`,
            inputType: 'string',
          },
          ENFORCE_STEP: {
            defaultValue: false,
            tooltip: `Used to ensure step size is respected. \n\nPrice trailing can sometimes finish at a rate worse than the current grid step up or down. \n\nWith this option enabled, orders may only get fired when trailing finishes at a better rate than the current step target. This can be useful for very precise balance management.`,
            inputType: 'boolean',
          },
          unit_cost: {
            defaultValue: false,
            tooltip: `Determines how the break even price is calculated. \n\nWhen enabled: break even represents the average price per unit of remaining units in balance \n\nWhen disabled: break even line represents the point at which the remaining units can be sold for the total trade sequence to break even.`,
            inputType: 'boolean',
          },
        },
      },
      Advanced: {
        description: 'Various advanced options',
        parameters: {
          STOP_AFTER_SELL: {
            defaultValue: false,
            tooltip: `Used to stop trading after the current holding has been completely sold. \n\nWhen enabled, no new buy trades are placed at times where there is no balance to sell anymore.`,
            inputType: 'boolean',
          },
          FOREVER_BAGS: {
            defaultValue: false,
            tooltip: `Used to 'ride trends up'. \n\nThe default strategy behavior is to exit a trade in one or a small number of sell orders above the break even price. \n\nUsing the 'forever bags' option the break even price is completely ignored and each buy and sell order is always placed for 1x 'trading limit'. Buy count is not available when forever bags is enabled.`,
            inputType: 'boolean',
          },
          BUY_ENABLED: {
            defaultValue: true,
            tooltip: `Allow or disallow placing buy orders. \n\nStrategy performs better when trades are always allowed.`,
            inputType: 'boolean',
          },
          SELL_ENABLED: {
            defaultValue: true,
            tooltip: `Allow or disallow placing sell orders. \n\nStrategy performs better when trades are always allowed.`,
            inputType: 'boolean',
          },
          PROTECT_PARTIAL_SELL: {
            defaultValue: true,
            tooltip: `Prevents partial sell orders from being fired at rates where there is no buy volume below it, and would cause a loss.
            
This relies on Gunbot having the full order history for the current position, for example it cannot work when you deposit funds and use stepgrid to sell them.`,
            inputType: 'boolean',
          },
          SMAPERIOD: {
            defaultValue: '50',
            tooltip: `Number of candles used to calculate support and resistance levels, which are used to calculate trailing ranges. \n\nDefault value of 50 should usually not need tuning.`,
            inputType: 'range',
            rangeLowHigh: [5, 80],
            rangeInput: [1, 500],
          },
          ATR_PERIOD: {
            defaultValue: '50',
            tooltip: `Number of candles used to calculate Average True Range, which is used to calculate auto step size. \n\nDefault value of 50 should usually not need tuning.`,
            inputType: 'range',
            rangeLowHigh: [5, 80],
            rangeInput: [1, 500],
          },
          KEEP_QUOTE: {
            defaultValue: '0',
            tooltip: `Number of units to not sell and keep in balance. Setting 0.01 on USDT-BTC makes the bot not sell the last 0.01 BTC in balance.`,
            inputType: 'string',
          },
          IGNORE_TRADES_BEFORE: {
            defaultValue: '0',
            inputType: 'string',
          },
        },
      },
    },
    spotgrid: {
      info: {
        description:
          'DCA strategy with automatic buydown levels and price trailing. Invest per trade is static. Buy target increases with each buy order, does not sell below break even. ',
        docsUrl: 'https://wiki.gunthy.org/trading-strategy-options/spot/spotgrid/',
        market: 'spot',
        license: ['standard', 'standardtv', 'pro', 'protv', 'ultimate', 'promoultimate', 'br', 'mm'],
        exchangeBlacklist: ['bybit'],
      },
      'Pair name': {
        description: 'Set which pair to trade.',
        parameters: {
          PAIR_NAME: {
            defaultValue: 'USDT-BTC',
            tooltip: `Gunbot uses a standardized format for entering trading pairs, to allow a uniform way of adding pairs across platforms. Exchanges often use a different notation.
            
The general format is: BASECOIN-QUOTECOIN
            
All pairs with BTC as base currency are written like: BTC-ETH, BTC-ATOM, BTC-ETH
With a BTC-XXX pair, the aim is realize growth in BTC balance.
            
All pairs with USDT as base currency are written like: USDT-BTC, USDT-ETH, USDT-XMR
With an USDT-XXX pair, the aim is realize growth in USDT balance.`,
            inputType: 'string',
          },
        },
      },
      'Balance settings': {
        description: 'Configure how much the strategy can invest',
        parameters: {
          TRADING_LIMIT: {
            defaultValue: '20', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `The amount to invest for each individual buy order.`,
            inputType: 'string',
          },
          MAX_BUY_COUNT: {
            defaultValue: '40',
            tooltip: `Limits maximum position size. \n\nWhen max is reached, the strategy goes in sell mode only. \n\nA value of 15 means that the total position size may not exceed 15x the amount set as 'trading limit'\n\nWhen max is reached, the strategy goes in sell mode only`,
            inputType: 'range',
            rangeLowHigh: [1, 80],
            rangeInput: [1, 999],
          },
          MIN_VOLUME_TO_SELL: {
            defaultValue: '10', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `Minimum notional order value. Used to ignore balances that are too small to sell. \n\nDefault value is an estimation, please verify on your exchange what the actual minimum order value is for this pair. `,
            inputType: 'string',
          },
        },
      },
      'Customize targets': {
        description: 'Options to change trading targets',
        parameters: {
          PERIOD: {
            defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.`,
            inputType: 'select',
          },
          AUTO_GAIN: {
            defaultValue: true,
            tooltip: `Use a dynamic profit target. The dynamic target is based on the distance between support and resistance, capped at a minimum profit of 2x trading fees. \n\nThe target decreases when position size increases. Overrules a manually set target.`,
            inputType: 'boolean',
          },
          GAIN: {
            defaultValue: '0.5',
            tooltip: `Set a manual profit target. \n\nEach time price reaches this percentage above break even, a sell order gets placed.`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0, 20],
            rangeInput: [-100, 999],
          },
          GRID_MULTIPLIER: {
            defaultValue: '1',
            tooltip: `Can be used to increase or decrease the distance between buy orders. Default value 1 means that the hardcoded levels are used. \n\n1.5 would increase the levels with a factor 1.5x, a value of 0.5 would halve the default levels`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [1, 5],
            rangeInput: [0.01, 50],
          },
        },
      },
      Advanced: {
        description: 'Various advanced options',
        parameters: {
          STOP_AFTER_SELL: {
            defaultValue: false,
            tooltip: `Used to stop trading after the current holding has been completely sold. \n\nWhen enabled, no new buy trades are placed at times where there is no balance to sell anymore.`,
            inputType: 'boolean',
          },
          BUY_ENABLED: {
            defaultValue: true,
            tooltip: `Allow or disallow placing buy orders. \n\nStrategy performs better when trades are always allowed.`,
            inputType: 'boolean',
          },
          SELL_ENABLED: {
            defaultValue: true,
            tooltip: `Allow or disallow placing sell orders. \n\nStrategy performs better when trades are always allowed.`,
            inputType: 'boolean',
          },
          unit_cost: {
            defaultValue: false,
            inputType: 'boolean',
          },
          SMAPERIOD: {
            defaultValue: '50',
            tooltip: `Number of candles used to calculate support and resistance levels, which are used to calculate buydown targets and trailing ranges. \n\nDefault value of 50 should usually not need tuning.`,
            inputType: 'range',
            rangeLowHigh: [5, 80],
            rangeInput: [1, 500],
          },
          KEEP_QUOTE: {
            defaultValue: '0',
            tooltip: `Number of units to not sell and keep in balance. Setting 0.01 on USDT-BTC makes the bot not sell the last 0.01 BTC in balance.`,
            inputType: 'string',
          },
          IGNORE_TRADES_BEFORE: {
            defaultValue: '0',
            inputType: 'string',
          },
        },
      },
    },
    spotgridadvanced: {
      info: {
        description:
          'DCA strategy with automatic buydown levels and price trailing. Can increase DCA invest per trade. Buy target increases with each buy order, can do partial sell orders below break even. ',
        docsUrl: 'https://wiki.gunthy.org/trading-strategy-options/spot/sga/',
        market: 'spot',
        license: ['standard', 'standardtv', 'pro', 'protv', 'ultimate', 'promoultimate', 'br', 'mm'],
        exchangeBlacklist: ['bybit'],
      },
      'Pair name': {
        description: 'Set which pair to trade.',
        parameters: {
          PAIR_NAME: {
            defaultValue: 'USDT-BTC',
            tooltip: `Gunbot uses a standardized format for entering trading pairs, to allow a uniform way of adding pairs across platforms. Exchanges often use a different notation.
            
The general format is: BASECOIN-QUOTECOIN
            
All pairs with BTC as base currency are written like: BTC-ETH, BTC-ATOM, BTC-ETH
With a BTC-XXX pair, the aim is realize growth in BTC balance.
            
All pairs with USDT as base currency are written like: USDT-BTC, USDT-ETH, USDT-XMR
With an USDT-XXX pair, the aim is realize growth in USDT balance.`,
            inputType: 'string',
          },
        },
      },
      'Balance settings': {
        description: 'Configure how much the strategy can invest',
        parameters: {
          TRADING_LIMIT: {
            defaultValue: '20', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `The amount to invest for each individual buy order. \n\nWhen using trading limit multiplier, this is the value for the first buy order.`,
            inputType: 'string',
          },
          TL_MULTIPLIER: {
            defaultValue: '1',
            tooltip: `Can be used to increase or decrease the invested amount with each consecutive buy order. \n\nExamples with trading limit 100 usdt and max buy count 3:\n\n1: each buy order is for 100 usdt \n\n1.5: first buy 100, second buy 150, third buy 225\n\n2: first buy 100, second buy 200, third buy 400`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [1, 5],
            rangeInput: [0.01, 500],
          },
          MAX_BUY_COUNT: {
            defaultValue: '15',
            tooltip: `Limits maximum position size. \n\nWhen max is reached, the strategy goes in sell mode only. \n\nA value of 15 means that the total position size may not exceed 15x the amount set as 'trading limit' \n\nWhen trading limit multiplier is used, the increased investment per buy order is factored into 'buy count'.\n\nWhen max is reached, the strategy goes in sell mode only`,
            inputType: 'range',
            rangeLowHigh: [1, 80],
            rangeInput: [1, 500],
          },
          MIN_VOLUME_TO_SELL: {
            defaultValue: '10', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `Minimum notional order value. Used to ignore balances that are too small to sell. \n\nDefault value is an estimation, please verify on your exchange what the actual minimum order value is for this pair. `,
            inputType: 'string',
          },
        },
      },
      'Customize targets': {
        description: 'Options to change trading targets',
        parameters: {
          PERIOD: {
            defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.`,
            inputType: 'select',
          },
          AUTO_GAIN: {
            defaultValue: true,
            tooltip: `Use a dynamic profit target. The dynamic target is based on the distance between support and resistance, capped at a minimum profit of 2x trading fees. \n\nThe target decreases when position size increases. Overrules a manually set target.`,
            inputType: 'boolean',
          },
          GAIN: {
            defaultValue: 0.5,
            tooltip: `Set a manual profit target. \n\nEach time price reaches this percentage above break even, a sell order gets placed.`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0, 10],
            rangeInput: [-100, 999],
          },
          GRID_MULTIPLIER: {
            defaultValue: '1',
            tooltip: `Can be used to increase or decrease the distance between buy orders. Default value 1 means that the hardcoded levels are used. \n\n1.5 would increase the levels with a factor 1.5x, a value of 0.5 would halve the default levels`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [1, 5],
            rangeInput: [0.01, 50],
          },
          TRAILING_MULTIPLIER: {
            defaultValue: '1',
            tooltip: `Can be used to increase or decrease the trailing range for all order types. Default value 1 means that the hardcoded range is used. \n\n1.5 would increase the range with a factor 1.5x, a value of 0.5 would halve the default trailing range`,
            step: 0.01,
            rangeLowHigh: [1, 5],
            rangeInput: [0.01, 50],
          },
          unit_cost: {
            defaultValue: false,
            tooltip: `Determines how the break even price is calculated. \n\nWhen enabled: break even represents the average price per unit of remaining units in balance \n\nWhen disabled: break even line represents the point at which the remaining units can be sold for the total trade sequence to break even.`,
            inputType: 'boolean',
          },
        },
      },
      'Trend options': {
        description: 'Higher timeframe trend watcher',
        parameters: {
          TREND_OPEN: {
            defaultValue: false,
            tooltip: `When enabled, new positions are only opened when both 4h and 15m charts indicate a bullish market. \n\nThis check is independent from the PERIOD in your strategy. Requires the exchange to offer both 15m and 4h candle data`,
            inputType: 'boolean',
          },
          TREND_BLOCK_DCA: {
            defaultValue: false,
            tooltip: `When enabled, DCA trades are only allowed when both 4h and 15m charts indicate a bullish market \n\nThis check is independent from the PERIOD in your strategy. Requires the exchange to offer both 15m and 4h candle data`,
            inputType: 'boolean',
          },
          TREND_LOWER_DCA: {
            defaultValue: false,
            tooltip: `When enabled, the DCA distance gets doubled when the 4h and/or 15m chart do not indicate a bullish market \n\nThis check is independent from the PERIOD in your strategy. Requires the exchange to offer both 15m and 4h candle data`,
            inputType: 'boolean',
          },
          TREND_CT_MULTIPLIER: {
            defaultValue: '2',
            tooltip: `Multiplier to adjust CT buy target while trend is not bullish and Dynamic DCA distance is used\n\nA value of 2 would double the distance, a value of 1 results in the same behavior as when Dynamic DCA distance is disabled`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [1, 5],
            rangeInput: [0.01, 50],
          },
          TREND_GRID_MULTIPLIER: {
            defaultValue: '2',
            tooltip: `Multiplier to adjust the next DCA target while trend is not bullish and Dynamic DCA distance is used\n\nA value of 2 would double the distance, a value of 1 results in the same behavior as when Dynamic DCA distance is disabled`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [1, 5],
            rangeInput: [0.01, 50],
          },
        },
      },
      Advanced: {
        description: 'Various advanced options',
        parameters: {
          STOP_AFTER_SELL: {
            defaultValue: false,
            tooltip: `Used to stop trading after the current holding has been completely sold. \n\nWhen enabled, no new buy trades are placed at times where there is no balance to sell anymore.`,
            inputType: 'boolean',
          },
          BUY_ENABLED: {
            defaultValue: true,
            tooltip: `Allow or disallow placing buy orders. \n\nStrategy performs better when trades are always allowed.`,
            inputType: 'boolean',
          },
          SELL_ENABLED: {
            defaultValue: true,
            tooltip: `Allow or disallow placing sell orders. \n\nStrategy performs better when trades are always allowed.`,
            inputType: 'boolean',
          },
          CT_TL_MULTIPLIER: {
            defaultValue: '0.5',
            tooltip: `Sets the ratio between last buy order invest in base, and the amount used for trades during continuous trading. Value between 0 and 1. \n\nWhen set to 0.5, halve of the base amount used for the previous DCA trade will be used for continuous trading. Setting 1 would use the same amount as the last DCA buy order`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [1, 5],
            rangeInput: [0.01, 50],
          },
          START_CONT_TRADING: {
            defaultValue: '3',
            tooltip: `Continuous trading allows you to continue trading while the current price is below break even, with the aim of lowering break even by accumulating quote and to gain base balance. You need to have a trading limit that is at least 2x the exchange defined minimum order size for this feature to work. \n\n This setting defines from which buy count continuous trading is allowed. \n\n A value of 3 means that when the position is 3x trading limit in size, the next sell target is placed above the last buy rate instead of above break even. Set a very high value to effectively disable this feature`,
            inputType: 'range',
            rangeLowHigh: [1, 40],
            rangeInput: [1, 200],
          },
          CT_RESTART_MULTIPLIER: {
            defaultValue: '1',
            tooltip: `Sets the distance between a CT sell and a buy above that. Default is 1, should usually not be changed. \n\nExamples:\n\n1: buy target above last sell rate is placed once price is 1x the distance between sup/res above last sell rate \n\n0.5: buy target above last sell rate is placed once price is 0.5x the distance between sup/res above last sell rate`,
            inputType: 'range',
            rangeLowHigh: [1, 40],
            rangeInput: [1, 200],
          },
          SMAPERIOD: {
            defaultValue: '50',
            tooltip: `Number of candles used to calculate support and resistance levels, which are used to calculate buydown targets and trailing ranges. \n\nDefault value of 50 should usually not need tuning.`,
            inputType: 'range',
            rangeLowHigh: [5, 80],
            rangeInput: [1, 500],
          },
          KEEP_QUOTE: {
            defaultValue: '0',
            tooltip: `Number of units to not sell and keep in balance. Setting 0.01 on USDT-BTC makes the bot not sell the last 0.01 BTC in balance.`,
            inputType: 'string',
          },
          IGNORE_TRADES_BEFORE: {
            defaultValue: '0',
            inputType: 'string',
          },
        },
      },
    },
    stepgridhybrid: {
      info: {
        description: 'Crossover between pure grid trading, TA trading and price action trading.',
        docsUrl: 'https://wiki.gunthy.org/trading-strategy-options/spot/stepgridhybrid/',
        market: 'spot',
        license: ['standard', 'standardtv', 'pro', 'protv', 'ultimate', 'promoultimate', 'br', 'mm'],
        exchangeBlacklist: ['bittrex'],
      },
      'Pair name': {
        description: 'Set which pair to trade.',
        parameters: {
          PAIR_NAME: {
            defaultValue: 'USDT-BTC',
            tooltip: `Gunbot uses a standardized format for entering trading pairs, to allow a uniform way of adding pairs across platforms. Exchanges often use a different notation.
            
The general format is: BASECOIN-QUOTECOIN
            
All pairs with BTC as base currency are written like: BTC-ETH, BTC-ATOM, BTC-ETH
With a BTC-XXX pair, the aim is realize growth in BTC balance.
            
All pairs with USDT as base currency are written like: USDT-BTC, USDT-ETH, USDT-XMR
With an USDT-XXX pair, the aim is realize growth in USDT balance.`,
            inputType: 'string',
          },
        },
      },
      'Balance settings': {
        description: 'Configure how much the strategy can invest',
        parameters: {
          TRADING_LIMIT: {
            defaultValue: '80', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `The normal amount to invest for each individual buy order. \n\nThis strategy uses several multipliers, the actual invest per order can be between 0.25 and 2 times the specific trading limit.`,
            inputType: 'string',
          },
          USE_TLR: {
            defaultValue: false,
            tooltip: `When enabled, the strategy will use a dynamic buy amount depending on if price is relatively high (lower amount) or relatively low (higher amount). \n\nAmount ranges between 0.25 and 1 times trading limit\n\nIf you use this, make sure to set a value for trading limit that is at least 4x the minimum order size`,
            inputType: 'boolean',
          },
          USE_PSR: {
            defaultValue: false,
            tooltip: `When enabled, the strategy sets partial sell ratio automatically. It will use a higher value when price is relatively low, and a lower value when price is relatively high.\n\nWhat this means is that when prices are relatively high, partial sell orders will use less of the available balance at these rates, and aim to bring more sell volume to higher prices. When prices are relatively low, each partial sell order will sell almost the full amount of the previous buy order.`,
            inputType: 'boolean',
          },
          PARTIAL_SELL_RATIO: {
            defaultValue: '0.95',
            tooltip: `The strategy is aware of how much volume was bought below the current price, and how much remains to be sold profitably. If a sell step is reached where nothing can be sold profitably, the step is skipped. \n\nWhen placing a sell order below the overall break even rate, the sell volume is defined by partial sell ratio.\n\nIf for example 200 units were bought at rates lower than the current price, a partial sell of 0.4 will lead to a partial sell order of 80 units.`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 2],
            rangeInput: [0.01, 999],
          },
          PARTIAL_SELL_CAP: {
            defaultValue: false,
            tooltip: `Set an upper limit to partial sell order quantity`,
            inputType: 'boolean',
          },
          PARTIAL_SELL_CAP_RATIO: {
            defaultValue: '1',
            tooltip: `Setting 1 as cap value means that a partial sell order may not exceed 1x 'trading limit' in value.`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 2],
            rangeInput: [0.01, 999],
          },
          MAX_BUY_COUNT: {
            defaultValue: '40',
            tooltip: `Limits maximum position size. \n\nWhen max is reached, the strategy goes in sell mode only. \n\nA value of 40 means that the total position size may not exceed 40x the amount set as 'trading limit'\n\nWhen max is reached, the strategy goes in sell mode only`,
            inputType: 'range',
            rangeLowHigh: [1, 80],
            rangeInput: [1, 500],
          },
          MIN_VOLUME_TO_SELL: {
            defaultValue: '10', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `Minimum notional order value. Used to ignore balances that are too small to sell. \n\nDefault value is an estimation, please verify on your exchange what the actual minimum order value is for this pair. `,
            inputType: 'string',
          },
        },
      },
      'Customize grid': {
        description: 'Options to change grid step size',
        parameters: {
          PERIOD: {
            defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
            inputType: 'select',
          },
          AUTO_STEP_SIZE: {
            defaultValue: true,
            tooltip: `Lets the bot automatically determine a grid step size that fits the pairs current volatility`,
            inputType: 'boolean',
          },
          MIN_STEP_PCT: {
            defaultValue: '0',
            tooltip: `Minimum percentage size for steps, to overrule automatic step size. \n\nSetting 1 means that a step is set to 1% of price, unless auto step size is already higher than 1%`,
            inputType: 'string',
          },
          STEP_SIZE: {
            defaultValue: '500',
            tooltip: `Manually defined grid step size for buy and sell orders, when auto step size is not enabled. \n\nSet as a price: setting 500 on USDT-BTC makes the bot trade each time price moves 500 USDT.\n\nWhen using Pct step size, the value represents a percentage:  setting 2 will lead to having steps of 2% of current price.`,
            inputType: 'string',
          },
          PCT_STEP_SIZE: {
            defaultValue: false,
            tooltip: `When enabled, the value for step size represents a percentage.`,
            inputType: 'boolean',
          },
          ENFORCE_STEP: {
            defaultValue: false,
            tooltip: `Used to ensure step size is respected. \n\nPrice trailing can sometimes finish at a rate worse than the current grid step up or down. \n\nWith this option enabled, orders may only get fired when trailing finishes at a better rate than the current step target. This can be useful for very precise balance management.`,
            inputType: 'boolean',
          },
          unit_cost: {
            defaultValue: false,
            tooltip: `Determines how the break even price is calculated. \n\nWhen enabled: break even represents the average price per unit of remaining units in balance \n\nWhen disabled: break even line represents the point at which the remaining units can be sold for the total trade sequence to break even.`,
            inputType: 'boolean',
          },
          DYNAMIC_EXIT_LOGIC: {
            defaultValue: true,
            inputType: 'boolean',
          },
          GAIN_PARTIAL: {
            defaultValue: '0.5',
            tooltip: `Minimum gain target for partial sell orders. \n\nWhen set to 0.5, only buy orders at least 0.5% (+ trading fees) below current price are considered when calculating partial sell volume`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 5],
            rangeInput: [0.01, 9999],
          },
          GAIN: {
            defaultValue: '1',
            tooltip: `Minimum gain percentage target above active unit cost / break even \n\nWhen set to 1, full sell is only allowed when hitting a sell step at least 1% above current unit cost / break even target.`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 5],
            rangeInput: [0.01, 9999],
          },
        },
      },
      'Customize trailing': {
        description: 'Customize trailing ranges',
        parameters: {
          PCT_TRAILING_RANGE: {
            defaultValue: false,
            tooltip: `By default buy trailing ranges are set automatically based on the current distance between support and resistance.\n\nWith this option you can set a percentage as custom trailing range to be used for buy and sell trailing. `,
            inputType: 'boolean',
          },
          CUSTOM_TRAILING_RANGE: {
            defaultValue: '0.3',
            tooltip: `When pct buy trailing range is enabled, setting 0.5 will lead to having buy trailing ranges of 0.5% of current price.`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 5],
            rangeInput: [0.01, 50],
          },
          PCT_SELL_TRAILING_RANGE: {
            defaultValue: false,
            tooltip: `By default sell trailing ranges are set automatically based on the current distance between support and resistance.\n\nWith this option you can set a percentage as custom trailing range to be used for buy and sell trailing. `,
            inputType: 'boolean',
          },
          CUSTOM_SELL_TRAILING_RANGE: {
            defaultValue: '0.3',
            tooltip: `When pct sell trailing range is enabled, setting 0.5 will lead to having sell trailing ranges of 0.5% of current price.`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 5],
            rangeInput: [0.01, 50],
          },
        },
      },
      'Trend options': {
        description: 'Trend based order triggers and restrictions',
        parameters: {
          TREND_SYNC: {
            defaultValue: false,
            tooltip: `When enabled, new trades may only be opened when the trends on 4h and 1h are aligned. Does not apply to dca trades.\n\nThis can be very restrictive.`,
            inputType: 'boolean',
          },
          TREND_BASIC: {
            defaultValue: true,
            tooltip: `This option enables dynamic strategy behavior like:

- using an increased sell step and trailing range when the market seems good for it
- placing immediate buy orders (regardless of hitting a step) when price action is very positive
- using a higher partial sell ratio after an immediate buy
- skipping certain buy steps when price action is very negative

This option will usually lead to more trading volume and makes it a more complex to plan capital allocation.`,
            inputType: 'boolean',
          },
          TREND_PLUS: {
            defaultValue: true,
            tooltip: `This option enables dynamic strategy behavior like:

- placing immediate buy orders (regardless of hitting a step) when there seems to be a short term opportunity
- using higher partial sell ratio after an immediate buy

This option will usually lead to more trading volume and makes it a more complex to plan capital allocation.`,
            inputType: 'boolean',
          },
          TREND_ORDERS: {
            defaultValue: true,
            tooltip: `This option can be used to disallow orders triggered by trend basic and trend plus.`,
            inputType: 'boolean',
          },
          AUTO_TREND_ORDERS: {
            defaultValue: true,
            inputType: 'boolean',
          },
          TRAILING_MULTIPLIER: {
            defaultValue: '2',
            tooltip: `This multiplier is used when trend basic and/or trend plus are enabled, and the trend module detects a situation where increased targets make sense.

Setting trailing multiplier to 2, multiplies the trailing range by 2 in specific situations. 

This multiplier also applies to custom pct trailing ranges.`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 10],
            rangeInput: [0.01, 100],
          },
          SELL_STEP_MULTIPLIER: {
            defaultValue: '1.2',

            tooltip: `This multiplier is used when trend basic and/or trend plus are enabled, and the trend module detects a situation where increased targets make sense.

Setting sell step multiplier to 1.2 makes the a sell step 1.2x times as big in specific situations.

This multiplier also applies to a custom step size.`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [1, 5],
            rangeInput: [0.01, 100],
          },
          TREND_TRAILING: {
            defaultValue: true,
            inputType: 'boolean',
          },
          TREND_TRAILING_MULTIPLIER: {
            defaultValue: '1',
            inputType: 'range',
            step: 0.1,
            rangeLowHigh: [0.1, 4],
            rangeInput: [0.1, 100],
          },
          TREND_TRAILING_BEARISH_MULTIPLIER: {
            defaultValue: '2',
            inputType: 'range',
            step: 0.1,
            rangeLowHigh: [0.1, 4],
            rangeInput: [0.1, 100],
          },
        },
      },
      'Trading modes': {
        description: 'Customize trading modes',
        parameters: {
          CUSTOM_TRADING_RANGE_MODE: {
            defaultValue: false,
            tooltip: `With this mode you can define the price zone in which you want the strategy to operate, and optionally set a stop target. 

With the settings like in the defaults, new trades may only be opened when price is between 8000 and 10000. DCA trades can be placed at any price. In case price drops below 7000 all funds get sold. Set stop target to 0 to effectively disable it.`,
            inputType: 'boolean',
          },
          TRADING_RANGE_LOW: {
            defaultValue: '8000',
            tooltip: `Lower limit of manual trading range. Applies to opening new trades.`,
            inputType: 'string',
          },
          TRADING_RANGE_HIGH: {
            defaultValue: '10000',
            tooltip: `Upper limit of manual trading range. Applies to opening new trades.`,
            inputType: 'string',
          },
          TRADING_RANGE_STOP: {
            defaultValue: '7000',
            tooltip: `Stop loss target of manual trading range. Triggers when latest candle open rate is below stop target.`,
            inputType: 'string',
          },
          TRADING_RANGE_DCA_STOP: {
            defaultValue: '7500',
            tooltip: `Lower limit for DCA orders. No additional DCA orders are placed below this price.`,
            inputType: 'string',
          },
          PULLBACK_MODE: {
            defaultValue: false,
            tooltip: `When enabled, a pair may only open new trades when a pullback happens. Mostly monitored on 4h charts, independent of the period you set in this strategy. \n\nThis can be very restrictive.`,
            inputType: 'boolean',
          },
          VOLATILITY_MODE: {
            defaultValue: false,
            tooltip: `When enabled, only bullish pairs are traded in a controlled volatility range: it will attempt to start trading relatively low and stop trading when price is about to peak. \n\nThis mode comes with a built in stop mechanism near the top to often allow for a clean exit with minimal loss on the last sell order. This stop mechanism is separated from the dynamic stop loss option, and cannot be disabled in this mode.\n\nThis can be very restrictive.`,
            inputType: 'boolean',
          },
          TA_MODE: {
            defaultValue: false,
            tooltip: `When enabled, only bullish pairs are traded after they hit one or more TA fractals.\n\nThis can be very restrictive.`,
            inputType: 'boolean',
          },
          DYNAMIC_SL: {
            defaultValue: false,
            tooltip: `This option is meant to be used together with volatility mode or TA mode and tries to provide a meaningful stop target. Can also be used with other, or no active modes. You cannot see the stop target before it hits.\n\nThis can lead to losses.`,
            inputType: 'boolean',
          },
        },
      },
      Advanced: {
        description: 'Various advanced options',
        parameters: {
          STOP_AFTER_SELL: {
            defaultValue: false,
            tooltip: `Used to stop trading after the current holding has been completely sold. \n\nWhen enabled, no new buy trades are placed at times where there is no balance to sell anymore.`,
            inputType: 'boolean',
          },
          FOREVER_BAGS: {
            defaultValue: false,
            tooltip: `Used to 'ride trends up'. \n\nThe default strategy behavior is to exit a trade in one or a small number of sell orders above the break even price. \n\nUsing the 'forever bags' option the break even price is completely ignored. Buy count is not available when forever bags is enabled.`,
            inputType: 'boolean',
          },
          BUY_ENABLED: {
            defaultValue: true,
            tooltip: `Allow or disallow placing buy orders. \n\nStrategy performs better when trades are always allowed.`,
            inputType: 'boolean',
          },
          SELL_ENABLED: {
            defaultValue: true,
            tooltip: `Allow or disallow placing sell orders. \n\nStrategy performs better when trades are always allowed.`,
            inputType: 'boolean',
          },
          SMAPERIOD: {
            defaultValue: '50',
            tooltip: `Number of candles used to calculate support and resistance levels, which are used to calculate trailing ranges. \n\nDefault value of 50 should usually not need tuning.`,
            inputType: 'range',
            rangeLowHigh: [5, 80],
            rangeInput: [1, 500],
          },
          ATR_PERIOD: {
            defaultValue: '50',
            tooltip: `Number of candles used to calculate Average True Range, which is used to calculate auto step size. \n\nDefault value of 50 should usually not need tuning.`,
            inputType: 'range',
            rangeLowHigh: [5, 80],
            rangeInput: [1, 500],
          },
          KEEP_QUOTE: {
            defaultValue: '0',
            tooltip: `Number of units to not sell and keep in balance. Setting 0.01 on USDT-BTC makes the bot not sell the last 0.01 BTC in balance.`,
            inputType: 'string',
          },
          IGNORE_TRADES_BEFORE: {
            defaultValue: '0',
            inputType: 'string',
          },
        },
      },
    },
    stepgridscalp: {
      info: {
        description:
          'Highly configurable grid strategy using the IRIS-Trend algorithm to analyze, identify and process price action in real time. This preset is configured to actively trade sideways and uptrending markets, in downtrends it slows down by aiming to buy long term supports.',
        docsUrl: 'https://wiki.gunthy.org/trading-strategy-options/spot/stepgridscalp/',
        market: 'spot',
        license: ['standard', 'standardtv', 'pro', 'protv', 'ultimate', 'promoultimate', 'br', 'mm'],
        exchangeBlacklist: [],
      },
      'Pair name': {
        description: 'Set which pair to trade',
        parameters: {
          PAIR_NAME: {
            defaultValue: 'USDT-BTC',
            tooltip: `Gunbot uses a standardized format for entering trading pairs, to allow a uniform way of adding pairs across platforms. Exchanges often use a different notation.
          
  The general format is: BASECOIN-QUOTECOIN
          
  All pairs with BTC as base currency are written like: BTC-ETH, BTC-DOGE, BTC-XRP
  With a BTC-XXX pair, the aim is realize growth in BTC balance.
          
  All pairs with USDT as base currency are written like: USDT-BTC, USDT-ETH, USDT-XMR
  With an USDT-XXX pair, the aim is realize growth in USDT balance.`,
            inputType: 'string',
          },
        },
      },
      'Balance settings': {
        description: 'Configure investment limits',
        parameters: {
          TRADING_LIMIT: {
            defaultValue: '40',
            tooltip: `The base amount used for each regular buy order. This value is also used to calculate 'buy count'`,
            inputType: 'string',
          },
          TL_MULTIPLIER: {
            defaultValue: '1',
            tooltip: `Can be used to increase or decrease the invested amount for each consecutive buy order. \n\nExamples with trading limit 100 usdt and max buy count 3:\n\n1: each buy order is for 100 usdt \n\n1.5: first buy 100, second buy 150, third buy 225\n\n2: first buy 100, second buy 200, third buy 400 \n\nApplies to the calculation of 'trading limit' for every kind of order, multipliers for special kinds or orders are applied after calculating the tl for the current round.`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [1, 5],
            rangeInput: [0.01, 500],
          },
          MAX_BUY_COUNT: {
            defaultValue: '40',
            tooltip: `Limits maximum position size. \n\nWhen trading limit multiplier is used, the increased investment per buy order is factored into 'buy count' so each dca round is only counted once. \n\nA value of 40 means that the total position size may not exceed 40x the amount set as 'trading limit'\n\nWhen max is reached, the strategy goes in sell mode only`,
            inputType: 'range',
            rangeLowHigh: [1, 80],
            rangeInput: [1, 500],
          },
          MIN_VOLUME_TO_SELL: {
            defaultValue: '10', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `Minimum notional order value. Used to ignore balances that are too small to sell. \n\nDefault value is an estimation, please verify on your exchange what the actual minimum order value is for this pair. `,
            inputType: 'string',
          },
        },
      },
      'Profit settings': {
        description: 'Configure how the strategy takes profit',
        parameters: {
          GAIN: {
            defaultValue: '1',
            tooltip: `Minimum gain percentage target above active unit cost / break even \n\nWhen set to 1, full sell is only allowed when hitting a sell step at least 1% above current unit cost / break even target.`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 5],
            rangeInput: [0.01, 9999],
          },
          GAIN_PARTIAL: {
            defaultValue: '0.5',
            tooltip: `Minimum gain target for partial sell orders. \n\nWhen set to 0.5, only buy orders at least 0.5% (+ trading fees) below current price are considered when calculating partial sell volume`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 5],
            rangeInput: [0.01, 9999],
          },
          separator_2: {},
          PARTIAL_SELL_RATIO: {
            defaultValue: '0.95',
            tooltip: `The strategy is aware of how much volume was bought below the current price, and how much remains to be sold profitably. If a sell step is reached where nothing can be sold profitably, the step is skipped. \n\nWhen placing a sell order below the overall break even rate, the sell volume is defined by partial sell ratio.\n\nIf for example 200 units were bought at rates lower than the current price, a partial sell of 0.4 will lead to a partial sell order of 80 units.`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 2],
            rangeInput: [0.01, 999],
          },
          PARTIAL_SELL_CAP: {
            defaultValue: false,
            tooltip: `Set an upper limit to partial sell order quantity per sell step. `,
            inputType: 'boolean',
          },
          PARTIAL_SELL_CAP_RATIO: {
            defaultValue: '1',
            tooltip: `Setting 1 as cap value means that a partial sell order may not exceed 1x 'trading limit' in value per step. \n\nIn case of sell trailing effectively skipping several steps upwards, sell volume is determined by number of steps reached at once * partial sell ratio, capped by partial sell cap ratio`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 2],
            rangeInput: [0.01, 999],
          },
          separator_3: {},
          unit_cost: {
            defaultValue: false,
            tooltip: `Determines how the break even price is calculated. \n\nWhen enabled: break even represents the average price per unit of remaining units in balance \n\nWhen disabled: break even line represents the point at which the remaining units can be sold for the total trade sequence to break even.`,
            inputType: 'boolean',
          },
          DYNAMIC_EXIT_LOGIC: {
            defaultValue: true,
            inputType: 'boolean',
          },
        },
      },
      'Indicator settings': {
        description: 'Configure relevant indicators',
        parameters: {
          PERIOD: {
            defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `Sets which timeframe to use for short term market data. This is the main trading timeframe.`,
            inputType: 'select',
          },
          PERIOD_MEDIUM: {
            defaultValue: '60', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `Sets which timeframe to use for medium term market data.`,
            inputType: 'select',
          },
          PERIOD_LONG: {
            defaultValue: '240', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `Sets which timeframe to use for long term market data.`,
            inputType: 'select',
          },
          ATR_PERIOD: {
            defaultValue: '50',
            tooltip: `Number of candles used to calculate Average True Range, which is used to calculate auto step size and trailing ranges. \n\nDefault value of 50 should usually not need tuning.`,
            inputType: 'range',
            rangeLowHigh: [5, 80],
            rangeInput: [1, 500],
          },
        },
      },
      'Customize grid': {
        description: 'Control the size of grid steps',
        parameters: {
          AUTO_STEP_SIZE: {
            defaultValue: 'ATR',
            tooltip: `Lets the bot automatically determine a grid step size that fits the pairs current volatility. When set to none, the configured absolute or percentage step size is used instead.`,
            options: ['none', 'ATR', 'candleSize'],
            inputType: 'select',
          },
          MIN_STEP_PCT: {
            defaultValue: '0.3',
            tooltip: `Minimum percentage size for steps, to overrule automatic step size. \n\nSetting 0.3 means that the absolute minimum for auto step size is 0.3% of current price.`,
            inputType: 'string',
          },
          STEP_SIZE: {
            defaultValue: '500',
            tooltip: `Manually defined grid step size for buy and sell orders, when auto step size is not enabled. \n\nSet as a price: setting 500 on USDT-BTC makes the bot trade each time price moves 500 USDT.\n\nWhen using Pct step size, the value represents a percentage:  setting 2 will lead to having steps of 2% of current price.`,
            inputType: 'string',
          },
          PCT_STEP_SIZE: {
            defaultValue: false,
            tooltip: `When enabled, the value for step size represents a percentage.`,
            inputType: 'boolean',
          },
          ENFORCE_STEP: {
            defaultValue: false,
            tooltip: `Used to ensure step size is respected. \n\nPrice trailing can sometimes finish at a rate worse than the current grid step up or down. \n\nWith this option enabled, orders may only get fired when trailing finishes at a better rate than the current step target. This can be useful for very precise balance management.`,
            inputType: 'boolean',
          },
        },
      },
      'Customize trailing': {
        description: 'Adjust buy and sell trailing ranges',
        parameters: {
          PCT_TRAILING_RANGE: {
            defaultValue: false,
            tooltip: `By default buy trailing ranges are set automatically based on the current distance between support and resistance.\n\nWith this option you can set a percentage as custom trailing range to be used for buy and sell trailing. `,
            inputType: 'boolean',
          },
          CUSTOM_TRAILING_RANGE: {
            defaultValue: '0.3',
            tooltip: `When pct buy trailing range is enabled, setting 0.5 will lead to having buy trailing ranges of 0.5% of current price.`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 5],
            rangeInput: [0.01, 50],
          },
          PCT_SELL_TRAILING_RANGE: {
            defaultValue: false,
            tooltip: `By default sell trailing ranges are set automatically based on the current distance between support and resistance.\n\nWith this option you can set a percentage as custom trailing range to be used for buy and sell trailing. `,
            inputType: 'boolean',
          },
          CUSTOM_SELL_TRAILING_RANGE: {
            defaultValue: '0.3',
            tooltip: `When pct sell trailing range is enabled, setting 0.5 will lead to having sell trailing ranges of 0.5% of current price.`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 5],
            rangeInput: [0.01, 50],
          },
        },
      },
      'IRIS-Trend  |  Price action': {
        description: 'Constrain grid trading to favorable market cycle phases',
        parameters: {
          TREND_SYNC: {
            label: 'Price action analysis',
            defaultValue: true,
            tooltip: `When enabled, trend data of the configured timeframes for short, medium and long term is used to follow price action to:
      - (dis)allow opening new trades 
      - switch between normal grid trailing and grid trailing with increased trailing ranges`,
            inputType: 'boolean',
          },
          PRICE_ACTION_TL_RATIO: {
            defaultValue: '1',
            tooltip: `Can be used to modify buy amounts when price action is very positive. \n\nSetting 2 places buy orders for 'trading limit' * 2`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 2],
            rangeInput: [0.01, 999],
          },
          PRICE_ACTION_THRESHOLD: {
            defaultValue: '0',
            tooltip: `ATR percentage rank threshold used in the conditions to allow 'price action tl multiplier' and 'Price action analysis (during phase bullish reversal)'. Setting 0.5 means that the current medium period ATR percentage rank value is at least 50% and the current candle is green.`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [-1, 1],
            rangeInput: [-1, 1],
          },
          STRICT_ENTRY: {
            defaultValue: true,
            tooltip: `When enabled, more conservative criteria are used to (dis)allow opening new trades, mainly by not buying into overbought market conditions. This can lead to times of inactivity after a final sell, by design.`,
            inputType: 'boolean',
          },
          STRICT_DCA: {
            defaultValue: true,
            tooltip: `When enabled, more conservative criteria are used to (dis)allow placing DCA trades, mainly by not buying into overbought market conditions.`,
            inputType: 'boolean',
          },
          EXHAUSTION_SENSITIVITY: {
            defaultValue: 'SHORT',
            inputType: 'select',
            options: ['SHORT', 'MEDIUM', 'LONG'],
            tooltip: `This setting controls up to which timeframe exhaustion must pass before a next DCA buy is allowed.
        
        - SHORT: do not allow buy orders when short term is exhausted
        - MEDIUM: do not allow buy orders when short OR medium term is exhausted
        - LONG: do not allow buy orders when short OR medium OR long term is exhausted
        `,
          },
        },
      },
      'IRIS-Trend  |  Trade supports': {
        description: 'Target supports during phases unfavorable to grid trading',
        parameters: {
          TRADE_SUPPORTS: {
            defaultValue: true,
            tooltip: `When enabled, trend data of the configured timeframes for short, medium and long term is used to follow price action to:
  - a mode in which limit orders targets are placed at medium or long term support levels`,
            inputType: 'boolean',
          },
          SUPPORT_TL_RATIO: {
            defaultValue: '2',
            tooltip: `When trend sync is enabled and multiple timeframes move downwards, limit buy targets are placed at medium or high timeframe supports. \n\nThis setting determines the buy order value for S1 targets, it multiplies 'trailing limit' \n\nSetting 2 places buy orders for 'trading limit' * 2`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 2],
            rangeInput: [0.01, 999],
          },
          SUPPORT2_TL_RATIO: {
            defaultValue: '2',
            tooltip: `When trend sync is enabled and multiple timeframes move downwards, limit buy targets are placed at medium or high timeframe supports. \n\nThis setting determines the buy order value for S2 targets, it multiplies 'trailing limit' \n\nSetting 2 places buy orders for 'trading limit' * 2`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 2],
            rangeInput: [0.01, 999],
          },
        },
      },
      'IRIS-Trend  |  Micro scalping': {
        description: 'More careful grid trading in relatively high zones',
        parameters: {
          TREND_SCALPING: {
            label: 'Micro scalping',
            defaultValue: true,
            tooltip: `When enabled, trend data using the configured timeframes for short, medium and long term is used to:
      - (dis)allow opening new trades 
      - switch between normal grid trailing micro scalping
      
      During micro scalping partial stop loss orders are possible.`,
            inputType: 'boolean',
          },
          SCALP_TL_RATIO: {
            defaultValue: '0.625',
            tooltip: `When trend scalping is enabled and a scalping zone is reached, buy and sell amounts are based on this ratio\n\nThis setting determines the buy order value for support targets, it multiplies 'trailing limit' \n\nSetting 0.5 places buy orders for 'trading limit' * 0.5`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 2],
            rangeInput: [0.01, 999],
          },
          DYNAMIC_SL: {
            defaultValue: false,
            tooltip: `This is a stop loss option for small positions (up to 2x 'trading limit', rounded), accumulated in higher regions. 
      
      The goal is to accept a relatively small loss sometimes, before a trade gets hard to DCA effectively.`,
            inputType: 'boolean',
          },
        },
      },
      'IRIS-Trend  |  Multiple timeframes': {
        description: 'Increase trading frequency by using a second set of timeframes',
        parameters: {
          MULTIPLE_TIMEFRAMES_MODE: {
            defaultValue: false,
            tooltip: `When enabled, the strategy switches to a lower set of timeframes when it detects favorable conditions during a 'bullish reversal' phase, with the aim of reaching a higher trading frequency. When the lower set of timeframes all have exhausted market conditions, it switches back to the regular set of timeframes. `,
            inputType: 'boolean',
          },
          MTF_TL_RATIO: {
            defaultValue: '1',
            tooltip: `Trading limit ratio to use for buy trading using the lower set of timeframes\n\nThis setting determines the buy order value for support targets, it multiplies 'trailing limit' \n\nSetting 0.5 places buy orders for 'trading limit' * 0.5`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 2],
            rangeInput: [0.01, 999],
          },
          separator_2: {},
          LOWER_PERIOD_LOW: {
            defaultValue: '5',
            tooltip: `Low period of lower set of timeframes.`,
            inputType: 'select',
          },
          LOWER_PERIOD_MEDIUM: {
            defaultValue: '15',
            tooltip: `Medium period of lower set of timeframes`,
            inputType: 'select',
          },
          LOWER_PERIOD_HIGH: {
            defaultValue: '30',
            tooltip: `High period of lower set of timeframes`,
            inputType: 'select',
          },
          separator_3: {},
          MIDDLE_PERIOD_LOW: {
            defaultValue: '15',
            tooltip: `Low period of regular set of timeframes. Should normally be set identically to the period settings in the indicator section.`,
            inputType: 'select',
          },
          MIDDLE_PERIOD_MEDIUM: {
            defaultValue: '60',
            tooltip: `Medium period of regular set of timeframes. Should normally be set identically to the period settings in the indicator section.`,
            inputType: 'select',
          },
          MIDDLE_PERIOD_HIGH: {
            defaultValue: '240',
            tooltip: `High period of regular set of timeframes. Should normally be set identically to the period settings in the indicator section.`,
            inputType: 'select',
          },
        },
      },
      'IRIS-Trend  |  Accumulation cycle': {
        description: 'Mode to accumulate without partial sell orders',
        parameters: {
          ACCUMULATION_CYCLE: {
            defaultValue: false,
            tooltip: `When enabled, no partial sells below break even are allowed, full sell only allowed when gain target is reached and the market is exhausted on all timeframes. New trades are only opened during the 'bullish reversal' phase. Micro scalping is disabled.`,
            inputType: 'boolean',
          },
        },
      },
      'IRIS-Trend  |  Advanced trailing': {
        description: 'Adjust buy and sell trailing multipliers',
        parameters: {
          TREND_PLUS: {
            label: 'Advanced trailing',
            defaultValue: true,
            tooltip: `When enabled, trend data using the configured timeframes for short, medium and long term is used to in- and decrease trailing ranges based on the currently detected market phase. This overrules a trailing modifier in 'strict price action'`,
            inputType: 'boolean',
          },
          separator: {},
          TREND_PLUS_BUY_MULTIPLIER_SMALL: {
            defaultValue: '1',
            tooltip: `Smallest buy trailing range multiplier. \n\nMultiplies the currently active trailing range: auto or custom pct. 1x auto trailing range equals 0.2x ATR.`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 5],
            rangeInput: [0.01, 999],
          },
          TREND_PLUS_BUY_MULTIPLIER_MEDIUM: {
            defaultValue: '2',
            tooltip: `Medium buy trailing range multiplier. \n\nMultiplies the currently active trailing range: auto or custom pct. 1x auto trailing range equals 0.2x ATR.`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 5],
            rangeInput: [0.01, 999],
          },
          TREND_PLUS_BUY_MULTIPLIER_LARGE: {
            defaultValue: '5',
            tooltip: `Largest buy trailing range multiplier. \n\nMultiplies the currently active trailing range: auto or custom pct. 1x auto trailing range equals 0.2x ATR.`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 5],
            rangeInput: [0.01, 999],
          },
          separator_2: {},
          TREND_PLUS_SELL_MULTIPLIER_SMALL: {
            defaultValue: '0.5',
            tooltip: `Smallest sell trailing range multiplier. \n\nMultiplies the currently active trailing range: auto or custom pct. 1x auto trailing range equals 0.2x ATR.`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 5],
            rangeInput: [0.01, 999],
          },
          TREND_PLUS_SELL_MULTIPLIER_MEDIUM: {
            defaultValue: '2',
            tooltip: `Medium sell trailing range multiplier. \n\nMultiplies the currently active trailing range: auto or custom pct. 1x auto trailing range equals 0.2x ATR.`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 5],
            rangeInput: [0.01, 999],
          },
          TREND_PLUS_SELL_MULTIPLIER_LARGE: {
            defaultValue: '5',
            tooltip: `Largest sell trailing range multiplier. \n\nMultiplies the currently active trailing range: auto or custom pct. 1x auto trailing range equals 0.2x ATR.`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 5],
            rangeInput: [0.01, 999],
          },
        },
      },
      'Custom trading range': {
        description: 'Set boundaries to the traded price range',
        parameters: {
          CUSTOM_TRADING_RANGE_MODE: {
            defaultValue: false,
            tooltip: `With this mode you can define the price zone in which you want the strategy to operate, and optionally set a stop target. 
  
  With the settings like in the defaults, new trades may only be opened when price is between 8000 and 10000. DCA trades can be placed at any price. In case price drops below 7000 all funds get sold. Set stop target to 0 to effectively disable it.`,
            inputType: 'boolean',
          },
          TRADING_RANGE_LOW: {
            defaultValue: '8000',
            tooltip: `Lower limit of manual trading range. Applies to opening new trades.`,
            inputType: 'string',
          },
          TRADING_RANGE_HIGH: {
            defaultValue: '10000',
            tooltip: `Upper limit of manual trading range. Applies to opening new trades.`,
            inputType: 'string',
          },
          TRADING_RANGE_STOP: {
            defaultValue: '7000',
            tooltip: `Stop loss target of manual trading range.`,
            inputType: 'string',
          },
          TRADING_RANGE_DCA_STOP: {
            defaultValue: '7500',
            tooltip: `Lower limit for DCA orders. No additional DCA orders are placed below this price.`,
            inputType: 'string',
          },
        },
      },
      Advanced: {
        description: 'Various advanced options',
        parameters: {
          BUY_ENABLED: {
            defaultValue: true,
            tooltip: `Allow or disallow placing buy orders. \n\nStrategy performs better when trades are always allowed.`,
            inputType: 'boolean',
          },
          SELL_ENABLED: {
            defaultValue: true,
            tooltip: `Allow or disallow placing sell orders. \n\nStrategy performs better when trades are always allowed.`,
            inputType: 'boolean',
          },
          STOP_AFTER_SELL: {
            defaultValue: false,
            tooltip: `Used to stop trading after the current holding has been completely sold. \n\nWhen enabled, no new buy trades are placed at times where there is no balance to sell anymore.`,
            inputType: 'boolean',
          },
          FOREVER_BAGS: {
            defaultValue: false,
            tooltip: `Used to 'ride trends up'. \n\nThe default strategy behavior is to exit a trade in one or a small number of sell orders above the break even price. \n\nUsing the 'forever bags' option the break even price is completely ignored and the strategy places partial sell orders only. Buy count is not available when forever bags is enabled.`,
            inputType: 'boolean',
          },
          KEEP_QUOTE: {
            defaultValue: '0',
            tooltip: `Number of units to not sell and keep in balance. Setting 0.01 on USDT-BTC makes the bot not sell the last 0.01 BTC in balance.`,
            inputType: 'string',
          },
          IGNORE_TRADES_BEFORE: {
            defaultValue: '0',
            inputType: 'string',
          },
        },
      },
    },
    builder: {
      info: {
        description: 'Create your own strategy using readily available strategy options.',
        docsUrl: 'https://wiki.gunthy.org/trading-strategy-options/about-gunbot-strategies/',
        market: 'spot',
        license: ['standard', 'standardtv', 'pro', 'protv', 'ultimate', 'promoultimate', 'br', 'mm'],
        exchangeBlacklist: ['bybit'],
      },
      'Pair name': {
        description: 'Set which pair to trade.',
        parameters: {
          PAIR_NAME: {
            defaultValue: 'USDT-BTC',
            tooltip: `Gunbot uses a standardized format for entering trading pairs, to allow a uniform way of adding pairs across platforms. Exchanges often use a different notation.
            
The general format is: BASECOIN-QUOTECOIN
            
All pairs with BTC as base currency are written like: BTC-ETH, BTC-ATOM, BTC-ETH
With a BTC-XXX pair, the aim is realize growth in BTC balance.
            
All pairs with USDT as base currency are written like: USDT-BTC, USDT-ETH, USDT-XMR
With an USDT-XXX pair, the aim is realize growth in USDT balance.`,
            inputType: 'string',
          },
        },
      },
      'Buy settings': {
        description: 'Primary buy trigger',
        parameters: {
          supportresistance: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            SupRes_SPREAD: {
              defaultValue: '0.1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.01, 5],
              rangeInput: [0.01, 100],
            },
            SupRes_MAX: {
              defaultValue: '0',
              inputType: 'string',
            },
          },
          bb: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            BUY_LEVEL: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            LOW_BB: {
              defaultValue: '0.1',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0.1, 50],
              rangeInput: [-500, 500],
            },
          },
          emotionless: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            BUY_LEVEL: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
          },
          gain: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            BUY_LEVEL: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
          },
          ichimoku: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            KUMO_BUY: {
              defaultValue: false,
              inputType: 'boolean',
            },
            KIJUN_BUY: {
              defaultValue: false,
              inputType: 'boolean',
            },
            TENKAN_BUY: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
          pp: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            PP_BUY: {
              defaultValue: '1000',
              inputType: 'string',
            },
          },
          tsa: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
          tssl: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            BUY_LEVEL: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            BUY_RANGE: {
              defaultValue: '0.3',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.01, 5],
              rangeInput: [0.01, 50],
            },
          },
          stepgain: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            BUYLVL: {
              defaultValue: '1', // only used as fallback, normal behavior is to use exchange specific values
              options: [1, 2, 3],
              inputType: 'select',
            },
            BUYLVL1: {
              defaultValue: '0.3',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            BUYLVL2: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            BUYLVL3: {
              defaultValue: '2',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
          },
          adx: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
          atrts: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
          bbta: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            LOW_BB: {
              defaultValue: '0.1',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0.1, 50],
              rangeInput: [-500, 500],
            },
          },
          emaspread: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
          macd: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            SINGLE_BUY: {
              defaultValue: false,
              inputType: 'boolean',
            },
          },
          macdh: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            SINGLE_BUY: {
              defaultValue: false,
              inputType: 'boolean',
            },
          },
          smacross: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            SINGLE_BUY: {
              defaultValue: false,
              inputType: 'boolean',
            },
          },
        },
      },
      'Sell settings': {
        description: 'Primary sell trigger',
        parameters: {
          bb: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            HIGH_BB: {
              defaultValue: '0.1',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0.1, 50],
              rangeInput: [-500, 500],
            },
            GAIN: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            COUNT_SELL: {
              defaultValue: '9999',
              inputType: 'range',
              rangeLowHigh: [1, 50],
              rangeInput: [1, 999999],
            },
          },
          emotionless: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            GAIN: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            COUNT_SELL: {
              defaultValue: '9999',
              inputType: 'range',
              rangeLowHigh: [1, 50],
              rangeInput: [1, 999999],
            },
          },
          gain: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            GAIN: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            COUNT_SELL: {
              defaultValue: '9999',
              inputType: 'range',
              rangeLowHigh: [1, 50],
              rangeInput: [1, 999999],
            },
          },
          ichimoku: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            KUMO_SELL: {
              defaultValue: false,
              inputType: 'boolean',
            },
            TENKAN_SELL: {
              defaultValue: true,
              inputType: 'boolean',
            },
            KIJUN_SELL: {
              defaultValue: false,
              inputType: 'boolean',
            },
            GAIN: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            COUNT_SELL: {
              defaultValue: '9999',
              inputType: 'range',
              rangeLowHigh: [1, 50],
              rangeInput: [1, 999999],
            },
          },
          pp: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            PP_SELL: {
              defaultValue: '1000',
              inputType: 'string',
            },
            COUNT_SELL: {
              defaultValue: '9999',
              inputType: 'range',
              rangeLowHigh: [1, 50],
              rangeInput: [1, 999999],
            },
          },
          tsa: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            GAIN: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            COUNT_SELL: {
              defaultValue: '9999',
              inputType: 'range',
              rangeLowHigh: [1, 50],
              rangeInput: [1, 999999],
            },
          },
          tssl: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            GAIN: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            SELL_RANGE: {
              defaultValue: '0.3',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.01, 5],
              rangeInput: [0.01, 50],
            },
            COUNT_SELL: {
              defaultValue: '9999',
              inputType: 'range',
              rangeLowHigh: [1, 50],
              rangeInput: [1, 999999],
            },
          },
          stepgain: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            SELLLVL: {
              defaultValue: '1', // only used as fallback, normal behavior is to use exchange specific values
              options: [1, 2, 3],
              inputType: 'select',
            },
            SELLLVL1: {
              defaultValue: '0.3',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            SELLLVL2: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            SELLLVL3: {
              defaultValue: '2',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            COUNT_SELL: {
              defaultValue: '9999',
              inputType: 'range',
              rangeLowHigh: [1, 50],
              rangeInput: [1, 999999],
            },
          },
          adx: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            DOUBLE_CHECK_GAIN: {
              defaultValue: true,
              inputType: 'boolean',
            },
            GAIN: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            COUNT_SELL: {
              defaultValue: '9999',
              inputType: 'range',
              rangeLowHigh: [1, 50],
              rangeInput: [1, 999999],
            },
          },
          atrts: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            GAIN: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            STOP_LIMIT: {
              defaultValue: '99',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            COUNT_SELL: {
              defaultValue: '9999',
              inputType: 'range',
              rangeLowHigh: [1, 50],
              rangeInput: [1, 999999],
            },
          },
          bbta: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            HIGH_BB: {
              defaultValue: '0.1',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0.1, 50],
              rangeInput: [-500, 500],
            },
            DOUBLE_CHECK_GAIN: {
              defaultValue: true,
              inputType: 'boolean',
            },
            GAIN: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            COUNT_SELL: {
              defaultValue: '9999',
              inputType: 'range',
              rangeLowHigh: [1, 50],
              rangeInput: [1, 999999],
            },
          },
          emaspread: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            DOUBLE_CHECK_GAIN: {
              defaultValue: true,
              inputType: 'boolean',
            },
            GAIN: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            COUNT_SELL: {
              defaultValue: '9999',
              inputType: 'range',
              rangeLowHigh: [1, 50],
              rangeInput: [1, 999999],
            },
          },
          macd: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            DOUBLE_CHECK_GAIN: {
              defaultValue: true,
              inputType: 'boolean',
            },
            GAIN: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            COUNT_SELL: {
              defaultValue: '9999',
              inputType: 'range',
              rangeLowHigh: [1, 50],
              rangeInput: [1, 999999],
            },
          },
          macdh: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            DOUBLE_CHECK_GAIN: {
              defaultValue: true,
              inputType: 'boolean',
            },
            GAIN: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            COUNT_SELL: {
              defaultValue: '9999',
              inputType: 'range',
              rangeLowHigh: [1, 50],
              rangeInput: [1, 999999],
            },
          },
          smacross: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            DOUBLE_CHECK_GAIN: {
              defaultValue: true,
              inputType: 'boolean',
            },
            GAIN: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            COUNT_SELL: {
              defaultValue: '9999',
              inputType: 'range',
              rangeLowHigh: [1, 50],
              rangeInput: [1, 999999],
            },
          },
          supportresistance: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            GAIN: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            COUNT_SELL: {
              defaultValue: '9999',
              inputType: 'range',
              rangeLowHigh: [1, 50],
              rangeInput: [1, 999999],
            },
          },
        },
      },
      'Balance settings': {
        description: 'Configure how much the strategy can invest',
        parameters: {
          TRADING_LIMIT: {
            defaultValue: '20', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `The amount to invest for each individual buy order.`,
            inputType: 'string',
          },
          TL_PERC: {
            defaultValue: '0',
            inputType: 'range',
            step: 1,
            rangeLowHigh: [1, 100],
            rangeInput: [1, 100],
          },
          TL_ALLIN: {
            defaultValue: false,
            inputType: 'boolean',
          },
          FUNDS_RESERVE: {
            defaultValue: '0',
            inputType: 'string',
          },
          KEEP_QUOTE: {
            defaultValue: '0',
            tooltip: `Number of units to not sell and keep in balance. Setting 0.01 on USDT-BTC makes the bot not sell the last 0.01 BTC in balance.`,
            inputType: 'string',
          },
          MIN_VOLUME_TO_BUY: {
            defaultValue: '10', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `Minimum notional order value. Used to prevent buy orders that are too small to buy. \n\nDefault value is an estimation, please verify on your exchange what the actual minimum order value is for this pair.`,
            inputType: 'string',
          },
          MIN_VOLUME_TO_SELL: {
            defaultValue: '10', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `Minimum notional order value. Used to ignore balances that are too small to sell. \n\nDefault value is an estimation, please verify on your exchange what the actual minimum order value is for this pair. `,
            inputType: 'string',
          },
        },
      },
      Indicators: {
        description: 'Indicators used in selected buy and sell methods',
        parameters: {
          adx: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
            ADX_LEVEL: {
              defaultValue: '25',
              inputType: 'range',
              step: 1,
              rangeLowHigh: [10, 70],
              rangeInput: [1, 99],
            },
            DI_PERIOD: {
              defaultValue: '14',
              inputType: 'range',
              step: 1,
              rangeLowHigh: [10, 50],
              rangeInput: [1, 400],
            },
          },
          atrts: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
            ATRX: {
              defaultValue: '0.5',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0.1, 5],
              rangeInput: [0.1, 20],
            },
            ATR_PERIOD: {
              defaultValue: '14',
              inputType: 'range',
              step: 1,
              rangeLowHigh: [10, 50],
              rangeInput: [1, 400],
            },
          },
          bb: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
            SMAPERIOD: {
              defaultValue: '30',
              tooltip: `Number of candles used to calculate bollinger bands`,
              inputType: 'range',
              rangeLowHigh: [5, 80],
              rangeInput: [1, 500],
            },
            STDV: {
              defaultValue: '2',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0.5, 3],
              rangeInput: [0.1, 30],
            },
            EMA1: {
              defaultValue: '16',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            EMA2: {
              defaultValue: '8',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
          },
          bbta: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
            SMAPERIOD: {
              defaultValue: '30',
              tooltip: `Number of candles used to calculate bollinger bands`,
              inputType: 'range',
              rangeLowHigh: [5, 80],
              rangeInput: [1, 500],
            },
            STDV: {
              defaultValue: '2',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0.5, 3],
              rangeInput: [0.1, 30],
            },
          },
          supportresistance: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
            SMAPERIOD: {
              defaultValue: '30',
              tooltip: `Number of candles used to calculate support and resistance targets`,
              inputType: 'range',
              rangeLowHigh: [5, 80],
              rangeInput: [1, 500],
            },
          },
          emaspread: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
            EMAx: {
              defaultValue: '0.5',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0.1, 5],
              rangeInput: [0.1, 20],
            },
            EMA1: {
              defaultValue: '16',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            EMA2: {
              defaultValue: '8',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
          },
          emotionless: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
            EMA1: {
              defaultValue: '16',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            EMA2: {
              defaultValue: '8',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
          },
          ichimoku: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
            TENKAN_PERIOD: {
              defaultValue: '9',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            KIJUN_PERIOD: {
              defaultValue: '26',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            SENKOUSPAN_PERIOD: {
              defaultValue: '52',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            DISPLACEMENT: {
              defaultValue: '26',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
          },
          gain: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
            EMA1: {
              defaultValue: '16',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            EMA2: {
              defaultValue: '8',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
          },
          macd: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
            MACD_SHORT: {
              defaultValue: '5',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            MACD_LONG: {
              defaultValue: '20',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            MACD_SIGNAL: {
              defaultValue: '10',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
          },
          macdh: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
            MACD_SHORT: {
              defaultValue: '5',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            MACD_LONG: {
              defaultValue: '20',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            MACD_SIGNAL: {
              defaultValue: '10',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
          },
          pp: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets the chart candle timeframe. has no effect on primary buy or sell trigger with pp, only used for confirming indicators.`,
              inputType: 'select',
            },
          },
          smacross: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
            SLOW_SMA: {
              defaultValue: '20',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            FAST_SMA: {
              defaultValue: '10',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
          },
          tsa: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
          },
          tssl: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
            EMA1: {
              defaultValue: '16',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            EMA2: {
              defaultValue: '8',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
          },
          stepgain: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
            EMA1: {
              defaultValue: '16',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            EMA2: {
              defaultValue: '8',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
          },
        },
      },
      TrailMe: {
        description: 'Use additional price trailing',
        parameters: {
          TRAIL_ME_BUY: {
            defaultValue: false,
            inputType: 'boolean',
          },
          TRAIL_ME_DU: {
            defaultValue: false,
            inputType: 'boolean',
          },
          TRAIL_ME_BUY_RANGE: {
            defaultValue: '0.5',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.1, 1],
            rangeInput: [0.01, 100],
          },
          separator: true,
          TRAIL_ME_SELL: {
            defaultValue: false,
            inputType: 'boolean',
          },
          TRAIL_ME_SELL_RANGE: {
            defaultValue: '0.5',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.1, 1],
            rangeInput: [0.01, 100],
          },
          separator1: true,
          TRAIL_ME_RT: {
            defaultValue: false,
            inputType: 'boolean',
          },
          TRAIL_ME_RT_SELL_RANGE: {
            defaultValue: '0.5',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.1, 1],
            rangeInput: [0.01, 100],
          },
          TM_RT_SELL: {
            defaultValue: false,
            inputType: 'boolean',
          },
          RT_SELL_UP: {
            defaultValue: '0.3',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.1, 1],
            rangeInput: [0.01, 100],
          },
          RT_BUY_LEVEL: {
            defaultValue: '2',
            step: 0.1,
            inputType: 'range',
            rangeLowHigh: [0.1, 10],
            rangeInput: [0.1, 100],
          },
        },
      },
      DCA: {
        description: 'Dollar cost averaging',
        parameters: {
          DOUBLE_UP: {
            defaultValue: false,
            inputType: 'boolean',
          },
          DOUBLE_UP_CAP: {
            defaultValue: '1',
            inputType: 'range',
            step: 0.1,
            rangeLowHigh: [0.1, 5],
            rangeInput: [0.1, 100],
          },
          DU_CAP_COUNT: {
            defaultValue: '0',
            inputType: 'range',
            rangeLowHigh: [0, 10],
            rangeInput: [0, 999],
          },
          DU_BUYDOWN: {
            defaultValue: '2',
            step: 0.1,
            inputType: 'range',
            rangeLowHigh: [0.1, 10],
            rangeInput: [0.1, 100],
          },
          DU_METHOD: {
            defaultValue: 'HIGHBB',
            options: ['HIGHBB', 'RSI'],
            inputType: 'select',
            freeSolo: true,
          },
          RSI_DU_BUY: {
            defaultValue: '30',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [1, 99],
          },
        },
      },
      'Confirming indicators': {
        description: 'Additional indicator conditions',
        parameters: {
          ADX_ENABLED: {
            defaultValue: false,
            inputType: 'boolean',
          },
          ADX_LEVEL: {
            defaultValue: '25',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [1, 99],
          },
          DI_PERIOD: {
            defaultValue: '14',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          separator: true,
          BTC_PND_PROTECTION: {
            defaultValue: false,
            inputType: 'boolean',
          },
          BTC_PND_PERIOD: {
            defaultValue: '14',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          BTC_MONEY_FLOW: {
            defaultValue: '25',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [1, 99],
          },
          separator1: true,
          EMASPREAD: {
            defaultValue: false,
            inputType: 'boolean',
          },
          EMAx: {
            defaultValue: '0.5',
            inputType: 'range',
            step: 0.1,
            rangeLowHigh: [0.1, 5],
            rangeInput: [0.1, 20],
          },
          separator2: true,
          MFI_ENABLED: {
            defaultValue: false,
            inputType: 'boolean',
          },
          MFI_BUY_LEVEL: {
            defaultValue: '30',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [-1001, 99],
          },
          MFI_SELL_LEVEL: {
            defaultValue: '70',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [-1001, 99],
          },
          MFI_LENGTH: {
            defaultValue: '14',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          separator3: true,
          RSI_BUY_ENABLED: {
            defaultValue: false,
            inputType: 'boolean',
          },
          RSI_BUY_LEVEL: {
            defaultValue: '30',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [1, 99],
          },
          RSI_SELL_ENABLED: {
            defaultValue: false,
            inputType: 'boolean',
          },
          RSI_SELL_LEVEL: {
            defaultValue: '70',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [1, 99],
          },
          RSI_METHOD: {
            defaultValue: 'oscillator',
            options: ['oscillator', 'cross'],
            inputType: 'select',
          },
          RSI_LENGTH: {
            defaultValue: '14',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          separator4: true,
          STOCH_ENABLED: {
            defaultValue: false,
            inputType: 'boolean',
          },
          STOCH_BUY_LEVEL: {
            defaultValue: '30',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [-1001, 99],
          },
          STOCH_SELL_LEVEL: {
            defaultValue: '70',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [-1001, 99],
          },
          STOCH_METHOD: {
            defaultValue: 'oscillator',
            options: ['oscillator', 'cross'],
            inputType: 'select',
          },
          STOCH_K: {
            defaultValue: '14',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          SLOW_STOCH_K: {
            defaultValue: '3',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          STOCH_D: {
            defaultValue: '3',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          separator5: true,
          STOCHRSI_ENABLED: {
            defaultValue: false,
            inputType: 'boolean',
          },
          STOCHRSI_BUY_LEVEL: {
            defaultValue: '0.2',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 0.99],
            rangeInput: [0.01, 0.99],
          },
          STOCHRSI_SELL_LEVEL: {
            defaultValue: '0.8',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 0.99],
            rangeInput: [0.01, 0.99],
          },
          STOCHRSI_METHOD: {
            defaultValue: 'oscillator',
            options: ['oscillator', 'cross'],
            inputType: 'select',
          },
          STOCHRSI_LENGTH: {
            defaultValue: '14',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          separator6: true,
          STDV: {
            defaultValue: '2',
            inputType: 'range',
            step: 0.1,
            rangeLowHigh: [0.5, 3],
            rangeInput: [0.1, 30],
          },
          SMAPERIOD: {
            defaultValue: '50',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          CANDLES_LENGTH: {
            defaultValue: '400',
            inputType: 'range',
            rangeLowHigh: [1, 400],
            rangeInput: [1, 400],
          },
          EMA_LENGTH: {
            defaultValue: '100',
            inputType: 'range',
            rangeLowHigh: [1, 400],
            rangeInput: [1, 400],
          },
        },
      },
      RT: {
        description: 'Reversal trading',
        parameters: {
          RT_ENABLED: {
            defaultValue: false,
            inputType: 'boolean',
          },
          RT_BUY_LEVEL: {
            defaultValue: '2',
            step: 0.1,
            inputType: 'range',
            rangeLowHigh: [0.1, 10],
            rangeInput: [0.1, 100],
          },
          RT_GAIN: {
            defaultValue: '1.5',
            step: 0.1,
            inputType: 'range',
            rangeLowHigh: [0.1, 10],
            rangeInput: [0.1, 100],
          },
          RT_BUY_UP_LEVEL: {
            defaultValue: '0',
            step: 0.1,
            inputType: 'range',
            rangeLowHigh: [0.1, 10],
            rangeInput: [0.1, 100],
          },
          RT_ONCE: {
            defaultValue: false,
            inputType: 'boolean',
          },
          RT_ONCE_AND_CONTINUE: {
            defaultValue: false,
            inputType: 'boolean',
          },
          RT_MAXBAG_PROTECTION: {
            defaultValue: '10',
            inputType: 'range',
            rangeLowHigh: [0, 25],
            rangeInput: [0, 100],
          },
          RT_TREND_ENABLED: {
            defaultValue: false,
            inputType: 'boolean',
          },
        },
      },
      'Stop loss': {
        description: 'Handle losing trades',
        parameters: {
          STOP_LIMIT: {
            defaultValue: '99',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.1, 5],
            rangeInput: [-100, 99999],
          },
          SL_DISABLE_BUY: {
            defaultValue: false,
            inputType: 'boolean',
          },
        },
      },
      Misc: {
        description: 'Various other settings',
        parameters: {
          MARKET_BUY: {
            defaultValue: false,
            inputType: 'boolean',
          },
          MARKET_SELL: {
            defaultValue: false,
            inputType: 'boolean',
          },
          MARKET_STOP: {
            defaultValue: false,
            inputType: 'boolean',
          },
          MARKET_RTBUY: {
            defaultValue: false,
            inputType: 'boolean',
          },
          MARKET_RTSELL: {
            defaultValue: false,
            inputType: 'boolean',
          },
          MARKET_BUYBACK: {
            defaultValue: false,
            inputType: 'boolean',
          },
          MARKET_DU: {
            defaultValue: false,
            inputType: 'boolean',
          },
          MARKET_FOK: {
            defaultValue: false,
            inputType: 'boolean',
          },
          separator: true,
          PANIC_SELL: {
            defaultValue: false,
            inputType: 'boolean',
          },
          separator1: true,
          TRADES_TIMEOUT: {
            defaultValue: '0',
            inputType: 'string',
          },
          IGNORE_TRADES_BEFORE: {
            defaultValue: '0',
            inputType: 'string',
          },
          separator2: true,
          NBA: {
            defaultValue: '0',
            inputType: 'string',
          },
          separator3: true,
          TAKE_PROFIT: {
            defaultValue: false,
            inputType: 'boolean',
          },
          TP_PROFIT_ONLY: {
            defaultValue: false,
            inputType: 'boolean',
          },
          TP_RANGE: {
            defaultValue: '0.5',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.1, 1],
            rangeInput: [0.01, 100],
          },
          separator4: true,
          TAKE_BUY: {
            defaultValue: false,
            inputType: 'boolean',
          },
          TBUY_RANGE: {
            defaultValue: '0.5',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.1, 1],
            rangeInput: [0.01, 100],
          },
          separator5: true,
          LIQUIDITY: {
            defaultValue: false,
            inputType: 'boolean',
          },
          LIQUIDITY_TAKER: {
            defaultValue: false,
            inputType: 'boolean',
          },
          LIQUIDITY_GAIN: {
            defaultValue: true,
            inputType: 'boolean',
          },
          MAX_INVESTMENT: {
            defaultValue: '1',
            inputType: 'string',
          },
        },
      },
    },
    custom: {
      info: {
        description: `This strategy is a geometric market maker hybrid designed to bootstrap and long term trade very large market price movements (100's to 1000's% price moves). A quantitative algorithm is very different to a technical analysis algorithm. As an always in strategy, it performs to a markets 3 states:
Sidewards Market - Spread trading (price bouncing buy/sell intervals)
Price Pump: Decumulation of assets when conditions are right
Price Dump: Accumulation of asset when conditions are right`,
        docsUrl: 'https://wiki.gunthy.org/trading-strategy-options/custom-strategies/',
        market: 'all',
        license: ['ultimate', 'promoultimate', 'br', 'mm'],
      },
      'Pair name': {
        description: 'Set which pair to trade.',
        parameters: {
          PAIR_NAME: {
            defaultValue: 'USDT-BTC',
            tooltip: `Gunbot uses a standardized format for entering trading pairs, to allow a uniform way of adding pairs across platforms. Exchanges often use a different notation.
            
The general format is: BASECOIN-QUOTECOIN
            
All pairs with BTC as base currency are written like: BTC-ETH, BTC-ATOM, BTC-ETH
With a BTC-XXX pair, the aim is realize growth in BTC balance.
            
All pairs with USDT as base currency are written like: USDT-BTC, USDT-ETH, USDT-XMR
With an USDT-XXX pair, the aim is realize growth in USDT balance.`,
            inputType: 'string',
          },
        },
      },
      'Core settings': {
        description: 'Configure how much the strategy can invest',
        parameters: {
          STRAT_FILENAME: {
            defaultValue: '', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `Select the strategy file to run. All .js files in the /customStrategies folder are listed.`,
            options: [],
            inputType: 'select',
          },
          IS_MARGIN_STRAT: {
            defaultValue: false,
            tooltip:
              'Only has an effect on the GUI. Disable to use the GUI in spot trading mode, enable to use in futures mode.',
            inputType: 'boolean',
          },
          MIN_VOLUME_TO_SELL: {
            defaultValue: '10', // only used as fallback, normal behavior is to use exchange specific values
            tooltip:
              'Only has an effect on the GUI in spot trading mode. This is the threshold for stats like ROE to calculate when there is an open position.',
            inputType: 'string',
          },
          unit_cost: {
            defaultValue: false,
            tooltip: `Determines how the spot break even is calculated. \n\nWhen enabled: break even represents the average price per unit of remaining units in balance \n\nWhen disabled: break even line represents the point at which the remaining units can be sold for the total trade sequence to break even.`,
            inputType: 'boolean',
          },
        },
      },
      Indicators: {
        description: 'Configure how indicators are calculated',
        parameters: {
          PERIOD: {
            defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
            inputType: 'select',
          },
          CANDLES_LENGTH: {
            defaultValue: '400',
            inputType: 'range',
            rangeLowHigh: [1, 400],
            rangeInput: [1, 500],
          },
          separator0: true,
          ADX_ENABLED: {
            defaultValue: false,
            inputType: 'boolean',
          },
          ADX_LEVEL: {
            defaultValue: '25',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [1, 99],
          },
          DI_PERIOD: {
            defaultValue: '14',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          separator: true,
          BTC_PND_PROTECTION: {
            defaultValue: false,
            inputType: 'boolean',
          },
          BTC_PND_PERIOD: {
            defaultValue: '14',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          BTC_MONEY_FLOW: {
            defaultValue: '25',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [1, 99],
          },
          separator1: true,
          EMASPREAD: {
            defaultValue: false,
            inputType: 'boolean',
          },
          EMAx: {
            defaultValue: '0.5',
            inputType: 'range',
            step: 0.1,
            rangeLowHigh: [0.1, 5],
            rangeInput: [0.1, 20],
          },
          EMA1: {
            defaultValue: '16',
            inputType: 'range',
            rangeLowHigh: [2, 150],
            rangeInput: [1, 400],
          },
          EMA2: {
            defaultValue: '8',
            inputType: 'range',
            rangeLowHigh: [2, 150],
            rangeInput: [1, 400],
          },
          EMA3: {
            defaultValue: '150',
            inputType: 'range',
            rangeLowHigh: [2, 150],
            rangeInput: [1, 400],
          },
          EMA_LENGTH: {
            defaultValue: '150',
            inputType: 'range',
            rangeLowHigh: [1, 400],
            rangeInput: [1, 500],
          },
          separator2: true,
          MFI_ENABLED: {
            defaultValue: false,
            inputType: 'boolean',
          },
          MFI_BUY_LEVEL: {
            defaultValue: '30',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [-1001, 99],
          },
          MFI_SELL_LEVEL: {
            defaultValue: '70',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [-1001, 99],
          },
          MFI_LENGTH: {
            defaultValue: '14',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          separator3: true,
          RSI_BUY_ENABLED: {
            defaultValue: false,
            inputType: 'boolean',
          },
          RSI_BUY_LEVEL: {
            defaultValue: '30',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [1, 99],
          },
          RSI_SELL_ENABLED: {
            defaultValue: false,
            inputType: 'boolean',
          },
          RSI_SELL_LEVEL: {
            defaultValue: '70',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [1, 99],
          },
          RSI_METHOD: {
            defaultValue: 'oscillator',
            options: ['oscillator', 'cross'],
            inputType: 'select',
          },
          RSI_LENGTH: {
            defaultValue: '14',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          separator4: true,
          STOCH_ENABLED: {
            defaultValue: false,
            inputType: 'boolean',
          },
          STOCH_BUY_LEVEL: {
            defaultValue: '30',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [-1001, 99],
          },
          STOCH_SELL_LEVEL: {
            defaultValue: '70',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [-1001, 99],
          },
          STOCH_METHOD: {
            defaultValue: 'oscillator',
            options: ['oscillator', 'cross'],
            inputType: 'select',
          },
          STOCH_K: {
            defaultValue: '14',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          SLOW_STOCH_K: {
            defaultValue: '3',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          STOCH_D: {
            defaultValue: '3',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          separator5: true,
          STOCHRSI_ENABLED: {
            defaultValue: false,
            inputType: 'boolean',
          },
          STOCHRSI_BUY_LEVEL: {
            defaultValue: '0.2',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 0.99],
            rangeInput: [0.01, 0.99],
          },
          STOCHRSI_SELL_LEVEL: {
            defaultValue: '0.8',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 0.99],
            rangeInput: [0.01, 0.99],
          },
          STOCHRSI_METHOD: {
            defaultValue: 'oscillator',
            options: ['oscillator', 'cross'],
            inputType: 'select',
          },
          STOCHRSI_LENGTH: {
            defaultValue: '14',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          separator6: true,
          STDV: {
            defaultValue: '2',
            inputType: 'range',
            step: 0.1,
            rangeLowHigh: [0.5, 3],
            rangeInput: [0.1, 30],
          },
          SMAPERIOD: {
            defaultValue: '50',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
        },
      },
    },
    futuresgrid: {
      info: {
        description:
          'DCA strategy with automatic buydown levels and price trailing. Invest per trade is static. Buy target increases with each buy order, does not sell below break even. ',
        docsUrl: 'https://wiki.gunthy.org/trading-strategy-options/futures/futuresgrid/',
        market: 'futures',
        license: ['standard', 'standardtv', 'pro', 'protv', 'ultimate', 'promoultimate', 'br', 'mm'],
        exchangeBlacklist: ['bybit', 'okex5', 'okgunbot'],
      },
      'Pair name': {
        description: 'Set which pair to trade.',
        parameters: {
          PAIR_NAME: {
            defaultValue: 'USDT-BTC',
            tooltip: `Gunbot uses a standardized format for entering trading pairs, to allow a uniform way of adding pairs across platforms. Exchanges often use a different notation.
            
The general format is: BASECOIN-QUOTECOIN
            
All pairs with BTC as base currency are written like: BTC-ETH, BTC-ATOM, BTC-ETH
With a BTC-XXX pair, the aim is realize growth in BTC balance.
            
All pairs with USDT as base currency are written like: USDT-BTC, USDT-ETH, USDT-XMR
With an USDT-XXX pair, the aim is realize growth in USDT balance.`,
            inputType: 'string',
          },
        },
      },
      'Balance settings': {
        description: 'Configure how much the strategy can invest',
        parameters: {
          TRADING_LIMIT: {
            defaultValue: '20', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `The amount to invest for each individual buy order.`,
            inputType: 'string',
          },
          MAX_BUY_COUNT: {
            defaultValue: '10',
            tooltip: `Limits maximum position size. \n\nWhen max is reached, the strategy goes in sell mode only. \n\nA value of 15 means that the total position size may not exceed 15x the amount set as 'trading limit'\n\nWhen max is reached, the strategy goes in sell mode only`,
            inputType: 'range',
            rangeLowHigh: [1, 80],
            rangeInput: [1, 999],
          },
          MAX_OPEN_CONTRACTS: {
            defaultValue: '0',
            inputType: 'string',
          },
          LEVERAGE: {
            defaultValue: '0',
            inputType: 'range',
            exchangeSpecific: ['bitmex', 'bitmex_testnet', 'futures_gunthy', 'binanceFutures'],
            rangeLowHigh: [0, 125],
            rangeInput: [0, 700],
          },
        },
      },
      'Customize targets': {
        description: 'Options to change trading targets',
        parameters: {
          PERIOD: {
            defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.`,
            inputType: 'select',
          },
          DIRECTION: {
            defaultValue: 'LONG', // only used as fallback, normal behavior is to use exchange specific values
            inputType: 'select',
            options: ['LONG', 'SHORT', 'AUTO'],
          },
          TREND_VARIANT: {
            defaultValue: 'legacy',
            options: ['legacy', '4h', '1h_15m'],
            tooltip: `Trend source to use when direction is set to 'AUTO'. 
            
- Legacy mode uses the strategy timeframe, plus 1h and 4h data.
- 4h uses the same trend module as in stepgridhedge, using 4h data only.
- 1h_15m uses the same trend module as in stepgridhedge, using data from 1h and 15m charts.
`,
            inputType: 'select',
          },
          AUTO_GAIN: {
            defaultValue: true,
            tooltip: `Use a dynamic profit target. The dynamic target is based on the distance between support and resistance, capped at a minimum profit of 2x trading fees. \n\nThe target decreases when position size increases. Overrules a manually set target.`,
            inputType: 'boolean',
          },
          GAIN: {
            defaultValue: '0.5',
            tooltip: `Set a manual profit target. \n\nEach time price reaches this percentage above break even, a sell order gets placed.`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0, 20],
            rangeInput: [-100, 999],
          },
          GRID_MULTIPLIER: {
            defaultValue: '1',
            tooltip: `Can be used to increase or decrease the distance between buy orders. Default value 1 means that the hardcoded levels are used. \n\n1.5 would increase the levels with a factor 1.5x, a value of 0.5 would halve the default levels`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [1, 5],
            rangeInput: [0.01, 50],
          },
        },
      },
      Advanced: {
        description: 'Various advanced options',
        parameters: {
          TL_MULTIPLIER: {
            defaultValue: '1',
            tooltip: `Can be used to increase or decrease the invested amount with each consecutive buy order. \n\nExamples with trading limit 100 usdt and max buy count 3:\n\n1: each buy order is for 100 usdt \n\n1.5: first buy 100, second buy 150, third buy 225\n\n2: first buy 100, second buy 200, third buy 400`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [1, 5],
            rangeInput: [0.01, 500],
          },
          MIN_BUYDOWN: {
            defaultValue: '0',
            tooltip: `Set a minimum distance between two orders that add to a position. Value represents a percentage.

This acts as an override to the built-in buydown levels that increase with each additional dca order.

When set to 0.6, this means that the minimum distance is 0.6%.
`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0, 5],
            rangeInput: [0, 200],
          },
          KEEP_ONE_TL: {
            defaultValue: false,
            tooltip: `Instead of reopening a position shortly after closing one, with this setting enabled the bot will keep 1x trading limit open when (partially) closing a position.`,
            inputType: 'boolean',
          },
          STOP_AFTER_SELL: {
            defaultValue: false,
            tooltip: `Used to stop trading after the current holding has been completely sold. \n\nWhen enabled, no new buy trades are placed at times where there is no balance to sell anymore.`,
            inputType: 'boolean',
          },
          BUY_ENABLED: {
            defaultValue: true,
            tooltip: `Allow or disallow placing long orders. Closing longs is still possible. \n\nStrategy performs better when trades are always allowed.`,
            inputType: 'boolean',
          },
          SELL_ENABLED: {
            defaultValue: true,
            tooltip: `Allow or disallow placing short orders. Closing shorts is still possible. \n\nStrategy performs better when trades are always allowed.`,
            inputType: 'boolean',
          },
          SMAPERIOD: {
            defaultValue: '50',
            tooltip: `Number of candles used to calculate support and resistance levels, which are used to calculate buydown targets and trailing ranges. \n\nDefault value of 50 should usually not need tuning.`,
            inputType: 'range',
            rangeLowHigh: [5, 80],
            rangeInput: [1, 500],
          },
          KEEP_QUOTE: {
            defaultValue: '0',
            tooltip: `Number of units to not sell and keep in balance. Setting 0.01 on USDT-BTC makes the bot not sell the last 0.01 BTC in balance.`,
            inputType: 'string',
          },
          FIRST_ORDER_EXTRA_DELAY: {
            defaultValue: '30',
            tooltip: `Additional delay after opening a new trade. Can be used to prevent multiple orders in case the exchange does not update balances fast enough.`,
            inputType: 'range',
            rangeLowHigh: [5, 50],
            rangeInput: [1, 999999],
          },
        },
      },
    },
    tenkan: {
      info: {
        description: 'Opens a long when tenkan goes below kumo, opens a short position when tenkan crosses over kumo.',
        docsUrl: 'https://wiki.gunthy.org/trading-strategy-options/futures/tenkan/',
        market: 'futures',
        license: ['standard', 'standardtv', 'pro', 'protv', 'ultimate', 'promoultimate', 'br', 'mm'],
        exchangeBlacklist: ['bybit', 'okex5', 'okgunbot'],
      },
      'Pair name': {
        description: 'Set which pair to trade.',
        parameters: {
          PAIR_NAME: {
            defaultValue: 'USDT-BTC',
            tooltip: `Gunbot uses a standardized format for entering trading pairs, to allow a uniform way of adding pairs across platforms. Exchanges often use a different notation.
            
    The general format is: BASECOIN-QUOTECOIN
            
    All pairs with BTC as base currency are written like: BTC-ETH, BTC-ATOM, BTC-ETH
    With a BTC-XXX pair, the aim is realize growth in BTC balance.
            
    All pairs with USDT as base currency are written like: USDT-BTC, USDT-ETH, USDT-XMR
    With an USDT-XXX pair, the aim is realize growth in USDT balance.`,
            inputType: 'string',
          },
        },
      },
      'Basic settings': {
        description: 'Configure how much the strategy can invest',
        parameters: {
          TRADING_LIMIT: {
            defaultValue: '20', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `The amount to invest for each individual buy order.`,
            inputType: 'string',
          },
          MAX_OPEN_CONTRACTS: {
            defaultValue: '0',
            inputType: 'string',
          },
        },
      },
      'Customize targets': {
        description: 'Set targets to take profit',
        parameters: {
          ROE: {
            defaultValue: '1',
            inputType: 'range',
            step: 0.1,
            rangeLowHigh: [0, 50],
            rangeInput: [-100, 999],
          },
          ROE_LIMIT: {
            defaultValue: '1',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0, 20],
            rangeInput: [-100, 999],
          },
          DCA_SPREAD: {
            defaultValue: '2',
            inputType: 'range',
            step: 0.1,
            rangeLowHigh: [0.1, 20],
            rangeInput: [0.1, 999],
          },
        },
      },
      Indicators: {
        description: 'Configure relevant indicators',
        parameters: {
          PERIOD: {
            defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.`,
            inputType: 'select',
          },
          separator: true,
          TENKAN_PERIOD: {
            defaultValue: '9',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          KIJUN_PERIOD: {
            defaultValue: '26',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          SENKOUSPAN_PERIOD: {
            defaultValue: '52',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          DISPLACEMENT: {
            defaultValue: '26',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          separator1: true,
          CANDLES_LENGTH: {
            defaultValue: '400',
            inputType: 'range',
            rangeLowHigh: [1, 400],
            rangeInput: [1, 400],
          },
        },
      },
      Advanced: {
        description: 'Various advanced settings',
        parameters: {
          MARKET_BUY: {
            defaultValue: true,
            inputType: 'boolean',
          },
          MARKET_SELL: {
            defaultValue: true,
            inputType: 'boolean',
          },
          MARKET_CLOSE: {
            defaultValue: false,
            inputType: 'boolean',
          },
          MAKER_FEES: {
            defaultValue: false,
            inputType: 'boolean',
          },
          ROE_SPREAD: {
            defaultValue: '0',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0, 20],
            rangeInput: [-100, 999],
          },
        },
      },
    },
    'builder (futures)': {
      info: {
        description: 'Create your own strategy using readily available strategy options.',
        docsUrl: 'https://wiki.gunthy.org/trading-strategy-options/about-gunbot-strategies/',
        market: 'futures',
        license: ['standard', 'standardtv', 'pro', 'protv', 'ultimate', 'promoultimate', 'br', 'mm'],
        exchangeBlacklist: ['bybit', 'okex5', 'okgunbot'],
      },
      'Pair name': {
        description: 'Set which pair to trade.',
        parameters: {
          PAIR_NAME: {
            defaultValue: 'USDT-BTC',
            tooltip: `Gunbot uses a standardized format for entering trading pairs, to allow a uniform way of adding pairs across platforms. Exchanges often use a different notation.
            
The general format is: BASECOIN-QUOTECOIN
            
All pairs with BTC as base currency are written like: BTC-ETH, BTC-ATOM, BTC-ETH
With a BTC-XXX pair, the aim is realize growth in BTC balance.
            
All pairs with USDT as base currency are written like: USDT-BTC, USDT-ETH, USDT-XMR
With an USDT-XXX pair, the aim is realize growth in USDT balance.`,
            inputType: 'string',
          },
        },
      },
      'Long settings': {
        description: 'Primary long trigger',
        parameters: {
          bb: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            LONG_LEVEL: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            LOW_BB: {
              defaultValue: '0.1',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0.1, 50],
              rangeInput: [-500, 500],
            },
          },
          gain: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            LONG_LEVEL: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
          },
          ichimoku: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
          pp: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            PP_BUY: {
              defaultValue: '1000',
              inputType: 'string',
            },
          },
          tsa: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
          tssl: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            LONG_LEVEL: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            BUY_RANGE: {
              defaultValue: '0.3',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.01, 5],
              rangeInput: [0.01, 50],
            },
          },
          adx: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
          atrts: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
          bbta: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            LOW_BB: {
              defaultValue: '0.1',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0.1, 50],
              rangeInput: [-500, 500],
            },
          },
          emaspread: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
          macd: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
          macdh: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
          smacross: {
            BUY_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
        },
      },
      'Short settings': {
        description: 'Primary short trigger',
        parameters: {
          bb: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            SHORT_LEVEL: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            HIGH_BB: {
              defaultValue: '0.1',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0.1, 50],
              rangeInput: [-500, 500],
            },
          },
          gain: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            SHORT_LEVEL: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
          },
          ichimoku: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
          pp: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            PP_SELL: {
              defaultValue: '1000',
              inputType: 'string',
            },
          },
          tsa: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
          tssl: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            SHORT_LEVEL: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 500],
            },
            SELL_RANGE: {
              defaultValue: '0.3',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.01, 5],
              rangeInput: [0.01, 50],
            },
          },
          adx: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
          atrts: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
          bbta: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
            HIGH_BB: {
              defaultValue: '0.1',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0.1, 50],
              rangeInput: [-500, 500],
            },
          },
          emaspread: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
          macd: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
          macdh: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
          smacross: {
            SELL_ENABLED: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
        },
      },
      'Close position': {
        description: 'Setting options to take profit',
        parameters: {
          adx: {
            ROE: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 50],
              rangeInput: [-100, 999],
            },
            ROE_TRAILING: {
              defaultValue: false,
              inputType: 'boolean',
            },
            ROE_LIMIT: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
            ROE_SCALPER: {
              defaultValue: false,
              inputType: 'boolean',
            },
            PND: {
              defaultValue: false,
              inputType: 'boolean',
            },
            PND_PROTECTION: {
              defaultValue: '1.5',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
          },
          atrts: {
            ROE: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 50],
              rangeInput: [-100, 999],
            },
            ROE_LIMIT: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
            ROE_SCALPER: {
              defaultValue: false,
              inputType: 'boolean',
            },
            PND: {
              defaultValue: false,
              inputType: 'boolean',
            },
            PND_PROTECTION: {
              defaultValue: '1.5',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
          },
          bb: {
            ROE: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 50],
              rangeInput: [-100, 999],
            },
            ROE_LIMIT: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
            ROE_SCALPER: {
              defaultValue: false,
              inputType: 'boolean',
            },
            PND: {
              defaultValue: false,
              inputType: 'boolean',
            },
            PND_PROTECTION: {
              defaultValue: '1.5',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
          },
          bbta: {
            ROE: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 50],
              rangeInput: [-100, 999],
            },
            ROE_LIMIT: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
            ROE_SCALPER: {
              defaultValue: false,
              inputType: 'boolean',
            },
            PND: {
              defaultValue: false,
              inputType: 'boolean',
            },
            PND_PROTECTION: {
              defaultValue: '1.5',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
          },
          emaspread: {
            ROE: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 50],
              rangeInput: [-100, 999],
            },
            ROE_LIMIT: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
            ROE_SCALPER: {
              defaultValue: false,
              inputType: 'boolean',
            },
            PND: {
              defaultValue: false,
              inputType: 'boolean',
            },
            PND_PROTECTION: {
              defaultValue: '1.5',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
          },
          ichimoku: {
            ROE: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 50],
              rangeInput: [-100, 999],
            },
            ROE_LIMIT: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
            ROE_SCALPER: {
              defaultValue: false,
              inputType: 'boolean',
            },
            ROE_CLOSE: {
              defaultValue: false,
              inputType: 'boolean',
            },
            KUMO_CLOSE: {
              defaultValue: false,
              inputType: 'boolean',
            },
            TENKAN_CLOSE: {
              defaultValue: true,
              inputType: 'boolean',
            },
            KIJUN_CLOSE: {
              defaultValue: false,
              inputType: 'boolean',
            },
          },
          gain: {
            ROE: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 50],
              rangeInput: [-100, 999],
            },
            ROE_LIMIT: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
            ROE_SCALPER: {
              defaultValue: false,
              inputType: 'boolean',
            },
            PND: {
              defaultValue: false,
              inputType: 'boolean',
            },
            PND_PROTECTION: {
              defaultValue: '1.5',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
          },
          macd: {
            ROE: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 50],
              rangeInput: [-100, 999],
            },
            ROE_LIMIT: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
            ROE_SCALPER: {
              defaultValue: false,
              inputType: 'boolean',
            },
            PND: {
              defaultValue: false,
              inputType: 'boolean',
            },
            PND_PROTECTION: {
              defaultValue: '1.5',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
          },
          macdh: {
            ROE: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 50],
              rangeInput: [-100, 999],
            },
            ROE_LIMIT: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
            ROE_SCALPER: {
              defaultValue: false,
              inputType: 'boolean',
            },
            PND: {
              defaultValue: false,
              inputType: 'boolean',
            },
            PND_PROTECTION: {
              defaultValue: '1.5',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
          },
          pp: {
            ROE: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 50],
              rangeInput: [-100, 999],
            },
            ROE_LIMIT: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
            ROE_SCALPER: {
              defaultValue: false,
              inputType: 'boolean',
            },
            PND: {
              defaultValue: false,
              inputType: 'boolean',
            },
            PND_PROTECTION: {
              defaultValue: '1.5',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
          },
          smacross: {
            ROE: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 50],
              rangeInput: [-100, 999],
            },
            ROE_LIMIT: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
            ROE_SCALPER: {
              defaultValue: false,
              inputType: 'boolean',
            },
            PND: {
              defaultValue: false,
              inputType: 'boolean',
            },
            PND_PROTECTION: {
              defaultValue: '1.5',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
          },
          tsa: {
            ROE: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 50],
              rangeInput: [-100, 999],
            },
            ROE_LIMIT: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
            ROE_SCALPER: {
              defaultValue: false,
              inputType: 'boolean',
            },
            PND: {
              defaultValue: false,
              inputType: 'boolean',
            },
            PND_PROTECTION: {
              defaultValue: '1.5',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
          },
          tssl: {
            ROE: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 50],
              rangeInput: [-100, 999],
            },
            ROE_LIMIT: {
              defaultValue: '1',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
            ROE_SCALPER: {
              defaultValue: false,
              inputType: 'boolean',
            },
            PND: {
              defaultValue: false,
              inputType: 'boolean',
            },
            PND_PROTECTION: {
              defaultValue: '1.5',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0, 20],
              rangeInput: [-100, 999],
            },
          },
        },
      },
      'Balance settings': {
        description: 'Configure how much the strategy can invest',
        parameters: {
          TRADING_LIMIT: {
            defaultValue: '20', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `The amount to invest for each individual buy order.`,
            inputType: 'string',
          },
          TL_ALLIN: {
            defaultValue: false,
            inputType: 'boolean',
          },
          MAX_OPEN_CONTRACTS: {
            defaultValue: '0',
            inputType: 'string',
          },
          LEVERAGE: {
            defaultValue: '0',
            inputType: 'range',
            exchangeSpecific: ['bitmex', 'bitmex_testnet', 'futures_gunthy', 'binanceFutures'],
            rangeLowHigh: [0, 125],
            rangeInput: [0, 700],
          },
        },
      },
      Indicators: {
        description: 'Indicators used in selected buy and sell methods',
        parameters: {
          adx: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
            ADX_LEVEL: {
              defaultValue: '25',
              inputType: 'range',
              step: 1,
              rangeLowHigh: [10, 70],
              rangeInput: [1, 99],
            },
            DI_PERIOD: {
              defaultValue: '14',
              inputType: 'range',
              step: 1,
              rangeLowHigh: [10, 50],
              rangeInput: [1, 400],
            },
          },
          atrts: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
            ATRX: {
              defaultValue: '0.5',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0.1, 5],
              rangeInput: [0.1, 20],
            },
            ATR_PERIOD: {
              defaultValue: '14',
              inputType: 'range',
              step: 1,
              rangeLowHigh: [10, 50],
              rangeInput: [1, 400],
            },
          },
          bb: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
            SMAPERIOD: {
              defaultValue: '30',
              tooltip: `Number of candles used to calculate bollinger bands`,
              inputType: 'range',
              rangeLowHigh: [5, 80],
              rangeInput: [1, 500],
            },
            STDV: {
              defaultValue: '2',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0.5, 3],
              rangeInput: [0.1, 30],
            },
            EMA1: {
              defaultValue: '16',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            EMA2: {
              defaultValue: '8',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            MEAN_REVERSION: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
          bbta: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
            SMAPERIOD: {
              defaultValue: '30',
              tooltip: `Number of candles used to calculate bollinger bands`,
              inputType: 'range',
              rangeLowHigh: [5, 80],
              rangeInput: [1, 500],
            },
            STDV: {
              defaultValue: '2',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0.5, 3],
              rangeInput: [0.1, 30],
            },
            MEAN_REVERSION: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
          emaspread: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
            EMAx: {
              defaultValue: '0.5',
              inputType: 'range',
              step: 0.1,
              rangeLowHigh: [0.1, 5],
              rangeInput: [0.1, 20],
            },
            EMA1: {
              defaultValue: '16',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            EMA2: {
              defaultValue: '8',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
          },
          ichimoku: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
            TENKAN_PERIOD: {
              defaultValue: '9',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            KIJUN_PERIOD: {
              defaultValue: '26',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            SENKOUSPAN_PERIOD: {
              defaultValue: '52',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            DISPLACEMENT: {
              defaultValue: '26',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            ICHIMOKU_PROTECTION: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
          gain: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
            EMA1: {
              defaultValue: '16',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            EMA2: {
              defaultValue: '8',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            MEAN_REVERSION: {
              defaultValue: false,
              inputType: 'boolean',
            },
          },
          macd: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
            MACD_SHORT: {
              defaultValue: '5',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            MACD_LONG: {
              defaultValue: '20',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            MACD_SIGNAL: {
              defaultValue: '10',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
          },
          macdh: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
            MACD_SHORT: {
              defaultValue: '5',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            MACD_LONG: {
              defaultValue: '20',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            MACD_SIGNAL: {
              defaultValue: '10',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
          },
          pp: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              inputType: 'select',
            },
            MEAN_REVERSION: {
              defaultValue: false,
              inputType: 'boolean',
            },
          },
          smacross: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              inputType: 'select',
            },
            SLOW_SMA: {
              defaultValue: '20',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            FAST_SMA: {
              defaultValue: '10',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
          },
          tsa: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
          },
          tssl: {
            PERIOD: {
              defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
              tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
              inputType: 'select',
            },
            EMA1: {
              defaultValue: '16',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            EMA2: {
              defaultValue: '8',
              inputType: 'range',
              rangeLowHigh: [2, 50],
              rangeInput: [1, 400],
            },
            MEAN_REVERSION: {
              defaultValue: true,
              inputType: 'boolean',
            },
          },
        },
      },
      DCA: {
        description: 'Dollar cost averaging',
        parameters: {
          DCA_METHOD: {
            defaultValue: 'NONE',
            options: ['NONE', 'TENKAN'],
            inputType: 'select',
          },
          DCA_SPREAD: {
            defaultValue: '2',
            inputType: 'range',
            step: 0.1,
            rangeLowHigh: [0.1, 20],
            rangeInput: [0.1, 999],
          },
          MAX_OPEN_CONTRACTS: {
            defaultValue: '999999',
            inputType: 'string',
          },
        },
      },
      'Confirming indicators': {
        description: 'Additional indicator conditions',
        parameters: {
          ADX_ENABLED: {
            defaultValue: false,
            inputType: 'boolean',
          },
          ADX_LEVEL: {
            defaultValue: '25',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [1, 99],
          },
          DI_PERIOD: {
            defaultValue: '14',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          separator: true,
          BTC_PND_PROTECTION: {
            defaultValue: false,
            inputType: 'boolean',
          },
          BTC_PND_PERIOD: {
            defaultValue: '14',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          BTC_MONEY_FLOW: {
            defaultValue: '25',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [1, 99],
          },
          separator1: true,
          EMASPREAD: {
            defaultValue: false,
            inputType: 'boolean',
          },
          EMAx: {
            defaultValue: '0.5',
            inputType: 'range',
            step: 0.1,
            rangeLowHigh: [0.1, 5],
            rangeInput: [0.1, 20],
          },
          separator2: true,
          MFI_ENABLED: {
            defaultValue: false,
            inputType: 'boolean',
          },
          MFI_BUY_LEVEL: {
            defaultValue: '30',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [-1001, 99],
          },
          MFI_SELL_LEVEL: {
            defaultValue: '70',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [-1001, 99],
          },
          MFI_LENGTH: {
            defaultValue: '14',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          separator3: true,
          RSI_BUY_ENABLED: {
            defaultValue: false,
            inputType: 'boolean',
          },
          RSI_BUY_LEVEL: {
            defaultValue: '30',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [1, 99],
          },
          RSI_SELL_ENABLED: {
            defaultValue: false,
            inputType: 'boolean',
          },
          RSI_SELL_LEVEL: {
            defaultValue: '70',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [1, 99],
          },
          RSI_METHOD: {
            defaultValue: 'oscillator',
            options: ['oscillator', 'cross'],
            inputType: 'select',
          },
          RSI_LENGTH: {
            defaultValue: '14',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          separator4: true,
          STOCH_ENABLED: {
            defaultValue: false,
            inputType: 'boolean',
          },
          STOCH_BUY_LEVEL: {
            defaultValue: '30',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [-1001, 99],
          },
          STOCH_SELL_LEVEL: {
            defaultValue: '70',
            inputType: 'range',
            rangeLowHigh: [1, 99],
            rangeInput: [-1001, 99],
          },
          STOCH_METHOD: {
            defaultValue: 'oscillator',
            options: ['oscillator', 'cross'],
            inputType: 'select',
          },
          STOCH_K: {
            defaultValue: '14',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          SLOW_STOCH_K: {
            defaultValue: '3',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          STOCH_D: {
            defaultValue: '3',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          separator5: true,
          STOCHRSI_ENABLED: {
            defaultValue: false,
            inputType: 'boolean',
          },
          STOCHRSI_BUY_LEVEL: {
            defaultValue: '0.2',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 0.99],
            rangeInput: [0.01, 0.99],
          },
          STOCHRSI_SELL_LEVEL: {
            defaultValue: '0.8',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 0.99],
            rangeInput: [0.01, 0.99],
          },
          STOCHRSI_METHOD: {
            defaultValue: 'oscillator',
            options: ['oscillator', 'cross'],
            inputType: 'select',
          },
          STOCHRSI_LENGTH: {
            defaultValue: '14',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          separator6: true,
          STDV: {
            defaultValue: '2',
            inputType: 'range',
            step: 0.1,
            rangeLowHigh: [0.5, 3],
            rangeInput: [0.1, 30],
          },
          SMAPERIOD: {
            defaultValue: '50',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 400],
          },
          CANDLES_LENGTH: {
            defaultValue: '400',
            inputType: 'range',
            rangeLowHigh: [1, 400],
            rangeInput: [1, 400],
          },
          EMA_LENGTH: {
            defaultValue: '100',
            inputType: 'range',
            rangeLowHigh: [1, 400],
            rangeInput: [1, 400],
          },
        },
      },
      'Stop loss': {
        description: 'Handle losing trades',
        parameters: {
          adx: {
            STOP_LIMIT: {
              defaultValue: '999999',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 999999],
            },
            SL_DISABLE_BUY: {
              defaultValue: false,
              inputType: 'boolean',
            },
            SL_DISABLE_SELL: {
              defaultValue: false,
              inputType: 'boolean',
            },
            STOP_BUY: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
            STOP_SELL: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
          },
          atrts: {
            STOP_LIMIT: {
              defaultValue: '999999',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 999999],
            },
            SL_DISABLE_BUY: {
              defaultValue: false,
              inputType: 'boolean',
            },
            SL_DISABLE_SELL: {
              defaultValue: false,
              inputType: 'boolean',
            },
            STOP_BUY: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
            STOP_SELL: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
          },
          bb: {
            STOP_LIMIT: {
              defaultValue: '999999',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 999999],
            },
            SL_DISABLE_BUY: {
              defaultValue: false,
              inputType: 'boolean',
            },
            SL_DISABLE_SELL: {
              defaultValue: false,
              inputType: 'boolean',
            },
            STOP_BUY: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
            STOP_SELL: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
          },
          bbta: {
            STOP_LIMIT: {
              defaultValue: '999999',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 999999],
            },
            SL_DISABLE_BUY: {
              defaultValue: false,
              inputType: 'boolean',
            },
            SL_DISABLE_SELL: {
              defaultValue: false,
              inputType: 'boolean',
            },
            STOP_BUY: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
            STOP_SELL: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
          },
          emaspread: {
            STOP_LIMIT: {
              defaultValue: '999999',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 999999],
            },
            SL_DISABLE_BUY: {
              defaultValue: false,
              inputType: 'boolean',
            },
            SL_DISABLE_SELL: {
              defaultValue: false,
              inputType: 'boolean',
            },
            STOP_BUY: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
            STOP_SELL: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
          },
          ichimoku: {
            KUMO_STOP: {
              defaultValue: true,
              inputType: 'boolean',
            },
            TENKAN_STOP: {
              defaultValue: false,
              inputType: 'boolean',
            },
            KIJUN_STOP: {
              defaultValue: false,
              inputType: 'boolean',
            },
            STOP_BUY: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
            STOP_SELL: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
          },
          gain: {
            STOP_LIMIT: {
              defaultValue: '999999',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 999999],
            },
            SL_DISABLE_BUY: {
              defaultValue: false,
              inputType: 'boolean',
            },
            SL_DISABLE_SELL: {
              defaultValue: false,
              inputType: 'boolean',
            },
            STOP_BUY: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
            STOP_SELL: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
          },
          macd: {
            STOP_LIMIT: {
              defaultValue: '999999',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 999999],
            },
            SL_DISABLE_BUY: {
              defaultValue: false,
              inputType: 'boolean',
            },
            SL_DISABLE_SELL: {
              defaultValue: false,
              inputType: 'boolean',
            },
            STOP_BUY: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
            STOP_SELL: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
          },
          macdh: {
            STOP_LIMIT: {
              defaultValue: '999999',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 999999],
            },
            SL_DISABLE_BUY: {
              defaultValue: false,
              inputType: 'boolean',
            },
            SL_DISABLE_SELL: {
              defaultValue: false,
              inputType: 'boolean',
            },
            STOP_BUY: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
            STOP_SELL: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
          },
          pp: {
            STOP_LIMIT: {
              defaultValue: '999999',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 999999],
            },
            SL_DISABLE_BUY: {
              defaultValue: false,
              inputType: 'boolean',
            },
            SL_DISABLE_SELL: {
              defaultValue: false,
              inputType: 'boolean',
            },
            STOP_BUY: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
            STOP_SELL: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
          },
          smacross: {
            STOP_LIMIT: {
              defaultValue: '999999',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 999999],
            },
            SL_DISABLE_BUY: {
              defaultValue: false,
              inputType: 'boolean',
            },
            SL_DISABLE_SELL: {
              defaultValue: false,
              inputType: 'boolean',
            },
            STOP_BUY: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
            STOP_SELL: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
          },
          tsa: {
            STOP_LIMIT: {
              defaultValue: '999999',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 999999],
            },
            SL_DISABLE_BUY: {
              defaultValue: false,
              inputType: 'boolean',
            },
            SL_DISABLE_SELL: {
              defaultValue: false,
              inputType: 'boolean',
            },
            STOP_BUY: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
            STOP_SELL: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
          },
          tssl: {
            STOP_LIMIT: {
              defaultValue: '999999',
              inputType: 'range',
              step: 0.01,
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 999999],
            },
            SL_DISABLE_BUY: {
              defaultValue: false,
              inputType: 'boolean',
            },
            SL_DISABLE_SELL: {
              defaultValue: false,
              inputType: 'boolean',
            },
            STOP_BUY: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
            STOP_SELL: {
              defaultValue: '0',
              inputType: 'range',
              step: 0.01,
              exchangeSpecific: ['bitmex', 'bitmex_testnet'],
              rangeLowHigh: [0.1, 5],
              rangeInput: [-100, 99999],
            },
          },
        },
      },
      Misc: {
        description: 'Various other settings',
        parameters: {
          MARKET_BUY: {
            defaultValue: false,
            inputType: 'boolean',
          },
          MARKET_SELL: {
            defaultValue: false,
            inputType: 'boolean',
          },
          MARKET_CLOSE: {
            defaultValue: false,
            inputType: 'boolean',
          },
          MARKET_STOP: {
            defaultValue: false,
            inputType: 'boolean',
          },
          separator: true,
          PANIC_SELL: {
            defaultValue: false,
            inputType: 'boolean',
          },
          separator1: true,
          TRADES_TIMEOUT: {
            defaultValue: '0',
            inputType: 'string',
          },
          SAFETY_TIMER: {
            defaultValue: '1800',
            inputType: 'string',
          },
          IGNORE_TRADES_BEFORE: {
            defaultValue: '0',
            inputType: 'string',
          },
          separator2: true,
          NBA: {
            defaultValue: '0',
            inputType: 'string',
          },
          ROE_SPREAD: {
            defaultValue: '0',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0, 20],
            rangeInput: [-100, 999],
          },
          separator3: true,
          PRE_ORDER: {
            defaultValue: false,
            inputType: 'boolean',
          },
          PRE_ORDER_GAP: {
            defaultValue: '0',
            inputType: 'string',
          },
          MAKER_FEES: {
            defaultValue: false,
            inputType: 'boolean',
          },
        },
      },
    },
    market_maker: {
      info: {
        description: 'Liquidity providing strategy for spot markets',
        market: 'spot',
        license: ['mm'],
        exchangeBlacklist: ['bybit'],
      },
      'Pair name': {
        description: 'Set which pair to trade.',
        parameters: {
          PAIR_NAME: {
            defaultValue: 'USDT-BTC',
            tooltip: `Gunbot uses a standardized format for entering trading pairs, to allow a uniform way of adding pairs across platforms. Exchanges often use a different notation.
            
The general format is: BASECOIN-QUOTECOIN
            
All pairs with BTC as base currency are written like: BTC-ETH, BTC-ATOM, BTC-ETH
With a BTC-XXX pair, the aim is realize growth in BTC balance.
            
All pairs with USDT as base currency are written like: USDT-BTC, USDT-ETH, USDT-XMR
With an USDT-XXX pair, the aim is realize growth in USDT balance.`,
            inputType: 'string',
          },
        },
      },
      'Regular trades': {
        description: 'Place orders up and down',
        parameters: {
          MAX_OPEN_CONTRACTS: {
            defaultValue: '1',
            inputType: 'range',
            rangeLowHigh: [0, 20],
            rangeInput: [0, 999],
          },
          GAIN: {
            defaultValue: '0.1',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0, 1],
            rangeInput: [0, 100],
          },
          IGNORE_TRADES_BEFORE: {
            defaultValue: '0',
            inputType: 'string',
          },
          unit_cost: {
            defaultValue: false,
            inputType: 'boolean',
          },
        },
      },
      'Balance settings': {
        description: 'Configure how much the strategy can invest',
        parameters: {
          TRADING_LIMIT: {
            defaultValue: '20', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `The amount to invest for each individual buy order.`,
            inputType: 'string',
          },
          MIN_VOLUME_TO_SELL: {
            defaultValue: '10',
            inputType: 'string',
          },
          INITIAL_CAPITAL: {
            defaultValue: '0',
            inputType: 'string',
          },
        },
      },
      DCA: {
        description: 'Dollar cost averaging',
        parameters: {
          MM_DCA: {
            defaultValue: false,
            inputType: 'boolean',
          },
          MAX_DCA_ORDERS: {
            defaultValue: '3',
            inputType: 'range',
            rangeLowHigh: [0, 20],
            rangeInput: [0, 999],
          },
          DCA_SPREAD: {
            defaultValue: '2',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0, 2],
            rangeInput: [0, 100],
          },
          DCA_SPREAD_CAP: {
            defaultValue: '2',
            inputType: 'range',
            rangeLowHigh: [0, 20],
            rangeInput: [0, 999],
          },
        },
      },
      'Stop loss': {
        description: 'Handle losing trades',
        parameters: {
          STOP_LIMIT: {
            defaultValue: '999999',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.1, 5],
            rangeInput: [-100, 999999],
          },
          SL_DISABLE_BUY: {
            defaultValue: false,
            inputType: 'boolean',
          },
        },
      },
    },
    'market_maker (futures)': {
      info: {
        description: 'Liquidity providing strategy for futures markets',
        market: 'futures',
        license: ['mm'],
        exchangeBlacklist: ['bybit', 'okex5', 'okgunbot'],
        exchangeWhitelist: ['bitmex', 'bitmex_testnet', 'binanceFutures', 'krakenFutures', 'futures_gunthy', 'ftx'],
      },
      'Pair name': {
        description: 'Set which pair to trade.',
        parameters: {
          PAIR_NAME: {
            defaultValue: 'USDT-BTC',
            tooltip: `Gunbot uses a standardized format for entering trading pairs, to allow a uniform way of adding pairs across platforms. Exchanges often use a different notation.
            
The general format is: BASECOIN-QUOTECOIN
            
All pairs with BTC as base currency are written like: BTC-ETH, BTC-ATOM, BTC-ETH
With a BTC-XXX pair, the aim is realize growth in BTC balance.
            
All pairs with USDT as base currency are written like: USDT-BTC, USDT-ETH, USDT-XMR
With an USDT-XXX pair, the aim is realize growth in USDT balance.`,
            inputType: 'string',
          },
        },
      },
      'Core settings': {
        description: 'Invest per order and order placement',
        parameters: {
          TRADING_LIMIT: {
            defaultValue: '20', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `The amount to invest for each individual buy order.`,
            inputType: 'string',
          },
          MAX_BUY: {
            defaultValue: '5',
            inputType: 'range',
            rangeLowHigh: [0, 20],
            rangeInput: [0, 999],
          },
          MAX_SELL: {
            defaultValue: '5',
            inputType: 'range',
            rangeLowHigh: [0, 20],
            rangeInput: [0, 999],
          },
          separator1: true,
          CANCEL_SPREAD: {
            defaultValue: '5',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 6],
            rangeInput: [-100, 100],
          },
          FIRST_ORDER_SPREAD: {
            defaultValue: '0.02',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 2],
            rangeInput: [-100, 100],
          },
          MM_SPREAD: {
            defaultValue: '0.02',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 2],
            rangeInput: [-100, 100],
          },
        },
      },
      'Close position': {
        description: 'Control how to take profit',
        parameters: {
          ROE: {
            defaultValue: '1',
            inputType: 'range',
            step: 0.1,
            rangeLowHigh: [0, 50],
            rangeInput: [-100, 999],
          },
          ROE_TRAILING: {
            defaultValue: false,
            inputType: 'boolean',
          },
          ROE_LIMIT: {
            defaultValue: '1',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0, 20],
            rangeInput: [-100, 999],
          },
          ROE_SCALPER: {
            defaultValue: false,
            inputType: 'boolean',
          },
          ROE_SPREAD: {
            defaultValue: '0',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0, 20],
            rangeInput: [-100, 999],
          },
          separator: true,
          PND: {
            defaultValue: false,
            inputType: 'boolean',
          },
          PND_PROTECTION: {
            defaultValue: '1.5',
            inputType: 'range',
            step: 0.1,
            rangeLowHigh: [0, 20],
            rangeInput: [-100, 999],
          },
        },
      },
      'Risk management': {
        description: 'Set limits to control risk',
        parameters: {
          MAX_OPEN_CONTRACTS: {
            defaultValue: '999999',
            inputType: 'string',
          },
          MAX_LOSS: {
            defaultValue: '999999',
            inputType: 'string',
          },
          REDUCING_RATIO: {
            defaultValue: '4',
            inputType: 'string',
          },
          INITIAL_CAPITAL: {
            defaultValue: '0.01',
            inputType: 'string',
          },
          CAPITAL_RISK: {
            defaultValue: '0.01',
            inputType: 'string',
          },
          INVESTED_PERC: {
            defaultValue: '0.01',
            inputType: 'string',
          },
          separator: true,
          SR_RATIO: {
            defaultValue: '1',
            inputType: 'string',
          },
          SR_INVESTED_PERC: {
            defaultValue: '0.01',
            inputType: 'string',
          },
          SR_SPREAD: {
            defaultValue: '0.05',
            inputType: 'string',
          },
          SR_LIMIT_LONG: {
            defaultValue: '1',
            inputType: 'string',
          },
          SR_LIMIT_SHORT: {
            defaultValue: '1',
            inputType: 'string',
          },
          separator2: true,
          STOP_LIMIT: {
            defaultValue: '999999',
            inputType: 'string',
          },
        },
      },
      DCA: {
        description: 'Additional DCA options',
        parameters: {
          DCA_METHOD: {
            defaultValue: 'NATIVE',
            options: ['NATIVE', 'TENKAN'],
            inputType: 'select',
          },
          DCA_SPREAD: {
            defaultValue: '0.2',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0, 5],
            rangeInput: [-100, 999],
          },
          separator: true,
          PULLBACK_ENABLED: {
            defaultValue: false,
            inputType: 'boolean',
          },
          PULLBACK_SIDE: {
            defaultValue: 'BOTH',
            options: ['LONG', 'SHORT', 'BOTH'],
            inputType: 'select',
          },
          PULLBACK_DCA_PERC: {
            defaultValue: '0.5',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0, 5],
            rangeInput: [-100, 999],
          },
          PULLBACK_DCA_MULTIPLIER: {
            defaultValue: '1',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0, 2],
            rangeInput: [0, 999],
          },
        },
      },
      'Strategy variants': {
        description: 'Use different entry or dca logic',
        parameters: {
          FIBONACCI: {
            defaultValue: false,
            inputType: 'boolean',
          },
          FIB_DCA_PERC: {
            defaultValue: '0.3',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0, 5],
            rangeInput: [-100, 999],
          },
          separator: true,
          SupportResistance: {
            defaultValue: false,
            inputType: 'boolean',
          },
          SupRes_ALLOW_DCA: {
            defaultValue: false,
            inputType: 'boolean',
          },
          SupRes_SPREAD: {
            defaultValue: '0.1',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 5],
            rangeInput: [0.01, 100],
          },
          SupRes_LVL_SPREAD: {
            defaultValue: '1',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.01, 5],
            rangeInput: [0.01, 100],
          },
          SupRes_MAX: {
            defaultValue: '0',
            inputType: 'string',
          },
          SupRes_TIMER: {
            defaultValue: '300',
            inputType: 'string',
          },
          SupResMinROE: {
            defaultValue: '20',
            inputType: 'string',
          },
          BUY_ENABLED: {
            defaultValue: true,
            inputType: 'boolean',
          },
          SELL_ENABLED: {
            defaultValue: true,
            inputType: 'boolean',
          },
          separator1: true,
          GRID: {
            defaultValue: false,
            inputType: 'boolean',
          },
          GRID_SPREAD: {
            defaultValue: '0.3',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0, 5],
            rangeInput: [-100, 999],
          },
          GRID_SIDE: {
            defaultValue: 'BOTH',
            options: ['LONG', 'SHORT', 'BOTH'],
            inputType: 'select',
          },
          GRID_MAX: {
            defaultValue: '0',
            inputType: 'string',
          },
          GRID_TIMER: {
            defaultValue: '300',
            inputType: 'string',
          },
          x125: {
            defaultValue: false,
            inputType: 'boolean',
          },
          separator2: true,
          MOTION_OF_THE_OCEAN: {
            defaultValue: false,
            inputType: 'boolean',
          },
          MOTO_DCA_PERC: {
            defaultValue: '0.5',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0, 5],
            rangeInput: [-100, 999],
          },
          MOTO_SIDE: {
            defaultValue: 'BOTH',
            options: ['LONG', 'SHORT', 'BOTH'],
            inputType: 'select',
          },
          MOTO_DCA_MULTIPLIER: {
            defaultValue: '1',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0, 2],
            rangeInput: [0, 999],
          },
          MOTO_TIMER: {
            defaultValue: '900',
            inputType: 'string',
          },
          separator3: true,
          PULLBACK: {
            defaultValue: false,
            inputType: 'boolean',
          },
          PULLBACK_DCA_PERC: {
            defaultValue: '0.5',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0, 5],
            rangeInput: [-100, 999],
          },
          PULLBACK_SIDE: {
            defaultValue: 'BOTH',
            options: ['LONG', 'SHORT', 'BOTH'],
            inputType: 'select',
          },
          PULLBACK_DCA_MULTIPLIER: {
            defaultValue: '1',
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0, 2],
            rangeInput: [0, 999],
          },
          separator4: true,
          oneSCALPER: {
            defaultValue: false,
            inputType: 'boolean',
          },
          oneSCALPER_DCA: {
            defaultValue: false,
            inputType: 'boolean',
          },
          oneSCALPER_TIMER: {
            defaultValue: '900',
            inputType: 'string',
          },
          separator5: true,
          EWO: {
            defaultValue: false,
            inputType: 'boolean',
          },
          separator6: true,
          futuresGrid: {
            defaultValue: false,
            inputType: 'boolean',
          },
        },
      },
      Indicators: {
        description: 'Relevant indicator settings',
        parameters: {
          PERIOD: {
            defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.\n\nThis strategy additionally uses a hardcoded trend module that watches 15m, 1h and 4h timeframes.`,
            inputType: 'select',
          },
          EMA1: {
            defaultValue: '16',
            inputType: 'range',
            rangeLowHigh: [2, 150],
            rangeInput: [1, 400],
          },
          EMA2: {
            defaultValue: '8',
            inputType: 'range',
            rangeLowHigh: [2, 150],
            rangeInput: [1, 400],
          },
          EMA3: {
            defaultValue: '150',
            inputType: 'range',
            rangeLowHigh: [2, 150],
            rangeInput: [1, 400],
          },
          EMA_LENGTH: {
            defaultValue: '150',
            inputType: 'range',
            rangeLowHigh: [1, 400],
            rangeInput: [1, 500],
          },
          SMAPERIOD: {
            defaultValue: '50',
            inputType: 'range',
            rangeLowHigh: [2, 50],
            rangeInput: [1, 500],
          },
          CANDLES_LENGTH: {
            defaultValue: '400',
            inputType: 'range',
            rangeLowHigh: [1, 400],
            rangeInput: [1, 500],
          },
        },
      },
      Misc: {
        description: 'Various additional settings',
        parameters: {
          MARKET_CLOSE: {
            defaultValue: false,
            inputType: 'boolean',
          },
          MARKET_BUY: {
            defaultValue: false,
            inputType: 'boolean',
          },
          MARKET_SELL: {
            defaultValue: false,
            inputType: 'boolean',
          },
          separator: true,
          SAFETY_TIMER: {
            defaultValue: '900',
            inputType: 'string',
          },
          HEDGE_MODE: {
            defaultValue: 'BOTH',
            options: ['LONG', 'SHORT', 'BOTH'],
            inputType: 'select',
          },
          FLIP: {
            defaultValue: true,
            inputType: 'boolean',
          },
          LEVERAGE: {
            defaultValue: '0',
            inputType: 'range',
            exchangeSpecific: ['bitmex', 'bitmex_testnet', 'binanceFutures', 'futures_gunthy'],
            rangeLowHigh: [0, 125],
            rangeInput: [0, 700],
          },
          separator1: true,
          PRE_ORDER: {
            defaultValue: false,
            inputType: 'boolean',
          },
          PRE_ORDER_GAP: {
            defaultValue: '0',
            inputType: 'string',
          },
        },
      },
    },
    stepgridhedge: {
      info: {
        description:
          'Grid trading in hedge mode. Similar to stepGrid, but on two sides and without partial closing trades below break even.',
        docsUrl: 'https://wiki.gunthy.org/trading-strategy-options/futures/stepgridhedge/',
        market: 'futures',
        license: ['standard', 'standardtv', 'pro', 'protv', 'ultimate', 'promoultimate', 'br', 'mm'],
        exchangeWhitelist: ['bybit', 'okex5', 'okgunbot'],
      },
      'Pair name': {
        description: 'Set which pair to trade.',
        parameters: {
          PAIR_NAME: {
            defaultValue: 'USDT-BTC',
            tooltip: `Enter the long pair name. For example USDT-ETH-LONG.

This is the pair the strategy runs on and where settings can be controlled. Strategy fires orders on both long and short side.`,
            inputType: 'string',
          },
          PAIR_NAME_SHORT: {
            defaultValue: 'USDT-BTC',
            tooltip: `Enter the short pair name for the same market as the long side. For example USDT-ETH-SHORT.
            
This pair will get added with read only strategy settings. Used to collect data and display orders on the trading chart.`,
            inputType: 'string',
          },
        },
      },
      'Balance settings': {
        description: 'Configure how much the strategy can invest',
        parameters: {
          TRADING_LIMIT: {
            defaultValue: '20', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `The minimum amount to invest for each order.\n\nBybit: represents notional value \n\nOKX / okGunbot: represents contracts`,
            inputType: 'string',
          },
          TRADING_LIMIT_SHORT: {
            defaultValue: '20', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `The minimum amount to invest for each short order.\n\nBybit: represents notional value \n\nOKX / okGunbot: represents contracts`,
            inputType: 'string',
          },
          MAX_BUY_COUNT: {
            defaultValue: '75',
            tooltip: `Limits maximum position size. \n\nWhen max is reached, the strategy goes in close only mode. \n\nA value of 40 means that the total position size may not exceed 40x the amount set as 'trading limit'`,
            inputType: 'range',
            rangeLowHigh: [15, 99],
            rangeInput: [0, 999],
          },
          MAX_UNHEDGED: {
            defaultValue: '75',
            tooltip: `Limits maximum position size difference from the other side, applies to orders that add to a position. \n\nWhen max is reached, the strategy goes in close only mode. \n\nExample: max unhedged set to 40 and is reached, long is at 50x tl position, short at 10x tl. Long can now not grow further until the short grows too.`,
            inputType: 'range',
            rangeLowHigh: [15, 99],
            rangeInput: [0, 999],
          },
          FIRST_TRADES_MULTIPLIER: {
            defaultValue: 'auto',
            tooltip: `Multiplies the order size for the first x trades on any side. 

Set 'auto' to use default behavior. Auto mode generates multiplier values between 1.5 and 5, mostly depending on the imbalance between both sides.
            
With a manually set value, you use 2 as multiplier value, it means that eligible orders get fired for tl * 2. `,
            inputType: 'string',
          },
          FIRST_TRADES_THRESHOLD: {
            defaultValue: 'auto',
            tooltip: `Sets a position size threshold under which first trades multiplier applies.

Set 'auto' to use default behavior. In auto mode it will usually allow 2 to 3 trades with first trades multiplier, and continues with 1x tl trades after that. 
            
When you set 10 as value, first trades multiplier applies until the current position is tl * 10. `,
            inputType: 'string',
          },
        },
      },
      'Customize grid': {
        description: 'Options to change grid step size',
        parameters: {
          PERIOD: {
            defaultValue: '15', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `Sets which candles are used to calculate auto step size and trailing range. \n\nA lower value increases trading frequency and risk.`,
            inputType: 'select',
          },
          USE_TREND: {
            defaultValue: false,
            tooltip: `Gives the strategy the option to pick a side and manipulate trading limit, based on trend data gathered on multi timeframe charts.
            
When it detects a phase where it trades long only:
- tl for longs are multiplied by 2
- shorts may only close, not dca

When it detects a phase where it trades short only:
- tl for shorts are multiplied by 2
- longs may only close, not dca

When it detects an undecided zone: 
- both long and short use regular tl
- both sides may dca and close

During stronger trends, expect this mechanism to pause dca on the losing side for longer times.

Strategy behavior is fundamentally different with or without this option.`,
            inputType: 'boolean',
          },
          TREND_VARIANT: {
            defaultValue: '4h',
            options: ['4h', '1h_15m'],
            tooltip: `Sets the data source to use for determining market direction.

Epected behavior in 4h mode:
When it detects a phase where it trades long only:
- tl for longs are multiplied by 2
- shorts may only close, not dca

When it detects a phase where it trades short only:
- tl for shorts are multiplied by 2
- longs may only close, not dca

When it detects an undecided zone: 
- both long and short use regular tl
- both sides may dca and close  

Epected behavior in 1h_15m mode:
When it detects a phase where it trades long only:
- tl for longs are multiplied by 2
- shorts may only close, not dca

When it detects a phase where it trades short only:
- tl for shorts are multiplied by 2
- longs may only close, not dca

When it detects an undecided zone: 
- both sides may only close, not dca
`,
            inputType: 'select',
          },
          AUTO_STEP_SIZE: {
            defaultValue: true,
            tooltip: `Lets the bot automatically determine a grid step size that fits the pairs current volatility.`,
            inputType: 'boolean',
          },
          STEP_SIZE: {
            defaultValue: '500',
            tooltip: `Manually defined grid step size for buy and sell orders, when auto step size is not enabled. \n\nSet as a price: setting 500 on USDT-BTC makes the bot trade each time price moves 500 USDT.`,
            inputType: 'string',
          },
          PCT_STEP_SIZE: {
            defaultValue: false,
            tooltip: `When enabled, the value for step size represents a percentage.`,
            inputType: 'boolean',
          },
          ENFORCE_STEP: {
            defaultValue: false,
            tooltip: `Used to ensure step size is respected. \n\nPrice trailing can sometimes finish at a rate worse than the current grid step up or down. \n\nWith this option enabled, orders may only get fired when trailing finishes at a better rate than the current step target. This can be useful for very precise balance management.`,
            inputType: 'boolean',
          },
          separator_121312: {},
          MIN_STEP_UP_PCT: {
            defaultValue: '0',
            tooltip: `Minimum percentage size for steps up, to overrule automatic step size. \n\nSetting 1 means that a step up is set to 1% of price, unless auto step size is already higher than 1%`,
            inputType: 'string',
          },
          MIN_STEP_DOWN_PCT: {
            defaultValue: '0',
            tooltip: `Minimum percentage size for steps down, to overrule automatic step size. \n\nSetting 1 means that a step down is set to 1% of price, unless auto step size is already higher than 1%`,
            inputType: 'string',
          },
          MIN_STEP_ASYMMETRIC: {
            defaultValue: true,
            tooltip: `When enabled, min step size (either up or down) is only applied in the dca direction of the currently smallest position. \n\nExample: if short position is smaller than long position, then 'min step up pct' is applied to steps up, while 'min step down pct' is not applied to steps down`,
            inputType: 'boolean',
          },
        },
      },
      Advanced: {
        description: 'Various advanced options',
        parameters: {
          STOP_AFTER_CLOSE_LONG: {
            defaultValue: false,
            tooltip: `Used to stop trading longs after the current long has been completely closed.`,
            inputType: 'boolean',
          },
          STOP_AFTER_CLOSE_SHORT: {
            defaultValue: false,
            tooltip: `Used to stop trading shorts after the current short has been completely closed.`,
            inputType: 'boolean',
          },
          BUY_ENABLED: {
            defaultValue: true,
            tooltip: `Allow or disallow placing long orders.`,
            inputType: 'boolean',
          },
          SELL_ENABLED: {
            defaultValue: true,
            tooltip: `Allow or disallow placing short orders.`,
            inputType: 'boolean',
          },
          CLOSE_LONG_ENABLED: {
            defaultValue: true,
            tooltip: `Allow or disallow (partially) closing long positions.`,
            inputType: 'boolean',
          },
          CLOSE_SHORT_ENABLED: {
            defaultValue: true,
            tooltip: `Allow or disallow (partially) closing short positions.`,
            inputType: 'boolean',
          },
          SMAPERIOD: {
            defaultValue: '50',
            tooltip: `Number of candles used to calculate support and resistance levels, which are used to calculate trailing ranges. \n\nDefault value of 50 should usually not need tuning.`,
            inputType: 'range',
            rangeLowHigh: [5, 80],
            rangeInput: [1, 500],
          },
          ATR_PERIOD: {
            defaultValue: '50',
            tooltip: `Number of candles used to calculate Average True Range, which is used to calculate auto step size. \n\nDefault value of 50 should usually not need tuning.`,
            inputType: 'range',
            rangeLowHigh: [5, 80],
            rangeInput: [1, 500],
          },
          BUYDOWN_EXPONENT: {
            defaultValue: '0.5',
            tooltip: `Exponent to use in the built-in exponential buydown function that forces a distance between dca trades and avg entry price. 
            
Use https://jsfiddle.net/4b8s3hkf/ to experiment what different values result in. When in doubt, use default!`,
            inputType: 'range',
            step: 0.01,
            rangeLowHigh: [0.4, 1.5],
            rangeInput: [0.01, 100],
          },
          INSTANT_OPEN_THRESHOLD_LONG: {
            defaultValue: '99999',
            tooltip: `Minimum long position size, to use always in position trading on short side
            
Behavior of 'always in position' trading is to immediately start trailing for a new position after completely closing one.

When set to 50, the short side starts always in position trading when long position is more than 50x TL in size

Cannot be used together with enforce step size`,
            inputType: 'range',
            step: 1,
            rangeLowHigh: [0, 100],
            rangeInput: [0, 100000000000],
          },
          INSTANT_OPEN_THRESHOLD_SHORT: {
            defaultValue: '99999',
            tooltip: `Minimum short position size, to use always in position trading on long side
            
Behavior of 'always in position' trading is to immediately start trailing for a new position after completely closing one.

When set to 50, the long side starts always in position trading when short position is more than 50x TL in size

Cannot be used together with enforce step size`,
            inputType: 'range',
            step: 1,
            rangeLowHigh: [0, 100],
            rangeInput: [0, 100000000000],
          },
        },
      },
    },
  },

  // static and non exchange specific data needed to render new strat editor
  setupWizard: {
    exchange: {
      info: {
        description:
          'This page helps you connect your bot to your exchange account(s), validate your license and more global bot settings.',
        docsUrl: 'https://wiki.gunthy.org/about/supported-exchanges/create-api/',
      },
      settings: {
        description: '',
        parameters: {
          key: {
            defaultValue: '20', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `Exchange API key, sometimes called 'public key'. \n\nMake sure this API key is newly created and only used for Gunbot\n\nMake sure your API key has trading permissions.\n\nWhen the key is registered on the license system, it gets prefilled.`,
            name: 'API key',
            inputType: 'string',
          },
          secret: {
            defaultValue: '40',
            tooltip: `Exchange API secret, sometimes called 'private key'. \n\nFor security reasons, the bot encrypts your API secret after saving.`,
            inputType: 'string',
          },
          passphrase: {
            defaultValue: '',
            tooltip: `Exchange API passphrase, sometimes called 'API password'.`,
            inputType: 'string',
          },
          clientId: {
            defaultValue: '',
            tooltip: `Exchange client ID. A unique identifier for your exchange account.'.`,
            inputType: 'string',
          },
          delay: {
            defaultValue: '1',
            tooltip: `Forces additional delay between rounds of fetching trading data from the exchange. \n\nThis setting can be useful if exchange API rate limits get exceeded, only change if absolutely needed.`,
            name: 'Processing delay',
            inputType: 'range',
            rangeLowHigh: [0, 60],
          },
          TRADING_FEES: {
            defaultValue: '0.1',
            tooltip: `Fees as a percentage of each order, used to calculate break even prices. \n\nIf there are separate maker and taker fees on the exchange, enter the highest of these fee levels.\n\nMake sure this value matches or exceeds the fee level on your exchange.`,
            name: 'Trading fees',
            inputType: 'range',
            rangeLowHigh: [0, 1],
          },
          isEncrypted: {
            defaultValue: false,
            tooltip: `API secret is currently encrypted and shown as read only.`,
            name: 'API secret encrypted',
            inputType: 'boolean',
          },
          pay_with_utility_token: {
            defaultValue: false,
            tooltip: `Enable to pay trading fees with the exchange utility token`,
            name: 'Pay fees with utility token',
            inputType: 'boolean',
          },
          testnet: {
            defaultValue: false,
            tooltip:
              'Use the testnet of this exchange, instead of the real exchange platform. \n\nYou need to use a registered API key, specifically created for this testnet.',
            name: 'Use testnet',
            inputType: 'boolean',
          },
          market: {
            defaultValue: 'spot', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `Select the market type to trade on this exchange.`,
            inputType: 'select',
            name: 'Market type',
            values: [
              {
                value: 'spot',
                name: 'Spot',
              },
              {
                value: 'futures',
                name: 'Futures',
                exchangeWhitelist: [
                  'ftx',
                  'binanceFutures',
                  'bitmex',
                  'bitmex_testnet',
                  'krakenFutures',
                  'futures_gunthy',
                  'bybit',
                  'okex5',
                  'okx',
                  'okgunbot',
                ],
              },
              {
                value: 'delivery',
                name: 'Coin-m futures',
                exchangeWhitelist: ['binanceFutures', 'futures_gunthy'],
              },
              {
                value: 'swap',
                name: 'Swap',
                exchangeWhitelist: ['okx', 'okex5', 'okgunbot'],
              },
              {
                value: 'inverse',
                name: 'Inverse',
                exchangeWhitelist: ['bitget'],
              },
            ],
          },
          accountType: {
            defaultValue: 'Main account', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `Select the appropriate account type the API key is from.`,
            inputType: 'select',
            name: 'Account type',
            values: [
              {
                value: 'main',
                name: 'Main account',
              },
              {
                value: 'sub',
                name: 'Subaccount',
              },
            ],
          },
          exchangeName: {
            // Gunbot ONE exchanges
            defaultValue: 'binance', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `Select which exchange to connect.`,
            inputType: 'select',
            values: [
              {
                value: 'binance',
                name: 'Binance',
              },
              {
                value: 'binanceus',
                name: 'Binance US',
              },
              {
                value: 'ftx',
                name: 'FTX',
              },
              {
                value: 'ftxus',
                name: 'FTX US',
              },
              {
                value: 'huobi',
                name: 'Huobi Global',
              },
              {
                value: 'mex_gunthy',
                name: 'Mex Gunthy',
              },
              {
                value: 'okex5',
                name: 'OKX',
              },
              {
                value: 'okgunbot',
                name: 'okGunbot',
              },
            ],
          },
          exchangeNameMore: {
            // Other partner and certified exchanges
            defaultValue: 'binance', // only used as fallback, normal behavior is to use exchange specific values
            tooltip: `Select which exchange to connect.`,
            inputType: 'select',
            values: [
              {
                value: 'futures_gunthy',
                name: 'Gunthy Futures',
              },
              {
                value: 'bybit',
                name: 'Bybit',
              },
              {
                value: 'bitstamp',
                name: 'Bitstamp',
              },
              {
                value: 'bitget',
                name: 'Bitget',
              },
              {
                value: 'beaxy',
                name: 'Beaxy',
              },
              {
                value: 'binanceFutures',
                name: 'Binance Futures',
              },
              {
                value: 'hitbtc',
                name: 'HitBTC',
              },
              {
                value: 'krakenFutures',
                name: 'Kraken Futures',
              },
              {
                value: 'kucoin',
                name: 'KuCoin',
              },
              {
                value: 'mexc',
                name: 'MEXC',
              },
              {
                value: 'txbit',
                name: 'Txbit',
              },
              {
                value: 'bittrex',
                name: 'Bittrex',
              },
              {
                value: 'bitfinex',
                name: 'Bitfinex',
              },
              {
                value: 'bitmex',
                name: 'BitMEX',
              },
              {
                value: 'bitmex_testnet',
                name: 'BitMEX testnet',
              },
              {
                value: 'cex',
                name: 'CEX',
              },
              {
                value: 'gdax',
                name: 'Coinbase Pro',
              },
              {
                value: 'kraken',
                name: 'Kraken',
              },
              {
                value: 'poloniex',
                name: 'Poloniex',
              },
              {
                value: 'gateio',
                name: 'Gate.io',
              },
            ],
          },
        },
      },
    },
  },

  exchangeConfig: {
    key: '',
    secret: '',
    masterkey: '',
    mastersecret: '',
    passphrase: '',
    clientId: '',
    market: 'spot',
    delay: 5,
    filteredBase: [],
    filteredQuote: [],
    filteredPair: [],
    TRADING_FEES: '0.1',
    includeCoins: '',
    pay_with_utility_token: false,
    autoPairs: false,
    tick_interval: 30,
    tick_time: false,
    testnet: false,
    isEncrypted: false,
  },

  // supported period values per exchange (most used, not complete)
  periodMatrix: {
    binance: [1, 3, 5, 15, 30, 60, 120, 240, 360, 720, 1440, 4320],
    binanceus: [1, 3, 5, 15, 30, 60, 120, 240, 360, 720, 1440, 4320],
    binanceFutures: [1, 3, 5, 15, 30, 60, 120, 240, 360, 720],
    futures_gunthy: [1, 3, 5, 15, 30, 60, 120, 240, 360, 720],
    bitfinex: [1, 5, 15, 30, 60, 180, 360, 720, 1440, 10080, 20160],
    ftx: [1, 5, 15, 30, 60, 240, 1440],
    okex5: [1, 5, 15, 60, 240],
    okgunbot: [1, 5, 15, 60, 240],
    bitmex: [1, 5, 60, 1440],
    bitmex_testnet: [1, 5, 60, 1440],
    bittrex: [1, 5, 30],
    cex: [5, 15],
    gdax: [1, 5, 15, 60, 360, 1440],
    huobi: [1, 5, 15, 30, 60, 240, 1440],
    kraken: [1, 5, 15, 30, 60, 240, 1440],
    krakenFutures: [1, 5, 60, 1440],
    kucoin: [1, 3, 5, 15, 30, 60, 120, 240, 360, 480, 720],
    poloniex: [5, 15, 30, 120, 240, 1440],
    other: [1, 5, 15, 60, 240],
  },

  mvtsMatrix: {
    binance: {
      BNB: 0.05,
      BTC: 0.0001,
      ETH: 0.005,
      TRX: 100,
      XRP: 10,
      DOGE: 30,
      AUD: 10,
      EUR: 10,
      GBP: 10,
      BRL: 10,
      TUSD: 10,
      USDC: 10,
      USDT: 10,
      BUSD: 10,
      BIDR: 20000,
      RUB: 100,
      TRY: 10,
      DAI: 10,
      IDRT: 20000,
      UAH: 100,
      NGN: 500,
      VAI: 10,
      USDP: 10,
    },
    binanceus: {
      BNB: 0.05,
      BTC: 0.0001,
      ETH: 0.005,
      TRX: 100,
      XRP: 10,
      DOGE: 30,
      AUD: 10,
      EUR: 10,
      GBP: 10,
      BRL: 10,
      TUSD: 10,
      USDC: 10,
      USDT: 10,
      BUSD: 10,
      BIDR: 20000,
      RUB: 100,
      TRY: 10,
      DAI: 10,
      IDRT: 20000,
      UAH: 100,
      NGN: 500,
      VAI: 10,
      USDP: 10,
    },
    mex_gunthy: {
      BNB: 0.05,
      BTC: 0.0001,
      ETH: 0.005,
      TRX: 100,
      XRP: 10,
      DOGE: 30,
      AUD: 10,
      EUR: 10,
      GBP: 10,
      BRL: 10,
      TUSD: 10,
      USDC: 10,
      USDT: 10,
      BUSD: 10,
      BIDR: 20000,
      RUB: 100,
      TRY: 10,
      DAI: 10,
      IDRT: 20000,
      UAH: 100,
      NGN: 500,
      VAI: 10,
      USDP: 10,
    },
    okex5: {
      BNB: 0.05,
      BTC: 0.0001,
      ETH: 0.005,
      TRX: 100,
      XRP: 10,
      DOGE: 30,
      AUD: 10,
      EUR: 10,
      GBP: 10,
      BRL: 10,
      TUSD: 10,
      USDC: 10,
      USDT: 10,
      BUSD: 10,
      BIDR: 20000,
      RUB: 100,
      TRY: 10,
      DAI: 10,
      IDRT: 20000,
      UAH: 100,
      NGN: 500,
      VAI: 10,
      USDP: 10,
    },
    okgunbot: {
      BNB: 0.05,
      BTC: 0.0001,
      ETH: 0.005,
      TRX: 100,
      XRP: 10,
      DOGE: 30,
      AUD: 10,
      EUR: 10,
      GBP: 10,
      BRL: 10,
      TUSD: 10,
      USDC: 10,
      USDT: 10,
      BUSD: 10,
      BIDR: 20000,
      RUB: 100,
      TRY: 10,
      DAI: 10,
      IDRT: 20000,
      UAH: 100,
      NGN: 500,
      VAI: 10,
      USDP: 10,
    },
    ftx: {
      BNB: 0.05,
      BTC: 0.0001,
      ETH: 0.005,
      TRX: 100,
      XRP: 10,
      DOGE: 30,
      AUD: 10,
      EUR: 10,
      GBP: 10,
      BRL: 10,
      TUSD: 10,
      USDC: 10,
      USDT: 10,
      BUSD: 10,
      BIDR: 20000,
      RUB: 100,
      TRY: 10,
      DAI: 10,
      IDRT: 20000,
      UAH: 100,
      NGN: 500,
      VAI: 10,
      USDP: 10,
    },
  },

  // list of exchange names and supported market types
  exchangesWithUsableTickers: {
    binance: {
      prettyName: 'Binance',
      spot: true,
      futures: false,
      delivery: false,
    },
    binanceus: {
      prettyName: 'Binance US',
      spot: true,
      futures: false,
      delivery: false,
    },
    ftx: {
      prettyName: 'FTX',
      spot: true,
      futures: true,
      delivery: false,
    },
    ftxus: {
      prettyName: 'FTX US',
      spot: true,
      futures: false,
      delivery: false,
    },
    mex_gunthy: {
      prettyName: 'Mex Gunthy',
      spot: true,
      futures: false,
      delivery: false,
    },
    okex5: {
      prettyName: 'OKX',
      spot: true,
      futures: true,
      swap: true,
      delivery: false,
    },
    okgunbot: {
      prettyName: 'okGunbot',
      spot: true,
      futures: true,
      swap: true,
      delivery: false,
    },
    hitbtc: {
      prettyName: 'HitBTC',
      spot: true,
      futures: false,
      delivery: false,
    },
    kucoin: {
      prettyName: 'KuCoin',
      spot: true,
      futures: false,
      delivery: false,
    },
    kraken: {
      prettyName: 'Kraken',
      spot: true,
      futures: false,
      delivery: false,
    },
    bitfinex: {
      prettyName: 'Bitfinex',
      spot: true,
      futures: false,
      delivery: false,
    },
    cex: {
      prettyName: 'CEX',
      spot: true,
      futures: false,
      delivery: false,
    },
    poloniex: {
      prettyName: 'Poloniex',
      spot: true,
      futures: false,
      delivery: false,
    },
    bittrex: {
      prettyName: 'Bittrex',
      spot: true,
      futures: false,
      delivery: false,
    },
    huobi: {
      prettyName: 'Huobi Global',
      spot: true,
      futures: false,
      delivery: false,
    },
    binanceFutures: {
      prettyName: 'Binance Futures',
      spot: false,
      futures: true,
      delivery: true,
    },
    futures_gunthy: {
      prettyName: 'Futures Gunthy',
      spot: false,
      futures: true,
      delivery: true,
    },
    gdax: {
      prettyName: 'Coinbase Pro',
      spot: true,
      futures: false,
      delivery: false,
    },
    gateio: {
      prettyName: 'Gate.io',
      spot: true,
      futures: false,
      delivery: false,
    },
    bybit: {
      prettyName: 'Bybit',
      spot: true,
      futures: true,
      delivery: false,
    },
    bitget: {
      prettyName: 'bitget',
      spot: true,
      futures: false,
      delivery: false,
    },
  },
};

export default $scope;

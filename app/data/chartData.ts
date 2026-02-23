// Simulated chart data based on the Chipbook PDF
// These can be replaced with real API calls to:
// - US Census International Trade API (https://www.census.gov/foreign-trade/data/)
// - FRED Economic Data API (https://fred.stlouisfed.org/)
// - UN Comtrade API (https://comtrade.un.org/)
// - ITA Data Services API (https://developer.trade.gov/)

// Helper to generate dates
const generateMonthlyDates = (startYear: number, endYear: number): string[] => {
  const dates: string[] = [];
  for (let year = startYear; year <= endYear; year++) {
    for (let month = 1; month <= 12; month++) {
      dates.push(`${year}-${month.toString().padStart(2, '0')}`);
    }
  }
  return dates;
};

// Helper to generate quarterly-like pattern
const seasonalPattern = (index: number, baseValue: number, variance: number): number => {
  const month = index % 12;
  const seasonal = Math.sin((month / 12) * 2 * Math.PI) * 0.2 + 1;
  return Math.round(baseValue * seasonal + (Math.random() - 0.5) * variance);
};

// ===== SMARTPHONE DATA =====
export const usSmartphoneUnitImportsData = (() => {
  const dates = generateMonthlyDates(2022, 2025);
  return dates.map((date, i) => ({
    date,
    china: i < 30 ? 80 + Math.random() * 10 : Math.max(25, 80 - (i - 30) * 2),
    exChina: i < 30 ? 20 + Math.random() * 5 : Math.min(75, 20 + (i - 30) * 2),
  }));
})();

export const usSmartphoneImportsData = (() => {
  const dates = generateMonthlyDates(2022, 2025);
  return dates.map((date, i) => {
    const total = seasonalPattern(i, 12, 3);
    const chinaRatio = i < 30 ? 0.8 : Math.max(0.25, 0.8 - (i - 30) * 0.02);
    const china = Math.round(total * chinaRatio);
    const india = Math.round(total * (1 - chinaRatio) * 0.6);
    const vietnam = total - china - india;
    return { date, china, india, vietnam };
  });
})();

export const chinaSmartphoneExportsData = (() => {
  const dates = generateMonthlyDates(2022, 2025);
  return dates.map((date, i) => ({
    date,
    units: Math.round(45 + Math.sin(i / 6) * 10 + Math.random() * 5),
    asp: Math.round(250 + Math.sin(i / 8) * 50 + Math.random() * 20),
  }));
})();

// ===== AUTOMOTIVE EXPORTS DATA =====
export const autoExportsData = (() => {
  const dates = generateMonthlyDates(2018, 2025);
  return dates.map((date, i) => ({
    date,
    china: Math.round(seasonalPattern(i, 5000, 500) + (i > 48 ? (i - 48) * 100 : 0)),
    usa: Math.round(seasonalPattern(i, 4000, 400)),
    japan: Math.round(seasonalPattern(i, 6000, 600)),
    korea: Math.round(seasonalPattern(i, 8000, 800)),
  }));
})();

// ===== MEMORY TRACKERS DATA =====
export const taiwanDRAMInventoryData = (() => {
  const dates = generateMonthlyDates(2014, 2025);
  return dates.map((date, i) => ({
    date,
    volume: Math.round(150 + (i / 12) * 50 + Math.sin(i / 12) * 100 + Math.random() * 50),
    value: Math.round(200 + (i / 12) * 60 + Math.sin(i / 8) * 150 + Math.random() * 50),
  }));
})();

export const koreaMemoryExportsData = (() => {
  const dates = generateMonthlyDates(2020, 2025);
  return dates.map((date, i) => ({
    date,
    value: Math.round(3000 + (i / 12) * 500 + Math.sin(i / 6) * 1500 + Math.random() * 500),
    yoyChange: Math.round(-20 + Math.sin(i / 8) * 50 + Math.random() * 20),
  }));
})();

export const koreaMemoryASPData = (() => {
  const dates = generateMonthlyDates(2020, 2025);
  return dates.map((date, i) => ({
    date,
    asp: Math.round(15000 + Math.sin(i / 6) * 8000 + Math.random() * 2000),
    yoyChange: Math.round(-40 + Math.sin(i / 8) * 80 + Math.random() * 20),
  }));
})();

// ===== PCB TRACKERS DATA =====
export const pcbImportsData = (() => {
  const dates = generateMonthlyDates(2016, 2025);
  return dates.map((date, i) => ({
    date,
    china: Math.round(seasonalPattern(i, 800, 80)),
    taiwan: Math.round(seasonalPattern(i, 200, 20)),
    korea: Math.round(seasonalPattern(i, 100, 10)),
    japan: Math.round(seasonalPattern(i, 150, 15)),
    usa: Math.round(seasonalPattern(i, 300, 30)),
  }));
})();

export const taiwanPCBRevenueData = (() => {
  const dates = generateMonthlyDates(2017, 2025);
  return dates.map((date, i) => ({
    date,
    total: Math.round(800 + (i / 12) * 100 + Math.sin(i / 12) * 300 + Math.random() * 100),
    yoyChange: Math.round(-20 + Math.sin(i / 10) * 40 + Math.random() * 10),
  }));
})();

// ===== WAFER FAB EQUIPMENT IMPORTS DATA =====
export const wfeImportsData = (() => {
  const dates = generateMonthlyDates(2015, 2025);
  return dates.map((date, i) => ({
    date,
    japan: Math.round(seasonalPattern(i, 300, 50)),
    china: Math.round(seasonalPattern(i, 1500, 200) + (i > 60 ? (i - 60) * 50 : 0)),
    korea: Math.round(seasonalPattern(i, 1200, 150)),
    taiwan: Math.round(seasonalPattern(i, 1400, 180)),
    us: Math.round(seasonalPattern(i, 200, 30)),
    yoyChange: Math.round(-30 + Math.sin(i / 8) * 60 + Math.random() * 20),
  }));
})();

// ===== CHINA FRONT-END EQUIPMENT DATA =====
export const chinaFrontEndData = (() => {
  const dates = generateMonthlyDates(2016, 2025);
  return dates.map((date, i) => ({
    date,
    deposition: Math.round(100 + (i / 12) * 50 + Math.sin(i / 12) * 30 + Math.random() * 20),
    lithography: Math.round(80 + (i / 12) * 80 + Math.sin(i / 10) * 50 + Math.random() * 30),
    etch: Math.round(90 + (i / 12) * 55 + Math.sin(i / 11) * 40 + Math.random() * 25),
  }));
})();

// ===== CHINA ETCH EQUIPMENT IMPORTS DATA =====
export const chinaEtchData = (() => {
  const dates = generateMonthlyDates(2016, 2025);
  return dates.map((date, i) => ({
    date,
    japan: Math.round(20 + (i / 12) * 25 + Math.sin(i / 12) * 10 + (i > 60 ? (i - 60) * 2 : 0)),
    malaysia: Math.round(50 + Math.sin(i / 8) * 20 + Math.random() * 10),
    taiwan: Math.round(10 + (i / 12) * 8 + Math.random() * 5),
    usa: Math.round(40 + Math.sin(i / 6) * 30 + Math.random() * 10),
  }));
})();

// ===== US CONNECTOR IMPORTS DATA =====
export const connectorImportsData = (() => {
  const dates = generateMonthlyDates(2017, 2025);
  return dates.map((date, i) => ({
    date,
    value: Math.round(25 + (i / 12) * 8 + Math.sin(i / 12) * 10 + Math.random() * 5),
    yoyChange: Math.round(-30 + Math.sin(i / 8) * 60 + Math.random() * 20),
  }));
})();

// ===== TAIWAN SERVER PRODUCTION DATA =====
export const taiwanServerData = (() => {
  const dates = generateMonthlyDates(2018, 2025);
  return dates.map((date, i) => ({
    date,
    units: Math.round(200 + (i / 12) * 100 + Math.sin(i / 6) * 100 + Math.random() * 50),
    asp: Math.round(1000 + (i / 12) * 300 + Math.sin(i / 8) * 200 + Math.random() * 100),
  }));
})();

// ===== TAIWAN MEMORY IMPORTS FROM KOREA DATA =====
export const taiwanMemoryImportsData = (() => {
  const dates = generateMonthlyDates(2020, 2025);
  return dates.map((date, i) => ({
    date,
    value: Math.round(500 + (i / 12) * 400 + Math.sin(i / 6) * 300 + (i > 36 ? (i - 36) * 50 : 0) + Math.random() * 100),
    yoyChange: Math.round(-20 + Math.sin(i / 8) * 80 + Math.random() * 20),
  }));
})();

// ===== MEMORY IC EXPORTS DATA =====
export const memoryExportsByCountryData = (() => {
  const dates = generateMonthlyDates(2016, 2025);
  return dates.map((date, i) => ({
    date,
    china: Math.round(1500 + (i / 12) * 200 + Math.sin(i / 8) * 500 + Math.random() * 200),
    korea: Math.round(3000 + (i / 12) * 300 + Math.sin(i / 6) * 800 + Math.random() * 300),
    taiwan: Math.round(2000 + (i / 12) * 250 + Math.sin(i / 7) * 600 + Math.random() * 250),
  }));
})();

export const memoryExportsYoYData = (() => {
  const dates = generateMonthlyDates(2016, 2025);
  return dates.map((date, i) => ({
    date,
    china: Math.round(-10 + Math.sin(i / 10) * 40 + Math.random() * 10),
    korea: Math.round(-20 + Math.sin(i / 8) * 60 + Math.random() * 15),
    taiwan: Math.round(-15 + Math.sin(i / 9) * 50 + Math.random() * 12),
  }));
})();

// ===== NEV VS ICE MARKET SHARE DATA =====
export const nevMarketShareData = (() => {
  const dates = generateMonthlyDates(2017, 2025);
  return dates.map((date, i) => {
    const newEnergy = Math.min(50, 10 + (i / 12) * 5 + Math.sin(i / 12) * 5 + Math.random() * 2);
    return {
      date,
      newEnergy: Math.round(newEnergy),
      ice: Math.round(100 - newEnergy),
    };
  });
})();

// ===== CHINA AUTO DATA =====
export const chinaTotalAutoExportsData = (() => {
  const dates = generateMonthlyDates(2017, 2025);
  return dates.map((date, i) => ({
    date,
    total: Math.round(500 + (i / 12) * 150 + Math.sin(i / 12) * 200 + (i > 36 ? (i - 36) * 50 : 0) + Math.random() * 100),
  }));
})();

export const chinaAutoTypeData = (() => {
  const dates = generateMonthlyDates(2017, 2025);
  return dates.map((date, i) => ({
    date,
    ice: Math.round(600 + (i / 12) * 50 + Math.sin(i / 12) * 100 + Math.random() * 50),
    nev: Math.round(100 + (i / 12) * 80 + Math.sin(i / 10) * 50 + Math.random() * 30),
  }));
})();

export const chinaNEVTypeData = (() => {
  const dates = generateMonthlyDates(2017, 2025);
  return dates.map((date, i) => ({
    date,
    hybrid: Math.round(50 + (i / 12) * 10 + Math.sin(i / 12) * 20 + Math.random() * 10),
    phev: Math.round(30 + (i / 12) * 15 + Math.sin(i / 10) * 15 + Math.random() * 8),
    ev: Math.round(20 + (i / 12) * 55 + Math.sin(i / 8) * 30 + Math.random() * 15),
  }));
})();

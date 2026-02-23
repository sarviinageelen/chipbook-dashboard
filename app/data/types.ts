// Types for all chart data

export interface DataPoint {
  date: string;
  [key: string]: string | number;
}

export interface SmartphoneImportData {
  date: string;
  china: number;
  exChina: number;
}

export interface SmartphoneCountryData {
  date: string;
  china: number;
  india: number;
  vietnam: number;
}

export interface ChinaSmartphoneExportData {
  date: string;
  units: number;
  asp: number;
}

export interface AutoExportData {
  date: string;
  china: number;
  usa: number;
  japan: number;
  korea: number;
}

export interface DRAMInventoryData {
  date: string;
  volume: number;
  value: number;
}

export interface KoreaMemoryExportData {
  date: string;
  value: number;
  yoyChange: number;
}

export interface KoreaMemoryASPData {
  date: string;
  asp: number;
  yoyChange: number;
}

export interface PCBImportData {
  date: string;
  china: number;
  taiwan: number;
  korea: number;
  japan: number;
  usa: number;
}

export interface TaiwanPCBRevenueData {
  date: string;
  total: number;
  yoyChange: number;
}

export interface WFEImportData {
  date: string;
  japan: number;
  china: number;
  korea: number;
  taiwan: number;
  us: number;
  yoyChange: number;
}

export interface ChinaFrontEndData {
  date: string;
  deposition: number;
  lithography: number;
  etch: number;
}

export interface ChinaEtchData {
  date: string;
  japan: number;
  malaysia: number;
  taiwan: number;
  usa: number;
}

export interface ConnectorImportData {
  date: string;
  value: number;
  yoyChange: number;
}

export interface TaiwanServerData {
  date: string;
  units: number;
  asp: number;
}

export interface TaiwanMemoryImportData {
  date: string;
  value: number;
  yoyChange: number;
}

export interface MemoryExportByCountryData {
  date: string;
  china: number;
  korea: number;
  taiwan: number;
}

export interface MemoryExportYoYData {
  date: string;
  china: number;
  korea: number;
  taiwan: number;
}

export interface NEVMarketShareData {
  date: string;
  newEnergy: number;
  ice: number;
}

export interface ChinaAutoExportData {
  date: string;
  total: number;
}

export interface ChinaAutoTypeData {
  date: string;
  ice: number;
  nev: number;
}

export interface ChinaNEVTypeData {
  date: string;
  hybrid: number;
  phev: number;
  ev: number;
}

export interface ChartSection {
  title: string;
  description: string;
  charts: ChartConfig[];
}

export interface ChartConfig {
  id: string;
  title: string;
  type: 'line' | 'bar' | 'area' | 'composed' | 'stacked-bar';
  data: any[];
  dataKeys: string[];
  colors: string[];
  yAxisLabel?: string;
  xAxisLabel?: string;
  hasDualAxis?: boolean;
  secondaryDataKey?: string;
  secondaryYAxisLabel?: string;
}

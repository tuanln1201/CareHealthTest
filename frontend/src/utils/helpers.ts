export interface SingleCurrencyInfo {
  Volume: string;
  btcPrice: string;
  change: string;
  coinrankingUrl: string;
  color: string;
  iconUrl: string;
  listedAt: number;
  lowVolume: boolean;
  marketCap: string;
  name: string;
  price: string;
  rank: number;
  sparkline: any;
  symbol: string;
  tier: number;
  uuid: string;
}
export interface sortDashBoardOptionsType {
  [key: string]: string;
}
export const sortDashBoardOptions: sortDashBoardOptionsType = {
  marketCap: "Market Cap",
  price: "Price",
  change: "Change",
};

export const HeaderTable = ["Rank","Name","Symbol","Price","Price Change","Market cap"];

// interface InvestmentDataSet {
//         InvestmentData
// }

interface InvestmentData  {
    assetType: AssetType,
    quantity: number,
    purchasePrice: number,
    investmentDate: string
  }

type AssetType = 'Mutual Funds' | 'Bonds' | 'Commodities' | 'Equities';

interface TotalQuantities {
    [key in AssetType]: number;  // Using AssetType as the key type here
  }
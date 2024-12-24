interface InvestmentDataSet {
    data: [
        InvestmentData
    ]
}

interface InvestmentData  {
    assetType: AssetType,
    quantity: number,
    purchasePrice: number,
    investmentDate: string
  }

type AssetType = 'Mutual Funds' | 'Bonds' | 'Commodities' | 'Equities';
export interface BusinessType {
  name: string;
  yearEst: number;
  profitLossSummary: number;
  userData: {
    name: string;
    email: string;
  };
  loanAmount: number;
}

export interface BalanceSheetRequestType {
  name: string;
  email: string;
  businessId: string;
}

export interface BalanceSheetType {
  year: number;
  month: number;
  profitOrLoss: number;
  assetsValue: number;
}

export interface DecisionEngineType {
  name: string;
  preAssessment: number;
  profitLossSummary: number;
  yearEst: number;
}

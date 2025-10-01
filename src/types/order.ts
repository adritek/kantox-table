export type BankAccountAttributes = {
  name: string;
  "account-number": string;
  "swift-code": string;
  address: string;
  phone: string;
  email: string;
};

export type BankAccountRelationship = {
  data: {
    id: string;
    type: string;
  };
  attributes: BankAccountAttributes;
};

export type Relationships = {
  "bank-account": BankAccountRelationship;
};

export type Actions = {
  edit?: boolean;
  execute?: boolean;
  delete?: boolean;
  retry?: boolean;
  cancel?: boolean;
};

export type OrderAttributes = {
  reference: string;
  "order-type": string;
  "creation-date": string;
  "market-direction": string;
  "buy-currency": string;
  "sell-currency": string;
  "amount-cents": number;
  "value-date": string;
  status?: string;
  actions: Actions;
};

export type Order = {
  type: string;
  id: string;
  attributes: OrderAttributes;
  relationships: Relationships;
};
export interface Municipality {
  Name: string;
  NameAr: string;
  Value: string;
  Delegations: Delegation[];
}

export interface Delegation {
  Name: string;
  NameAr: string;
  Value: string;
  PostalCode: string;
  Latitude: number;
  Longitude: number;
}

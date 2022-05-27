export interface Country {
  name:         Name;
  tld:          string[];
  cca2:         string;
  ccn3:         string;
  cca3:         string;
  independent:  boolean;
  status:       Status;
  unMember:     boolean;
  idd:          Idd;
  altSpellings: string[];
  region:       Region;
  languages:    { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  area:         number;
  demonyms:     Demonyms;
  flag?:        string;
  maps:         Maps;
  population:   number;
  car:          Car;
  timezones:    string[];
  continents:   Continent[];
  flags:        CoatOfArms;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  cioc?:        string;
  currencies?:  Currencies;
  capital?:     string[];
  subregion?:   string;
  borders?:     string[];
  gini?:        { [key: string]: number };
  fifa?:        string;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  GHS?: Afn;
  KHR?: Afn;
  USD?: Afn;
  BHD?: Afn;
  LBP?: Afn;
  EUR?: Afn;
  IRR?: Afn;
  BAM?: BAM;
  HNL?: Afn;
  TJS?: Afn;
  CHF?: Afn;
  CZK?: Afn;
  MRU?: Afn;
  BWP?: Afn;
  XAF?: Afn;
  XCD?: Afn;
  SHP?: Afn;
  AMD?: Afn;
  SYP?: Afn;
  XPF?: Afn;
  HUF?: Afn;
  THB?: Afn;
  CNY?: Afn;
  JPY?: Afn;
  TND?: Afn;
  KPW?: Afn;
  PHP?: Afn;
  BND?: Afn;
  SGD?: Afn;
  GBP?: Afn;
  KES?: Afn;
  UGX?: Afn;
  KZT?: Afn;
  KRW?: Afn;
  HTG?: Afn;
  PKR?: Afn;
  SOS?: Afn;
  INR?: Afn;
  SSP?: Afn;
  ANG?: Afn;
  SDG?: BAM;
  MAD?: Afn;
  DJF?: Afn;
  IQD?: Afn;
  ETB?: Afn;
  NZD?: Afn;
  DZD?: Afn;
  TZS?: Afn;
  ALL?: Afn;
  ZAR?: Afn;
  TRY?: Afn;
  SCR?: Afn;
  TWD?: Afn;
  AUD?: Afn;
  LSL?: Afn;
  BDT?: Afn;
  KMF?: Afn;
  MVR?: Afn;
  CDF?: Afn;
  BMD?: Afn;
  VND?: Afn;
  GMD?: Afn;
  YER?: Afn;
  MOP?: Afn;
  BSD?: Afn;
  SAR?: Afn;
  HKD?: Afn;
  LAK?: Afn;
  BTN?: Afn;
  CLP?: Afn;
  JOD?: Afn;
  MMK?: Afn;
  AFN?: Afn;
  HRK?: Afn;
  MKD?: Afn;
}

export interface Afn {
  name:   string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root?:     string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Sunday = "sunday",
  Turday = "turday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
}

import { CurrencyTableRowData } from "../types/CurrencyTableRowData";
import { ICurrencyRatesMap } from "./ICurrencyRatesMap";

export interface IExchangeRatesTableProps {
	currencyTableHeaders?: string[];
	currencyTableRows?: CurrencyTableRowData[];
	currencyRatesMap?: ICurrencyRatesMap
};

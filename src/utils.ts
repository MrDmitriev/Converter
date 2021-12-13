import { ICurrencyRatesMap } from "./interfaces/ICurrencyRatesMap";

export const ConvertTextToJson = (data: string) => data.split('\n');

export const getCurrencyRatesHeaders = (items: string[]) => items[1].split('|');

export const convertToNumber = (value: string) => {
	return typeof value === 'string' ? Number(value.replace(/,/, '.')) : value;
}

export const getCurrencyData = (textData: any) => {
	const items = ConvertTextToJson(textData);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [ _info, headers, ...values] = items;
	let currencyRatesMap: ICurrencyRatesMap = {};

	const currencyTableHeaders = headers.split('|');
	const currencyTableRows = values.filter(item => !!item).map(valueArr => valueArr.split('|'));
	currencyTableRows.forEach(row => {
		const amount = +row[2];
		const currencyCode = row[3];
		const currencyRate = Number(row[4].replace(/,/, '.'));
		if (!currencyRatesMap.hasOwnProperty(currencyCode)) {
			currencyRatesMap[currencyCode] = currencyRate / amount;
		}
	})

	return { currencyTableHeaders, currencyTableRows, currencyRatesMap };
}
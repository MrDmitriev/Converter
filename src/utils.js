export const ConvertTextToJson = data => data.split('\n');

export const getCurrencyRatesHeaders = (items) => items[1].split('|');

export const getCurrencyData = (textData) => {
	const items = ConvertTextToJson(textData);
	const [ _info, headers, ...values] = items;
	let currencyRatesMap = {};

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
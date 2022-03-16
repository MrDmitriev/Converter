import axios, { AxiosResponse } from "axios";

import { CURRENCY_RATES_CZ_BANK } from "../constants/constants";
import { getProxyUrl } from "../utils/utils";

export const getCurrencyRates = async (): Promise<string|undefined> => {
	try {
		const result: AxiosResponse = await axios.get(getProxyUrl(CURRENCY_RATES_CZ_BANK));
		return result?.data;
	} catch (error) {
		console.log('An error occured, #api/getCurrencyRates:', error)
	}
}
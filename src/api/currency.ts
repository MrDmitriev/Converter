import axios, { AxiosResponse } from "axios";
import config from "../config";

export const getCurrencyRates = async (): Promise<string|undefined> => {
	try {
		const result: AxiosResponse = await axios.get(config.api.currencyRatesEndpointTxt);
		return result?.data;
	} catch (error) {
		console.log('An error occured, #api/getCurrencyRates:', error)
	}
}
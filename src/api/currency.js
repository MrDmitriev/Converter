import axios from "axios";
import config from "../config";

export const getCurrencyRates = async () => {
	try {
		const result = await axios.get(config.api.currencyRatesEndpointTxt);
		return result;
	} catch (error) {
		console.log('An error occured, #api/getCurrencyRates:', error.message)
	}
}
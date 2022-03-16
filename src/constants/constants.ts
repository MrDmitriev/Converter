import config from '../config';

const { CzechCentralBank } = config.api;
const { baseUrl, currencyRatesEndpointTxt } = CzechCentralBank;


export const PROXY_CORS_WORKAROUND = 'https://api.allorigins.win/raw?url=';

// ENDPOINTS
export const CURRENCY_RATES_CZ_BANK = `${baseUrl}${currencyRatesEndpointTxt}`

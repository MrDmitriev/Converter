import config from '../config';

const { CzechCentralBank } = config.api;
const { baseUrl, currencyRatesEndpointTxt } = CzechCentralBank;

// EXCHANGE RATES DATA
export const AMOUNT_COLUMN = 2;
export const CURRENCY_CODE_COLUMN = 3;
export const CURRENCY_RATE_COLUMN = 4;
export const DEFAULT_CURRENCY_AMOUNT = 100;

// WARNINGS
export const NO_DATA_LOADED_WARNING = 'We have not got any data from the bank';

// ENDPOINTS
export const PROXY_CORS_WORKAROUND = 'https://api.allorigins.win/raw?url=';
export const CURRENCY_RATES_CZ_BANK = `${baseUrl}${currencyRatesEndpointTxt}`

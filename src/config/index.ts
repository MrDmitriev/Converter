const config = {
	api: {
		CzechCentralBank: {
			baseUrl: 'https://www.cnb.cz',
			currencyRatesEndpointTxt: '/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt',
			withCredentials: true,
		}
	}
};

export default config;
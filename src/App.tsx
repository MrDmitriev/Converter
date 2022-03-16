import React from 'react';
import styled from 'styled-components';
import { useQuery, UseQueryResult } from 'react-query'

import Flex from './components/Common/Flex';
import ExchangeRatesTable from './components/ExchangeRatesTable/ExchangeRatesTable';
import CurrencyConverterForm from './components/CurrencyConverterForm';
import { getCurrencyRates } from './api/currency';
import { getCurrencyData } from './utils/utils';
import Title from './components/Common/Title';
import { NO_DATA_LOADED_WARNING } from './constants/constants';

const AppWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	padding: 2rem;
	background-image: linear-gradient(to right, #fc5c7d, #6a82fb);
	color: white;
`

function App() {
	const { isLoading, isError, data, error }: UseQueryResult<string, Error> = useQuery('currencyRates', getCurrencyRates);
	
	if (isLoading) {
		return <span>Loading...</span>
	}

	if (isError || !data) {
		return <span>`Error: ${error? error.message : NO_DATA_LOADED_WARNING}`</span>
	}

	const { currencyTableHeaders = [], currencyTableRows, currencyRatesMap } = getCurrencyData(data);

  return (
    <AppWrapper className="App">
      <Flex justify="center">
				<Title>Currency converter</Title>
			</Flex>
			<Flex justify="space-around">
				<ExchangeRatesTable
					currencyTableHeaders={currencyTableHeaders}
					currencyTableRows={currencyTableRows}
				/>
				<CurrencyConverterForm currencyRatesMap={currencyRatesMap}/>
			</Flex>

    </AppWrapper>
  );
}

export default App;



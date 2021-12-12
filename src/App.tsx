import React from 'react';
import styled from 'styled-components';
import CurrencyConverterForm from './components/CurrencyConverterForm';

import { ExchangeRatesTable } from './components/ExchangeRatesTable';
import Flex from './components/Flex';
import Title from './components/Title';

const AppWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	padding: 2rem;
	background-image: linear-gradient(to right, #fc5c7d, #6a82fb);
	color: white;
`

function App() {
  return (
    <AppWrapper className="App">
      <Flex justify="center">
				<Title>Currency converter</Title>
			</Flex>
			<Flex justify="space-around">
				<ExchangeRatesTable headerItems={['Country', 'Currency', 'Amount', 'Code', 'Rate']} data={[]}/>
				<CurrencyConverterForm />
			</Flex>

    </AppWrapper>
  );
}

export default App;

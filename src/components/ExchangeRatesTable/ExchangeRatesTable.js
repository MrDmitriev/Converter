import React from 'react';
import styled from 'styled-components';

import ExchangeRatesTableHeader from './ExchangeRatesTableHeader';
import ExchangeRatesTableBody from './ExchangeRatesTableBody';

const TableWrapperStyled = styled.div`
	overflow-y: auto;
	overflow-x: hidden;
  height: 410px;
`
const TableStyled = styled.table`
	border-collapse: collapse;        
	width: 100%;

`

export const ExchangeRatesTable = ({currencyTableHeaders, currencyTableRows}) => {

	return (
		<TableWrapperStyled>
			<TableStyled>
				<ExchangeRatesTableHeader currencyTableHeaders={currencyTableHeaders} />
				<ExchangeRatesTableBody currencyTableRows={currencyTableRows} />
			</TableStyled>
		</TableWrapperStyled>
	);
}

export default ExchangeRatesTable;
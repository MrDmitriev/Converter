import React from 'react';
import styled from 'styled-components';

import ExchangeRatesTableHeader from './ExchangeRatesTableHeader';
import ExchangeRatesTableBody from './ExchangeRatesTableBody';
import { CurrencyTableRowData } from '../../types/CurrencyTableRowData';

const TableWrapperStyled = styled.div`
	overflow-y: auto;
	overflow-x: hidden;
  height: 410px;
`
const TableStyled = styled.table`
	border-collapse: collapse;        
	width: 100%;
`
type Props = {
	currencyTableHeaders?: string[];
	currencyTableRows?: CurrencyTableRowData[];
	currencyRatesMap?: {
		[index: string]: number
	}
};

export const ExchangeRatesTable: React.FC<Props> = ({currencyTableHeaders, currencyTableRows}: Props) => {

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
import React from 'react';
import styled from 'styled-components';
import { CurrencyTableRowData } from '../../types/CurrencyTableRowData';

const THeadStyled = styled.thead`
`
const THStyled = styled.th`
	background: #d367a1;
	padding: 20px;
	text-align: left;
	border-bottom: 0.1px dashed white;
	position: sticky;
  top: 0;
`

type Props = {
	currencyTableHeaders?: string[];
	currencyTableRows?: CurrencyTableRowData[];
	currencyRatesMap?: {
		[index: string]: number
	}
}

const ExchangeRatesTableHeader: React.FC<Props> = ({currencyTableHeaders = []}: Props) => {
	return (
		<THeadStyled>
			<tr>
				{ currencyTableHeaders.map(item => <THStyled key={item} >{item}</THStyled>) }
			</tr>
		</THeadStyled>
	);
};

export default ExchangeRatesTableHeader;
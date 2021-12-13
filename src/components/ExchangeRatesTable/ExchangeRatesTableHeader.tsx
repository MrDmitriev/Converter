import React from 'react';
import styled from 'styled-components';
import { IExchangeRatesTableProps } from '../../interfaces/IExchangeRatesTableProps';

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

const ExchangeRatesTableHeader: React.FC<IExchangeRatesTableProps> = ({currencyTableHeaders = []}) => {
	return (
		<THeadStyled>
			<tr>
				{ currencyTableHeaders.map(item => <THStyled key={item} >{item}</THStyled>) }
			</tr>
		</THeadStyled>
	);
};

export default ExchangeRatesTableHeader;
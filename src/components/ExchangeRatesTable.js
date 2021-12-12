import React from 'react';
import styled from 'styled-components';

const ColumnStyled = styled.td`
	padding: 20px;
	text-align: left;
	border-bottom: 0.1px dashed white;
`
export const ExchangeRatesTable = ({headerItems, data}) => {
	return (
		<table>
			<thead>
				<tr>
					{ headerItems.map(item => <ColumnStyled>{item}</ColumnStyled>) }
				</tr>
			</thead>
			<tbody>
				<tr>
					<ColumnStyled>Germany</ColumnStyled>
					<ColumnStyled>Euro</ColumnStyled>
					<ColumnStyled>1</ColumnStyled>
					<ColumnStyled>EUR</ColumnStyled>
					<ColumnStyled>25,3</ColumnStyled>
				</tr>
				<tr>
					<ColumnStyled>Germany</ColumnStyled>
					<ColumnStyled>Euro</ColumnStyled>
					<ColumnStyled>1</ColumnStyled>
					<ColumnStyled>EUR</ColumnStyled>
					<ColumnStyled>25,3</ColumnStyled>
				</tr>
				<tr>
					<ColumnStyled>Germany</ColumnStyled>
					<ColumnStyled>Euro</ColumnStyled>
					<ColumnStyled>1</ColumnStyled>
					<ColumnStyled>EUR</ColumnStyled>
					<ColumnStyled>25,3</ColumnStyled>
				</tr>
				<tr>
					<ColumnStyled>Germany</ColumnStyled>
					<ColumnStyled>Euro</ColumnStyled>
					<ColumnStyled>1</ColumnStyled>
					<ColumnStyled>EUR</ColumnStyled>
					<ColumnStyled>25,3</ColumnStyled>
				</tr>
			</tbody>
		</table>
	);
}
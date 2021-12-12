import React from 'react';
import styled from 'styled-components';

const TableWrapperStyled = styled.div`
	overflow-y: auto;
	overflow-x: hidden;
  height: 410px;
`
const TableStyled = styled.table`
	border-collapse: collapse;        
	width: 100%;

`

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

const ColumnStyled = styled.td`
padding: 20px;
text-align: left;
border-bottom: 0.1px dashed white;
`

export const ExchangeRatesTable = ({headerItems, data}) => {
	return (
		<TableWrapperStyled>
			<TableStyled>
				<THeadStyled>
					<tr>
						{ headerItems.map(item => <THStyled>{item}</THStyled>) }
					</tr>
				</THeadStyled>
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
			</TableStyled>
		</TableWrapperStyled>
	);
}
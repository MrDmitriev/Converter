import React from 'react';
import styled from 'styled-components';
import { CurrencyTableRowData } from '../../types/CurrencyTableRowData';

const ColumnStyled = styled.td`
padding: 20px;
text-align: left;
border-bottom: 0.1px dashed white;
`
type Props = {
	row: CurrencyTableRowData
}
const TableRow: React.FC<Props> = ({row}: Props) => {
	return (
		<tr>
			{row.map((rowItem: string, i: number) => <ColumnStyled key={i} >{rowItem}</ColumnStyled>)}
		</tr>
	);
};

export default TableRow;
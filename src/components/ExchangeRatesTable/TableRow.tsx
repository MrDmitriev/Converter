import React from 'react';
import styled from 'styled-components';
import { ICurrencyTableRowProps } from '../../interfaces/ICurrencyTableRowProps';

const ColumnStyled = styled.td`
padding: 20px;
text-align: left;
border-bottom: 0.1px dashed white;
`

const TableRow: React.FC<ICurrencyTableRowProps> = ({row}) => {
	return (
		<tr>
			{row.map((rowItem: string, i: number) => <ColumnStyled key={i} >{rowItem}</ColumnStyled>)}
		</tr>
	);
};

export default TableRow;
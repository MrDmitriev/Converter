import React from 'react';
import styled from 'styled-components';

const ColumnStyled = styled.td`
padding: 20px;
text-align: left;
border-bottom: 0.1px dashed white;
`

const TableRow = ({row}) => {
	return (
		<tr>
			{row.map((rowItem, i) => <ColumnStyled key={i} >{rowItem}</ColumnStyled>)}
		</tr>
	);
};

export default TableRow;
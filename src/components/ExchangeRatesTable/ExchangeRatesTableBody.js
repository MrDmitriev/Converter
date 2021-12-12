import React from 'react';
import TableRow from './TableRow';


const ExchangeRatesTableBody = ({currencyTableRows}) => {
	return (
		<tbody>
			{ currencyTableRows.map(row => <TableRow key={row[3]} row={row} />)}
		</tbody>
	);
};

export default ExchangeRatesTableBody;
import React from 'react';
import { IExchangeRatesTableProps } from '../../interfaces/IExchangeRatesTableProps';
import TableRow from './TableRow';


const ExchangeRatesTableBody: React.FC<IExchangeRatesTableProps> = ({currencyTableRows = []}) => {
	return (
		<tbody>
			{ currencyTableRows.map(row => <TableRow key={row[3]} row={row} />)}
		</tbody>
	);
};

export default ExchangeRatesTableBody;
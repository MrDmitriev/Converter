import React from 'react';
import { CurrencyTableRowData } from '../../types/CurrencyTableRowData';
import TableRow from './TableRow';

type Props = {
	currencyTableHeaders?: string[];
	currencyTableRows?: CurrencyTableRowData[];
	currencyRatesMap?: {
		[index: string]: number
	}
};

const ExchangeRatesTableBody: React.FC<Props> = ({currencyTableRows = []}) => {
	return (
		<tbody>
			{ currencyTableRows.map(row => <TableRow key={row[3]} row={row} />)}
		</tbody>
	);
};

export default ExchangeRatesTableBody;
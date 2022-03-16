import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { CurrencyTableRowData } from '../types/CurrencyTableRowData';
import { convertToNumber } from '../utils/utils';

const FormStyled = styled.form`
	padding: 20px;
`
const LabelStyled = styled.label`
	padding-right: 10px;
	font-size: 25px;
`
const InputStyled = styled.input`
	text-align: center;
	max-width: 200px;
	border-radius: 5px;
	border-width: 0.7px;
	margin: 10px 20px;
	opacity: 0.5;
	background-color: transparent;
	text-align: center;
	font-size: 40px;
	color: white;
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	:focus-visible{
		outline: none;
		opacity: 0.7;
		color: black;
	}
`
const SelectStyled = styled.select`
	font-size: 25px;
	border-radius: 5px;
	border-color: transparent;
	background-color: transparent;
	vertical-align: super;
	margin: 0 10px;
	opacity: 0.5;
	:focus-visible{
		outline: none;
		opacity: 0.7;
		color: black;
	}
`

type Props = {
	currencyTableHeaders?: string[];
	currencyTableRows?: CurrencyTableRowData[];
	currencyRatesMap?: {
		[index: string]: number
	}
};

const CurrencyConverterForm: React.FC<Props> = ({currencyRatesMap = {}}: Props) => {
	const outputCurrencyCodes = Object.keys(currencyRatesMap);
	const [inputAmount, setInputAmount] = useState<number>(100);
	const [outputAmount, setOutputAmount] = useState<number>(100);
	const [outputCurrencyCode, setOutputCurrencyCode] = useState<string>(outputCurrencyCodes[0])


	const calculateOutput = (inputAmount: number) => {
		const rate: number = currencyRatesMap[outputCurrencyCode];
		const outputAmount: number = convertToNumber((inputAmount / rate).toFixed(2));
		setOutputAmount(outputAmount);
	}

	const calculateInput = (outputAmount: number) => {
		const rate: number = currencyRatesMap[outputCurrencyCode];
		const inputAmount: number = convertToNumber((outputAmount * rate).toFixed(2));
		setInputAmount(inputAmount);
	}
	
	const handleOutputCurrencyCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setOutputCurrencyCode(e.target.value);
	}

	const handleInputAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputAmount = convertToNumber(e.target.value);

		if (e.target.value) {
			setInputAmount(inputAmount);
			calculateOutput(inputAmount);
		}
	}

	const handleOutputAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const outputAmount = convertToNumber(e.target.value);
		if (e.target.value) {
			setOutputAmount(outputAmount);
			calculateInput(outputAmount);
		}
	}

useEffect(() => {
	calculateOutput(inputAmount);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [outputCurrencyCode]);

	return (
		<FormStyled>
			<LabelStyled>
			<InputStyled
				type="number"
				name="converterInputValue"
				value={inputAmount}
				min={1}
				onChange={handleInputAmountChange}
			/>
			<SelectStyled disabled>
					<option value="CZK">CZK</option>
				</SelectStyled>
			</LabelStyled>
			<br />
			<LabelStyled>
				<InputStyled
					onChange={handleOutputAmountChange}
					type="number"
					name="converterOutputAmount"
					value={outputAmount}
					min={1}
				/>
				<SelectStyled
					name="currencyCodesList"
					onChange={handleOutputCurrencyCodeChange}
				>
					{outputCurrencyCodes.map(code => <option key={code} value={code}>{code}</option>)}
				</SelectStyled>
			</LabelStyled>
		</FormStyled>
	);
};

export default CurrencyConverterForm;
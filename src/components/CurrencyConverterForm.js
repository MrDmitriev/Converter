import React from 'react';
import styled from 'styled-components';

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
	font-size: 22px;
	border-radius: 5px;
	border-width: 0.7px;
	margin: 0 20px;
	opacity: 0.5;
	:focus-visible{
		outline: none;
		opacity: 0.7;
		color: black;
	}
`
const SelectStyled = styled.select`
	font-size: 22px;
	border-radius: 5px;
	border-color: transparent;
	margin: 0 10px;
	opacity: 0.5;
	:focus-visible{
		outline: none;
		opacity: 0.7;
		color: black;
	}
`
const ResultInputStyled = styled(InputStyled)`
	background-color: transparent;
	text-align: center;
	margin: 10px 0;
	font-size: 40px;
	color: white;
	::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`

const CurrencyConverterForm = () => {
	return (
		<FormStyled>
			<LabelStyled>
			<ResultInputStyled type="number" defaultValue={10000} min={1} />
			<SelectStyled disabled>
					<option defaultValue={true} value="CZK">CZK</option>
				</SelectStyled>
			</LabelStyled>
			<br />
			<LabelStyled>
				<ResultInputStyled type="number" defaultValue={10000} min={1} />
				<SelectStyled>
					<option value="EUR">EUR</option>
					<option value="USD">USD</option>
				</SelectStyled>
			</LabelStyled>
		</FormStyled>
	);
};

export default CurrencyConverterForm;
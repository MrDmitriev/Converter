import React from 'react';
import styled from 'styled-components';

const TitleStyled = styled.h1`
color: white;
`

const Title = ({children}) => {
	return (
		<TitleStyled>
			{children}
		</TitleStyled>
	);
};

export default Title;
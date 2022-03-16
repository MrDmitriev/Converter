import React from 'react';
import styled from 'styled-components';

type FlexProps = {
	direction?: string;
	align?: string;
	justify?: string;
	margin?: string;
}

const FlexStyled = styled.div`
	display: flex;
	flex-direction: ${(props: FlexProps) => props.direction || 'row'};
	align-items: ${(props: FlexProps) => props.align || 'stretch'};
	justify-content: ${(props: FlexProps) => props.justify || 'stretch'};
	margin: ${(props: FlexProps) => props.margin || '0'};
`
const Flex: React.FC<FlexProps> = (props) => {
	return <FlexStyled {...props} />;
};

export default Flex;
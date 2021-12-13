import React from 'react';
import styled from 'styled-components';
import { IFlexProps } from '../../interfaces/IFlexProps';

const FlexStyled = styled.div`
	display: flex;
	flex-direction: ${(props: IFlexProps) => props.direction || 'row'};
	align-items: ${(props: IFlexProps) => props.align || 'stretch'};
	justify-content: ${(props: IFlexProps) => props.justify || 'stretch'};
	margin: ${(props: IFlexProps) => props.margin || '0'};
`
const Flex: React.FC<IFlexProps> = (props) => {
	return <FlexStyled {...props} />;
};

export default Flex;
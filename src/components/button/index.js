import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const ButtonWrapper = styled.button`
    color: ${props=> props.color};
    padding: 5px 10px;
    background: ${props=> props.background}
    border:none;
`;

const Button = ({color,background, children}) => {
    return (
        <ButtonWrapper 
            color={color}
            background={background}
        >
        {children}
        </ButtonWrapper>
    );
};

Button.propTypes = {
    color: PropTypes.string,
    background: PropTypes.string
};

export default Button;
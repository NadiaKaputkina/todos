import React from 'react';

import PropTypes from 'prop-types';

export const Button = ({ id, type, className, onClick, children, ...attrs }) => {

    return (
        <button
            id={id}
            type={type}
            className={`btn ${className}`}
            onClick={onClick}
            {...attrs}
        >
            { children }
        </button>
    )
};

Button.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
};

Button.defaultProps = {
    id: '',
    type: '',
    className: '',
    onClick: () => {},
    children: null,
};
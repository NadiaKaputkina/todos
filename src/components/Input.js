import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ id, type, className, placeholder, value, onChange, checked, ...attrs }) => {

    return (
        <input
            id={id}
            type={type}
            className={`input ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            checked={checked}
            {...attrs}
        />
    )
};

Input.propTypes = {
    id: PropTypes.number,
    type: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
};

Input.defaultProps = {
    id: null,
    type: '',
    className: '',
    placeholder: '',
    value: '',
    checked: true,
    onChange: () => {},
};
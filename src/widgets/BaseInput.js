import React, { PropTypes } from 'react';

import TextField from 'material-ui/TextField';

function BaseInput(props) {
	const {
		id,
		type,
		multiline,
		label,
		placeholder,
		value,
		required,
		disabled,
		readonly,
		autofocus,
		onChange,
	} = props;
	return (
		<TextField
			id={id}
			type={type}
			multiline={multiline}
			label={label}
			value={typeof value === "undefined" ? "" : value}
			placeholder={placeholder}
			required={required}
			disabled={disabled}
      readOnly={readonly}
      autoFocus={autofocus}
			onChange={(event) => onChange(event.target.value)}
		/>
	);
}

BaseInput.defaultProps = {
	type: "text",
	multiline: false,
	required: false,
	disabled: false,
  readonly: false,
  autofocus: false,
};

if (process.env.NODE_ENV !== "production") {
	BaseInput.propTypes = {
		id: PropTypes.string.isRequired,
		multiline: PropTypes.bool,
		label: PropTypes.string,
		value: PropTypes.any,
		placeholder: PropTypes.string,
		required: PropTypes.bool,
		disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
		onChange: PropTypes.func,
	};
}

export default BaseInput;

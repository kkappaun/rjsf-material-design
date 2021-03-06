import React, { PropTypes } from "react";

import Select from "material-ui/Select";
import { MenuItem } from "material-ui/Menu";
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { asNumber } from 'react-jsonschema-form/lib/utils';

/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */
function processValue({ type, items }, value) {
	if (type === "array" && items && ["number", "integer"].includes(items.type)) {
		return value.map(asNumber);
	} else if (type === "boolean") {
		return value === "true";
	} else if (type === "number") {
		return asNumber(value);
	}
	return value;
}

function SelectWidget({
	schema,
	id,
	options,
	value,
	label,
	title,
	required,
	disabled,
	readonly,
	multiple,
	autofocus,
	onChange
}) {
	const { enumOptions } = options;

	return (
		<FormControl>
			<InputLabel htmlFor={id}>{title?title:label}</InputLabel>
				<Select
					id={id}
					multiple={multiple}
					label={label}
					value={value?value:null}
					required={required}
					disabled={disabled}
					readOnly={readonly}
					autoFocus={autofocus}
					onChange={(event) => {
						onChange(processValue(schema, event.target.value));
					}}>{
					enumOptions.map(({ value, label }, i) => {
						return <MenuItem key={i} value={value}>{label?label:value}</MenuItem>;
					})
				}</Select>
			</FormControl>
	);
}

SelectWidget.defaultProps = {
	autofocus: false,
};

if (process.env.NODE_ENV !== "production") {
	SelectWidget.propTypes = {
		schema: PropTypes.object.isRequired,
		id: PropTypes.string.isRequired,
		options: PropTypes.shape({
			enumOptions: PropTypes.array,
		}).isRequired,
		value: PropTypes.any,
		required: PropTypes.bool,
		multiple: PropTypes.bool,
		autofocus: PropTypes.bool,
		onChange: PropTypes.func,
	};
}

export default SelectWidget;

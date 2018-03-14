import React from "react";
import Radio, { RadioGroup } from "material-ui/Radio";
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form'
import { asNumber } from 'react-jsonschema-form/lib/utils';

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

function RadioWidget({
	schema,
	options,
	value,
	disabled,
	label,
	onChange
}) {
	// Generating a unique field name to identify this set of radio buttons
	const name = Math.random().toString();
	const { enumOptions } = options;
	return (
		<RadioGroup
			name={name}
		  value={''+value}
      onChange={(event) => onChange(processValue(schema, event.target.value))}>{
			enumOptions.map((option, i) => {
				return (
					<FormControlLabel control={<Radio />} key={i}
					             name={name}
					             value={''+option.value}
					             disabled={disabled}
					             label={option.label}
					/>
				);
			})
		}</RadioGroup>
	);
}

export default RadioWidget;

import React, { PropTypes } from "react";
import { FormControlLabel } from 'material-ui/Form'
import Checkbox from "material-ui/Checkbox";

function selectValue(value, selected, all) {
	const at = all.indexOf(value);
	const updated = selected.slice(0, at).concat(value, selected.slice(at));
	// As inserting values at predefined index positions doesn't work with empty
	// arrays, we need to reorder the updated selection to match the initial order
	return updated.sort((a, b) => all.indexOf(a) > all.indexOf(b));
}

function deselectValue(value, selected) {
	return selected.filter(v => v !== value);
}

function CheckboxesWidget(props) {
	const {
		id,
		disabled,
		options,
		value,
		onChange,
		color,
	} = props;
	const { enumOptions, inline } = options;

	return (
		<div className="checkboxes" id={id}>{
			enumOptions.map((option, index) => {
				const checked = value.indexOf(option.value) !== -1;
				return (
					<FormControlLabel
						control={
							<Checkbox
								key={index}
								checked={checked}
								disabled={disabled}
								onChange={(event) => {
									const all = enumOptions.map(({ value }) => value);
									if (event.target.checked) {
										onChange(selectValue(option.value, value, all));
									} else {
										onChange(deselectValue(option.value, value));
									}
								}}
							/>
						}
						label={option.label}
					/>
				);
			})
			}</div>
	);
}

CheckboxesWidget.defaultProps = {
	autofocus: false,
	options: {
		inline: false
	},
};

if (process.env.NODE_ENV !== "production") {
	CheckboxesWidget.propTypes = {
		schema: PropTypes.object.isRequired,
		id: PropTypes.string.isRequired,
		options: PropTypes.shape({
			enumOptions: PropTypes.array,
			inline: PropTypes.bool,
		}).isRequired,
		value: PropTypes.any,
		required: PropTypes.bool,
		multiple: PropTypes.bool,
		autofocus: PropTypes.bool,
		onChange: PropTypes.func,
	};
}

export default CheckboxesWidget;

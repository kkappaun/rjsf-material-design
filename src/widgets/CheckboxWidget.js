import React from 'react';
import { FormControlLabel } from 'material-ui/Form'
import Checkbox from 'material-ui/Checkbox';

function CheckboxWidget({
	id,
	value,
	disabled,
	label,
	onChange,
}) {
	return (
		<FormControlLabel
          control={
						<Checkbox
							id={id}
							checked={!!value}
							disabled={disabled}
							onChange={(event) => onChange(event.target.checked)}
							label={label}
						/>
          }
          label={label}
        />

	);
}
export default CheckboxWidget;

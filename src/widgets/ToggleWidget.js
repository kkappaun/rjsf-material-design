import React from "react";
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Switch from 'material-ui/Switch';

function processValue(value) {
	return value;
}

function ToggleWidget({
    value,
    disabled,
    label,
    onChange
}) {
    return (
      <FormControlLabel
          control={
            <Switch
              checked={value}
              onChange={(event) => {
                  onChange(processValue(event.target.checked));
              }}
            />
          }
          label={label}
        />
    );
}

export default ToggleWidget;

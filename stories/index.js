import React from 'react';

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'



import Form from './../src/index';

const stories = storiesOf('Material Design Form', module);

const capitalizeFirstLetter =
	string => string.charAt(0).toUpperCase() + string.slice(1);

const sampleFilenames = require.context('./samples', true, /.js$/);

const sampleFilenameRegex = /^.\/(.*).js$/;

sampleFilenames.keys().forEach(
	filename => {
		const sampleNameMatches = filename.match(sampleFilenameRegex);
		const sampleName = sampleNameMatches[sampleNameMatches.length - 1];
		const sampleContent = sampleFilenames(filename);
		stories.add(capitalizeFirstLetter(sampleName), () => (
			<Form
				{...sampleContent}
				onSubmit={action('Submit')}
			/>
		));
	});

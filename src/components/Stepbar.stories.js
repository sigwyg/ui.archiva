import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Stepbar from './Stepbar';

storiesOf('Forms', module).add('Stepbar', () => <Stepbar />);

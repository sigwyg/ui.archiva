import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Stepbar from '../components/Stepbar';

storiesOf('Forms', module).add('stepbar', () => <Stepbar />);

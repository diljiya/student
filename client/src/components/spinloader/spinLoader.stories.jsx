import React from 'react';
import { storiesOf } from '@storybook/react';

import SpinLoader from './spinLoader';

storiesOf('Components/SpinLoader', module)
  .add('Loading',
    () => (
      <div style={{ height: '100vh', background: 'aliceblue', padding: '25% 40%' }}>
        <h1>Contents</h1>
        <SpinLoader isLoading={true} />
      </div>
    ))
  .add('Not loading',
    () => (
      <div style={{ height: '100vh', background: 'aliceblue', padding: '25% 40%' }}>
        <h1>Contents</h1>
        <SpinLoader isLoading={false} />
      </div>
    ));

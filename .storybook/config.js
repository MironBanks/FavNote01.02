import { configure } from '@storybook/react';

configure(require.context('../src', true, /\.stories\.js$/), module);
/*
import { configure } from '@storybook/react';

function loadStories() {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module); */

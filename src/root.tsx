import { Html } from '@builder.io/qwik-city';
import { Head } from './components/head/head';
import { Body } from './components/body/body';

export default () => {
  return (
    <Html lang="en">
      <Head />
      <Body />
    </Html>
  );
};

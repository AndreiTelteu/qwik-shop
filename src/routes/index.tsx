import { component$, Host } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import SwiperBlock from '~/components/SwiperBlock/SwiperBlock';

export default component$(() => {
  return (
    <Host>
      <SwiperBlock />

      <p>The meta-framework for Qwik.</p>
    </Host>
  );
});

export const head: DocumentHead = {
  title: 'Homepage',
};

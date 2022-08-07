import { component$, useStyles$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';
import { Analytics } from './analytics';
import { Social } from './social';
import fonts from '~/fonts.scss?inline';

export const Head = component$(
  () => {
    const head = useDocumentHead();
    const loc = useLocation();
    useStyles$(fonts);

    return (
      <>
        <meta charSet="utf-8" />

        <title>{head.title ? `${head.title} - Shop` : `Shop`}</title>

        <link rel="canonical" href={loc.href} />

        {head.meta.map((m) => (
          <meta {...m} />
        ))}

        {head.links.map((l) => (
          <link {...l} />
        ))}

        {head.styles.map((s) => (
          <style {...s.props} dangerouslySetInnerHTML={s.style} />
        ))}

        <Social />
        <Analytics loc={loc} />
      </>
    );
  },
  { tagName: 'head' }
);

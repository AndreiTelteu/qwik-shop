import { component$, Host, useStore, useStyles$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import styles from './header.scss?inline';
import { menuItems } from './menu-items';

export default component$(() => {
  useStyles$(styles);
  const pathname = useLocation().pathname;
  const state = useStore({
    compact: 25,
  });

  return (
    <Host window:onScroll$={() => {
        let newCompact = 15 - Math.round((Math.min(window.scrollY, 300) / 300) * 15) +10;
        if (newCompact != state.compact) state.compact = newCompact;
      }}>
      <div class={`header header-p-${state.compact}`}>
        <div class="header-inner">
          <section class="logo">
            <a href="/">Shop</a>
          </section>
          <nav>
            {menuItems.map(item => (
              <div class="menu-item-wrapper">
                <a href={item.href || '#'} class={{
                  'menu-item': true,
                  'menu-item-active': pathname.startsWith('/blog'),
                }}>
                  <span>{item.name as any}</span>
                </a>
                {item.items && item.items?.length > 0 ? (
                  <div class="menu-item-subitems">
                    {item.items.map(subItem => (
                      <a href={subItem.href || '#'} class="menu-subitem">
                        <span>{subItem.name as any}</span>
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </Host>
  );
}, {
  tagName: 'header',
});

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
            {menuItems.map(item => {
              let isDeep = false;
              if (item.items && item.items?.length > 0) {
                item.items.forEach(subItem => {
                  if (subItem.items && subItem.items?.length > 0) isDeep = true;
                });
              }
              return (
                <div class={`menu-item-wrapper ${isDeep ? 'is-deep' : 'not-deep'}`}>
                  <a href={item.href || '#'} class={{
                    'menu-item': true,
                    'menu-item-active': pathname.startsWith(item.href || 'nothing'),
                  }}>
                    <span>{item.name as any}</span>
                  </a>
                  {item.items && item.items?.length > 0 ? (
                    <div class="menu-item-subitems">
                      <div class="menu-item-subitems-inner">
                        {item.items.map(subItem => (
                          <div class="menu-subitem is-bold">
                            <a href={subItem.href || '#'}>
                              <span>{subItem.name as any}</span>
                            </a>
                            {subItem.items && subItem.items?.length > 0 ? (
                              <div class="menu-subitem-items">
                                {subItem.items.map(subSubItem => (
                                  <div>
                                    <a href={subSubItem.href || '#'}>
                                      <span>{subSubItem.name as any}</span>
                                    </a>
                                  </div>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </Host>
  );
}, {
  tagName: 'header',
});

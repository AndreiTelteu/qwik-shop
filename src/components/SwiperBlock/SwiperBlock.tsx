import { component$, Host, useClientEffect$ } from '@builder.io/qwik';
import Swiper from 'swiper';
import 'swiper/css';

export default component$(() => {
  useClientEffect$(() => {
    const swiper = new Swiper('.swiper-block .swiper', {
      speed: 400,
      slidesPerView: 1,
      loop: true,
      on: {
        slideChange: () => console.log('slide change'),
      },
    });
  });

  return (
    <Host class="swiper-block">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://www.synevo.ro/wp-content/webp-express/webp-images/uploads/2021/10/Bannere-1903-590-px-9.jpg.webp" />
          </div>
          <div class="swiper-slide">
            <img src="https://www.synevo.ro/wp-content/webp-express/webp-images/uploads/2022/06/Synevo_BTS_HP_1903x590_2.jpg.webp" />
          </div>
          <div class="swiper-slide">
            <img src="https://www.synevo.ro/wp-content/webp-express/webp-images/uploads/2022/07/Synevo_HB_Site_Web.jpg.webp" />
          </div>
          <div class="swiper-slide">
            <img src="https://www.synevo.ro/wp-content/webp-express/webp-images/uploads/2022/07/Banner-1903-590px-VERAgene.jpg.webp" />
          </div>
          <div class="swiper-slide">
            <img src="https://www.synevo.ro/wp-content/webp-express/webp-images/uploads/2022/02/Bannere-1903-590-px-21.jpg.webp" />
          </div>
        </div>
      </div>
    </Host>
  );
}, {
  tagName: 'div'
});

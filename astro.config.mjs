import { defineConfig } from 'astro/config';
import { astroImageTools } from 'astro-imagetools';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://jrgf.github.io',
  integrations: [
    tailwind(), 
    astroImageTools, 
    image(
    {
      serviceEntryPoint: '@astrojs/image/sharp'
    }
  ),
  ]
});
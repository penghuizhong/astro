import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [
    starlight({
      title: '方圆智版 AI',
      sidebar: [
        {
          label: '基础入门',
          items: [{ autogenerate: { directory: 'getting-started' } }]
        },
        {
          label: '版型库',
          items: [{ autogenerate: { directory: 'pattern-library' } }]
        },
        {
          label: 'API 参考',
          items: [{ autogenerate: { directory: 'api-reference' } }]
        },
      ],
      social: [
        { label: 'GitHub', icon: 'github', href: 'https://github.com/fyzj/fangyuan-zhiban' },
      ],
      customCss: ['./src/styles/global.css'],
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://fyzj.online',
  headers: [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=(), payment=()',
        },
      ],
    },
  ],
});

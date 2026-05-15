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
          label: '课程大纲',
          items: [{ autogenerate: { directory: 'base' } }]
        },
        {
          label: '女上衣',
          items: [{ autogenerate: { directory: 'top-girl' } }]
        },
      ],
      social: [
        { label: 'GitHub', icon: 'github', href: 'https://github.com/fyzj/fangyuan-zhiban' },
      ],
      customCss: ['./src/styles/global.css'],
      components: {
        // 告诉 Starlight：以后画右上角图标时，用我写的这个自定义文件
        SocialIcons: './src/components/CustomSocialIcons.astro',
      },
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

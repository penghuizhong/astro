import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static', // 👈 明确告诉系统：我只要纯静态网页
  site: 'https://docs.fyzj.online',
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
        SocialIcons: './src/components/CustomSocialIcons.astro',
      },
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
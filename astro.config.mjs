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
          items: [
            { label: '什么是方圆智版 AI', link: '/getting-started/what-is-fangyuan' },
            { label: '快速开始', link: '/getting-started/quick-start' },
            { label: 'AI 辅助制版流程', link: '/getting-started/ai-patternning-workflow' },
          ],
        },
        {
          label: '版型库',
          items: [
            { label: '上衣基础版型', link: '/pattern-library/top-basic' },
            { label: '裤子基础版型', link: '/pattern-library/pants-basic' },
            { label: '裙子基础版型', link: '/pattern-library/skirt-basic' },
          ],
        },
        {
          label: 'API 参考',
          items: [
            { label: 'API 概览', link: '/api-reference/overview' },
          ],
        },
      ],
      social: [
        { label: 'GitHub', icon: 'github', href: 'https://github.com/your-org/fangyuan-zhiban' },
      ],
      customCss: ['./src/styles/global.css'],
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

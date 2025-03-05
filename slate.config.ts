/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://haso.vercel.app',
  avatar: '/avatar.png',
  title: 'Hansol Blog',
  description: 'Pure thoughts, simple stories.',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: '© 2025 Slate Design',
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/yoohaso'
    },
]
});
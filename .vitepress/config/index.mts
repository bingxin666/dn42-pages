import { defineConfig } from 'vitepress'
import { en } from './en.mts'
import { zh } from './zh.mts'

export default defineConfig({
  locales: {
    root: { label: '简体中文', ...zh },
    en: { label: 'English', ...en },
  },
  cleanUrls: true
})
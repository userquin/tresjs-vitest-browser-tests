/// <reference types="vitest" />
import process from 'node:process'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import glsl from 'vite-plugin-glsl'
import { templateCompilerOptions } from '@tresjs/core'

function noop() {}

const provider = process.env.PROVIDER || 'playwright'
const browser = process.env.BROWSER || (provider === 'playwright' ? 'chromium' : 'chrome')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      ...templateCompilerOptions,
    }),
    glsl(),
  ],
  test: {
    // environment: 'jsdom',
    // globals: true,
    // threads: false,
    // environment: process.env.BROWSER_TEST ? 'node' : 'jsdom',
    globals: true,
    // threads: false,
    // isolate: !process.env.BROWSER_TEST,
    browser: {
      enabled: true,
      name: browser,
      headless: false,
      provider,
      isolate: false,
    },
    open: false,
    outputFile: './browser.json',
    reporters: ['json', {
      onInit: noop,
      onPathsCollected: noop,
      onCollected: noop,
      onFinished: noop,
      onTaskUpdate: noop,
      onTestRemoved: noop,
      onWatcherStart: noop,
      onWatcherRerun: noop,
      onServerRestart: noop,
      onUserConsoleLog: noop,
    }, 'default'],
    env: {
      BROWSER: browser,
    },
  },
})

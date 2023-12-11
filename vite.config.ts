import { crx } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import manifest from './src/manifest';
import { globSync } from 'glob'; //ワイルドカードを使って各ファイルの名前を取得し一括で登録するため
import { fileURLToPath } from 'node:url'; //上記の実行時にURLをpathに変更させるため

const inputPagesHtmlArray = globSync(['src/pages/**/*.html'], { ignore: ['node_modules/**'] }).map(
  (file) => {
    // windowsのパス指定の\\を無理やり解決する。
    return [
      file.replace('.html', '').replace(/\\/g, '/'),
      fileURLToPath(new URL(file, import.meta.url)),
    ];
  }
);
const inputObj = Object.fromEntries(inputPagesHtmlArray);
console.log(inputObj);

export default defineConfig({
  // @see https://github.com/crxjs/chrome-extension-tools/issues/696
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
  // prevent src/ prefix on extension urls
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: inputObj,
      output: {
        chunkFileNames: 'assets/chunk-[hash].js',
      },
    },
  },
  plugins: [react(), crx({ manifest })],
});

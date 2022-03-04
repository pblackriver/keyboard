import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactRefresh(),
    tsconfigPaths(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});

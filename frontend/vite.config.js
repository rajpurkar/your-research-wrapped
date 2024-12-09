import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
// https://vitejs.dev/config/
export default defineConfig({
    base: '/your-research-wrapped/', // Replace with your repository name
    plugins: [react()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    }
});
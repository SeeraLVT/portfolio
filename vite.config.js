import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project sites live under /<repository>/; user sites live at /.
const [owner, repository] = (process.env.GITHUB_REPOSITORY || '').split('/');
const isUserSite = repository === `${owner}.github.io`;
const base = process.env.GITHUB_ACTIONS && repository && !isUserSite
  ? `/${repository}/`
  : '/';

export default defineConfig({ plugins: [react()], base });

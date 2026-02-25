import { defineConfig } from 'vite';

export default defineConfig({
  // ── Build ─────────────────────────────────────────────────
  build: {
    outDir: 'dist',          // Standard output directory
    emptyOutDir: true,       // Clean on every build
    assetsDir: 'assets',     // All hashed assets go here
    sourcemap: false,        // Disable sourcemaps in production
  },

  // ── Dev Server ────────────────────────────────────────────
  server: {
    host: '0.0.0.0',         // Bind to all interfaces (not just localhost)
    port: Number(process.env.PORT) || 5173,
    strictPort: false,       // Fall back to next port if taken
  },

  // ── Preview (vite preview = prod-mode local test) ─────────
  preview: {
    host: '0.0.0.0',         // Same — must bind to 0.0.0.0 for cloud
    port: Number(process.env.PORT) || 4173,
    strictPort: false,
    allowedHosts: 'all',     // Accept any Host header (reverse proxy safe)
  },
});

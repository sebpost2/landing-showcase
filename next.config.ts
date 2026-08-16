import type { NextConfig } from "next";

// Static portfolio piece: no backend, no user data, no forms, no
// dangerouslySetInnerHTML anywhere in the codebase — effectively no XSS
// attack surface. 'unsafe-inline' is used instead of nonce-based CSP because
// nonces require dynamic rendering on every route (per Next's own CSP docs),
// which would disable static generation/CDN caching for a project whose
// whole point is being a fast static showcase. Upgrade path if that ever
// changes: switch to the proxy.ts nonce pattern from Next's CSP guide.
// React's dev-mode debugging (stack reconstruction) needs eval(); production
// never uses it. Gating on NODE_ENV matches Next's own documented CSP pattern.
const isDev = process.env.NODE_ENV === "development";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self'",
      "connect-src 'self'",
    ].join("; "),
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

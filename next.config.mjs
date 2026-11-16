/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // Origin trial de WebMCP para https://www.iaction.cl (vence 2027-03-30; renovar en Chrome Origin Trials).
  {
    key: "Origin-Trial",
    value:
      "A/OaFwt0Gaom4IBw9IkOCNQdWxh0Qx+D/ccVh2GvGEhZuEO3raR//nBlLjS317kClmwE83iJPem87CeBiMfyAQAAAAB1eyJvcmlnaW4iOiJodHRwczovL3d3dy5pYWN0aW9uLmNsOjQ0MyIsImZlYXR1cmUiOiJXZWJNQ1AiLCJleHBpcnkiOjE4MDYzNjQ4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
  },
];

const nextConfig = {
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;

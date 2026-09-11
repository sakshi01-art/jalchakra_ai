import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@electric-sql/pglite", "pg"],
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

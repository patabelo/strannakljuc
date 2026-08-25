import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every route in this project is static (no server actions, cookies,
  // or dynamic data), so we export plain HTML/CSS/JS that can be hosted
  // on any static host once the strannakljuc.si domain is pointed at it.
  output: "export",
};

export default nextConfig;

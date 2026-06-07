import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/Untitled-3.mp4",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/",
        headers: [
          {
            key: "Link",
            value: "</Untitled-3.mp4>; rel=preload; as=video; type=video/mp4",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

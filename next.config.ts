import { withBotId } from "botid/next/config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Silences the multi-lockfile workspace-root warning on Vercel.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default withBotId(nextConfig);

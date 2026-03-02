import "@/styles/globals.css";

import type { AppProps } from "next/app";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <Component {...pageProps} />
    </ReactLenis>
  );
}

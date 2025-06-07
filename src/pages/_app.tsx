import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

const locales = ["en", "fr", "it", "es", "ja", "ko"];

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const locale = window.location.pathname.split("/")[1];
    if (locale && locales.includes(locale) && !document.cookie.includes(`googtrans=/en/${locale}`)) {
      document.cookie = `googtrans=/en/${locale}`;
      location.reload();
    }
  }, [])
  return <Component {...pageProps} />;
}

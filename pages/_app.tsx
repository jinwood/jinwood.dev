import { NextComponentType } from "next";
import "../styles/global.css";

export default function App({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  pageProps: any;
}) {
  return <Component {...pageProps} />;
}

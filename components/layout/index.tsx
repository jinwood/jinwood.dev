import Footer from "./footer.tsx";
import Header from "./header.tsx";

export function Layout(props: {
  children: preact.JSX.Element;
  pathname: string;
  title: string;
}) {
  const { title } = props;
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Julian Inwood's personal website" />
        <title>Julian Inwood{title ? ` - ${title}` : ""}</title>
      </head>
      <Header {...props} />
      <body class="pb-20">{props.children}</body>
      <Footer />
    </html>
  );
}

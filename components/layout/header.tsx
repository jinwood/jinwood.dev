export default function Header(props: { pathname: string }) {
  const links = ["about", "projects", "blog"];
  const activeStyles = (route: string) => {
    const pathname = props.pathname.split("/")[1];
    if (!pathname) return "";
    return pathname === route ? "bg-gray-100" : "";
  };

  return (
    <header class="max-w-screen-md px-4 pt-4 mx-auto">
      <a href="/" class="text-3xl font-bold">
        Julian Inwood
      </a>
      <nav>
        {links.map((link) => {
          return (
            <a
              href={`
								/${link}
							`}
              class={`
								px-2 py-1 text-2xl text-gray-800 hover:bg-blue-200
								${activeStyles(link)}
							`}
            >
              {link}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

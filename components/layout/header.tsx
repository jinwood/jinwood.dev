export default function Header(props: { pathname: string }) {
  const { pathname } = props;
  const links = ["about", "projects"];
  const activeStyles = (route: string) => {
    console.log(pathname, route);
    if (!pathname) return "";
    return pathname.substring(1).trim() === route ? "bg-gray-100" : "";
  };

  return (
    <header class="max-w-screen-md px-4 pt-16 mx-auto">
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

export function HeaderLogo() {
  return (
    <a className="text-foreground hover:text-secondary-foreground cursor-pointer font-semibold">
      Sujeet Jaiswal
    </a>
  );
}

function Header() {
  return (
    <header className="z-50 w-full h-[60px] border-b fixed top-0 left-0 right-0 border-border bg-header-bg">
      <div className="h-full max-w-7xl flex items-center gap-4 m-auto my-0 py-0 px-4">
        <HeaderLogo />
      </div>
    </header>
  );
}

export default Header;

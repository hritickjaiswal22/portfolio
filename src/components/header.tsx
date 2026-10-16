import ThemeSwitcher from "@/components/theme-switcher";

export function HeaderLogo() {
  return (
    <a className="text-foreground hover:text-secondary-foreground cursor-pointer font-semibold text-xl">
      Hritick Jaiswal
    </a>
  );
}

function Header() {
  return (
    <header className="z-50 w-full h-[60px] border-b fixed top-0 left-0 right-0 border-border bg-header-bg text-xl">
      <div className="h-full max-w-7xl flex justify-between items-center gap-4 m-auto my-0 py-0 px-4">
        <HeaderLogo />

        <ThemeSwitcher />
      </div>
    </header>
  );
}

export default Header;

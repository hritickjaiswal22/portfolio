import ThemeSwitcher from "@/components/theme-switcher";

export default function Home() {
  return (
    <main className="max-w-[100ch] w-full mx-auto">
      <section className="flex gap-3 px-4 py-8 flex-col justify-center items-center">
        <h1 className="text-3xl font-bold leading-5 text-foreground">
          Hritick Jaiswal
        </h1>

        <p className="text-xl leading-6 text-secondary-foreground">
          Full Stack Software Engineer
        </p>
      </section>
    </main>
  );
}

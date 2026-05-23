function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200/50 bg-white/55 py-7 dark:border-white/10 dark:bg-[#121212]/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8 dark:text-slate-400">
        <p>© {new Date().getFullYear()} InkUAi. All rights reserved.</p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-slate-900 dark:hover:text-white"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}

export default Footer


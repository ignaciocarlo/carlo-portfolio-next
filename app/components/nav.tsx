import CustomThemeToggle from "./mode-toggle"

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
    <div className="flex justify-between items-center lg:sticky lg:top-20 w-full">
      <nav
        className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
      >
        <div className="flex flex-row space-x-0 pr-10">
          <a href="/">{`cccsssiii_dev </>`}</a>
        </div>
      </nav>
      <div>
        <CustomThemeToggle />
      </div>
    </div>
  </aside>
  )
}
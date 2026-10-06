import { Link } from "react-router-dom";
import logo from "@/assets/brand/logo.png";

const GITHUB_URL = "https://github.com/zhaleff/BlackNode";
const REDDIT_URL = "https://reddit.com/r/tu-subreddit";

const link =
  "font-content text-sm text-on-surface hover:text-on-surface transition-colors";

const iconBtn =
  "grid size-10 place-items-center rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors";

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const RedditIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-surface text-on-surface">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">
        <div className="border-t border-outline" />

        <div className="grid grid-cols-1 items-center gap-6 py-8 md:grid-cols-[1fr_auto_1fr]">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="BlackNode" className="size-6 object-contain" />
              <span className="font-headings text-base font-bold">BlackNode</span>
            </Link>
            <span className="font-content text-sm text-muted">
              Built by Zhaleff · © {new Date().getFullYear()}
            </span>
          </div>

          <nav className="flex flex-wrap items-center gap-6">
            <Link to="/get-started/installation" className={link}>Get Started</Link>
            <Link to="/guide/configuration" className={link}>Guide</Link>
            <Link to="/components/hyprland" className={link}>Components</Link>
            <Link to="/about/licence" className={link}>Licence</Link>
          </nav>

          <div className="flex items-center gap-2 md:justify-self-end">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconBtn}>
              <GithubIcon />
            </a>
            <a href={REDDIT_URL} target="_blank" rel="noopener noreferrer" aria-label="Reddit" className={iconBtn}>
              <RedditIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "./nav.config.js";

const GITHUB_URL = "https://github.com/zhaleff/BlackNode";

const itemClass =
  "flex items-center gap-2 px-4 py-2 font-content text-sm text-on-surface-variant hover:text-on-surface transition-colors";

export default function DesktopNav() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setActive(null);
    };
    const onKey = (e) => e.key === "Escape" && setActive(null);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      <nav ref={ref} className="hidden items-center lg:flex">
        {NAV_ITEMS.map((item) => {
          if (item.simple) {
            return (
              <Link key={item.key} to={item.path} className={itemClass}>
                {item.label}
              </Link>
            );
          }

          const open = active === item.key;

          return (
            <div
              key={item.key}
              className="relative"
              onMouseEnter={() => setActive(item.key)}
              onMouseLeave={() => setActive(null)}
            >
              <button
                type="button"
                onClick={() => setActive(open ? null : item.key)}
                aria-expanded={open}
                className={`${itemClass} ${open ? "text-on-surface" : ""}`}
              >
                {item.label}
                <ChevronDown size={14} />
              </button>

              {open && (
                <div className="absolute left-0 top-full z-50 pt-1">
                  <div className="min-w-48 border border-outline bg-surface-container p-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setActive(null)}
                        className="block px-3 py-2 font-content text-sm text-on-surface hover:bg-surface-container-high hover:text-on-surface"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className='px-6 py-3 text-on-primary bg-primary hover:bg-primary-light rounded-full text-sm font-medium transition-colors justify-self-end lg:flex'
      >
        GitHub
      </a>
    </>
  );
}
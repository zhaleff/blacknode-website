import { useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "./nav.config";

export default function MobileDrawer({ isOpen, onClose }) {
  const [openSection, setOpenSection] = useState(null);
  const [wasOpen, setWasOpen] = useState(isOpen);

  const toggle = (key) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  if (isOpen !== wasOpen) {
    setWasOpen(isOpen);

    if (!isOpen) {
      setOpenSection(null);
    }
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-40 lg:hidden bg-foreground/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`fixed inset-y-0 right-0 z-50 lg:hidden w-[84%] max-w-xs bg-bg border-l border-border shadow-2xl shadow-black/10 transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between px-5 h-16 shrink-0 border-b border-border">
          <span className="font-display text-base font-semibold text-foreground">
            Menu
          </span>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full text-secondary hover:text-foreground hover:bg-surface transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="overflow-y-auto px-5 pb-8 h-[calc(100%-4rem)]">
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => {
              if (item.simple) {
                return (
                  <li key={item.key} className="border-b border-border">
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className="block py-3.5 font-display text-base font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              const isOpenSection = openSection === item.key;

              return (
                <li key={item.key} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => toggle(item.key)}
                    className={`w-full flex items-center justify-between py-3.5 font-display text-base font-medium text-left transition-colors ${
                      isOpenSection
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                    aria-expanded={isOpenSection}
                  >
                    {item.label}

                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        isOpenSection
                          ? "rotate-180 text-primary"
                          : "text-secondary"
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpenSection
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="pb-3 pl-2">
                        {item.children.map((child) => (
                          <li key={child.path}>
                            <Link
                              to={child.path}
                              onClick={onClose}
                              className="block rounded-lg px-3 py-2 font-display text-sm text-secondary hover:text-primary hover:bg-surface transition-colors"
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}


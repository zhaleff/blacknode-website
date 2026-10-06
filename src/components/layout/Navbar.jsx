import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logo from "@/assets/logo.png";
import DesktopNav from "@/components/nav/DesktopNav";
import MobileDrawer from "@/components/nav/MobileDrawer";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);

  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container border-b border-outline">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-10 h-16 lg:h-18 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="hidden sm:block font-heading text-lg font-semibold text-on-surface group-hover:text-primary transition-colors">
              BlackNode
            </span>
          </Link>

          <DesktopNav />
        </div>
      </header>

      <div className="h-16 lg:h-17" />

      <MobileDrawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

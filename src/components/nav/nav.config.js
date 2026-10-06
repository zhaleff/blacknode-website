export const NAV_ITEMS = [
  {
    key: "home",
    label: "Home",
    path: "/",
    simple: true,
  },
  {
    key: "getStarted",
    label: "Get Started",
    children: [
      { title: "Installation", path: "/get-started/installation" },
      { title: "Quick Start", path: "/get-started/quick-start" },
      { title: "Requirements", path: "/get-started/requirements" },
      { title: "Updating", path: "/get-started/updating" },
    ],
  },
  {
    key: "about",
    label: "About",
    children: [
      { title: "Credits", path: "/about/credits" },
      { title: "Licence", path: "/about/licence" },
      { title: "Philosophy", path: "/about/philosophy" },
    ],
  },
  {
    key: "guide",
    label: "Guide",
    children: [
      { title: "Configuration", path: "/guide/configuration" },
      { title: "Customization", path: "/guide/customization" },
      { title: "Keybinds", path: "/guide/keybinds" },
      { title: "Theming", path: "/guide/theming" },
      { title: "Workflows", path: "/guide/workflows" },
    ],
  },
  {
    key: "components",
    label: "Components",
    children: [
      { title: "Hyprland", path: "/components/hyprland" },
      { title: "Neovim", path: "/components/nvim" },
      { title: "Rofi", path: "/components/rofi" },
      { title: "System", path: "/components/system" },
      { title: "Wallpapers", path: "/components/wallpapers" },
      { title: "Waybar", path: "/components/waybar" },
      { title: "Wlogout", path: "/components/wlogout" },
    ],
  },
   {
    key: "roadmap",
    label: "Roadmap",
    path: "/roadmap",
    simple: true,
  },

];


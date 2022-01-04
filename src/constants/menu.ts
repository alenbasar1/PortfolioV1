export type MenuItem = {
  key: string;
} & (
  | {
      link: string;
      to?: never;
    }
  | {
      link?: never;
      to: string;
    }
) &
  (
    | {
        label: string;
        icon?: never;
      }
    | {
        label?: never;
        icon: string;
      }
  );

export const hamburgerIcon: MenuItem[] = [];
export const mobileMenu: MenuItem[] = [
  { key: "m-home", to: "home", label: "HOME" },
  { key: "m-about", to: "about", label: "ABOUT ME" },
  { key: "m-projects", to: "showcase", label: "MY_PROJECTS" },
  { key: "m-contact", to: "contact", label: "CONTACT" },
  { key: "m-resume", link: "", label: "RESUME" },
];

export const navLogo: MenuItem[] = [];
export const desktopMenu: MenuItem[] = [
  { key: "home", to: "home", label: "Home" },
  { key: "about", to: "about", label: "About" },
  { key: "projects", to: "showcase", label: "Projects" },
  { key: "contact", to: "contact", label: "Contact" },
  {
    key: "resume",
    link: "",
    label: "Resume",
  },
];

export const footerMenu: MenuItem[] = [
  { key: "f-github", link: "https://github.com/alenbasar", label: "GitHub" },
  {
    key: "f-linkedin",
    link: "https://www.linkedin.com/in/alen-basar-54b9b220b/",
    label: "LinkedIn",
  },
  {
    key: "f-resume",
    link: "",
    label: "My Resume",
  },
];

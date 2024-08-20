import clsx from "clsx";
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from "@headlessui/react";
import Logo from "~/components/logo";
import NavLink from "~/components/nav-link";

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <PopoverButton as="a" href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  );
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0",
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0",
        )}
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <MobileNavLink href="/#about">About</MobileNavLink>
        <MobileNavLink href="/#contact">Contact</MobileNavLink>
        <MobileNavLink href="/privacy-policy">Privacy Policy</MobileNavLink>
      </PopoverPanel>
    </Popover>
  );
}

const NavBar = () => (
  <nav className="relative z-50 flex justify-between">
    <div className="flex items-center md:gap-x-12">
      <a href="/" aria-label="Home" className="flex items-center gap-x-2">
        <Logo aria-hidden="true" className="h-10 w-auto" />
        <div className="text-slate-700">
          DM <span className="text-blue-600">Consulting</span>
        </div>
      </a>
      <div className="hidden md:flex md:gap-x-6">
        <NavLink href="/#about">About</NavLink>
        <NavLink href="/#contact">Contact</NavLink>
        <NavLink href="/privacy-policy">Privacy Policy</NavLink>
      </div>
    </div>
    <div className="flex items-center gap-x-5 md:gap-x-8">
      <div className="-mr-1 md:hidden">
        <MobileNavigation />
      </div>
    </div>
  </nav>
);

export default NavBar;

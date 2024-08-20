import type { ComponentPropsWithoutRef, FunctionComponent } from "react";

type Props = ComponentPropsWithoutRef<"a">;

const NavLink: FunctionComponent<Props> = ({ href, children }) => (
  <a
    href={href}
    className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
  >
    {children}
  </a>
);

export default NavLink;

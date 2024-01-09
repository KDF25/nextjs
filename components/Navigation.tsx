"use client";
import Link from "@/node_modules/next/link";
import {usePathname} from "@/node_modules/next/navigation";

type NavLink = {
    label: string;
    href: string;
};

type Props = {
    navLinks: NavLink[];
}

const Navigation = ({navLinks}: Props) => {
    const pathName = usePathname();
    return (
        <>
        {navLinks.map((link) => {
            const isActive = pathName === link.href;

            return (
                <Link 
                    key={link.label}
                    href={link.href}
                    className={isActive ? 'active' : ""}
                >
                    {link.label}
                </Link>

            )
        })}
        </>
    )
}

export {Navigation};
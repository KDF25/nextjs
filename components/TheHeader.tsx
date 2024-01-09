import { Navigation } from "./Navigation";

const navItems = [
    {label: "Home", href: "/"}, 
    {label: "Blog", href: "/blog"}, 
    {label: "About", href: "/about"}, 
    {label: "Users", href: "/users"}, 
];

const TheHeader = () => {
    return (
        <header>
            <Navigation navLinks={navItems}/>
        </header>
    )
}

export {TheHeader};
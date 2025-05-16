 interface NavLinksProps {
    classList: string
 }
 
 const NavLinks: React.FC<NavLinksProps> = ({classList}) => {
    return (
        <>
            <a href="#" className={classList}>About</a>
            <a href="#" className={classList}>Solutions</a>
            <a href="#" className={classList}>Our Team</a>
            <a href="#" className={classList}>Contact</a>
        </>
    );
}

export default NavLinks;
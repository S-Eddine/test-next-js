import Link from 'next/link';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Next JS</a>
        <div className="collapse navbar-collapse" id="navbarText">
            <Link href='/'>
                <a className="nav-item nav-link">Home</a>
            </Link>
            <Link href="/about">
                <a className="nav-item nav-link">About</a>
            </Link>
        </div>
        </nav>
    )
 };

export default Header;
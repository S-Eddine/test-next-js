import Link from 'next/link';
import {Navbar, Nav, NavItem} from 'reactstrap';

const linkStyle = {
    marginRight: 15
};

const Header = () => {
   return ( <div>
        <Link href='/'>
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </div>)
};

/*const Header = () => {
    return (
        <Navbar color="light" light expand="md">
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <Link href='/'>
                        <a style={linkStyle}>Home</a>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="/about">
                        <a style={linkStyle}>About</a>
                    </Link>
                </NavItem>
            </Nav>
        </Navbar>
    )
 };*/

export default Header;
import Header from './Header';
import head from 'next/head';

const Heading = () => (
    <head>
        <title>Next JS With Bootstrap</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
    </head>
);

const Layout = props => (
    <div>
        <Heading />
        <Header />
        {props.children}
    </div>
);

export default Layout;
import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import head from 'next/head';

const Index = props => (
    <>
        <head>
            <title>Next JS With Bootstrap</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
        </head>
        <Layout>
            <h1>Batman TV Shows</h1>
            <ul>
                {props.shows.map(show => {
                    return (
                    <li key={show.id}>
                        <Link href="/p/[id]" as={`/p/${show.id}`}>
                            <a>{show.name}</a>
                        </Link>
                    </li>
                )})}
            </ul>
        </Layout>
    </>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);
    return {
        shows: data.map(entry => entry.show)
    };
};

export default Index;
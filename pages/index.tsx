import Head from "next/head";
import Header from "../components/Header/header";
import Nav from "../components/Nav/nav";
import Results from "../components/Results/results";
import requests from "../utils/request";
import axios from "axios";

export default function Home({ results }) {

  return (
    <div>
      <Head>
        <title>Hulu</title>
      </Head>

      {/* Header */}
      <Header />
      {/* Nav Bar */}
      <Nav />
      {/* Results */}
      <Results requests={results}/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { genre } = context.query;
  const request = await axios.get(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res => res.data))

  return {
    props: {
      results: request.results
    }
  }
}

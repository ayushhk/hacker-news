import React from "react";
import Head from "next/head";
import RowDataWrapper from "../components/RowDataWrapper/RowDataWrapper";

class HomePage extends React.Component {
  static async getInitialProps({ query }) {
    const currentPage = (query && query.page) || 0;
    const res = await fetch(
      `https://hn.algolia.com/api/v1/search/?page=${currentPage}`
    );
    const data = await res.json();

    return { data: data };
  }

  render() {
    const { data, query } = this.props;
    return (
      <>
        <Head>
          <title> Hacker News</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <RowDataWrapper data={data} activeTop path="/" />
      </>
    );
  }
}

export default HomePage;

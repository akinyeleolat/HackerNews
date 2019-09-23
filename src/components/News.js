import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useQuery } from "react-apollo";
import NewsQuery from "./../query/index";
import getNewsItem from "./../core/getNewsItem";
import NewsList from "./NewsList";

const NewsPage = () => {
  const limit = 30;
  const offset = 1;
  const { loading, data, error } = useQuery(NewsQuery, {
    variables: {
      limit: limit,
      offset: offset
    },
    suspend: false
  });

  if (loading) return <h5 className="container">Loading...</h5>;
  if (error) console.log(error);
  if (data) {
    const newsList = getNewsItem(data);
    return (
      <main role="main" className="container">
        <NavBar />
        <div className="bg-orange rounded shadow-sm pt-2 pb-4">
          <NewsList details={newsList} />
          <Footer />
        </div>
      </main>
    );
  }
};

export default NewsPage;

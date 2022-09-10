import React from "react";
import { useQuery } from "@apollo/client";

import ARTICLES from "../../graphql/queries/articles";


export const Articles = () => {
  const { loading, error, data } = useQuery(ARTICLES);

  if (loading) return <Loader />
  if(error) return <Error msg={error}/>

  return (
    <List item={data.articles}/>
  );
}

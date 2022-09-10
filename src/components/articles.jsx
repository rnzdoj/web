import React from "react";
import { useQuery } from "@apollo/client";
import ARTICLES from "../graphql/queries/articles";

const Articles  = () => {
  const { loading, error, data } = useQuery(ARTICLES);

  if (loading) return <div class="spinner-grow text-success" role="status"></div>;
  if (error) return <p>Error : {error}(</p>;


  return (
    <div className="mt-5">
      <ul class="list-group">
        {
          data.articles.map(({ id, body }) => (
            <div key={id}>
              <li class="list-group-item">{body}</li>
            </div>
          ))
        }
      </ul>
    </div>
  )
}

export default Articles

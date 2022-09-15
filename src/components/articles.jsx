import React from "react";
import { useQuery } from "@apollo/client";
import ARTICLES from "../graphql/queries/articles";
import { Loader } from "./loader";
import { useEffect } from "react";
import { useState } from "react";

const Articles  = () => {
  const { loading, error, data } = useQuery(ARTICLES, {
    variables: {
      first: 10
    }
  });

  useEffect(() => {
    if(data) {
      setArticles(data.nodes)
    }
  }, [data, loading, error])

  const [articles, setArticles] = useState([]) 

  if (loading) return <Loader />
  if (error) return <p>Error : {console.log(error)}</p>;

  return (
    <div className="mt-5">
      <ul className="list-group">
        {
          articles.map(({ id, body }) => (
            <div key={id}>
              <li className="list-group-item">{body}</li>
            </div>
          ))
        }
      </ul>
    </div>
  )
}

export default Articles

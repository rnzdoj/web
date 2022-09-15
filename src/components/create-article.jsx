import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import CREATE_ARTICLE from "../graphql/mutations/createArticle";
import { Loader } from "./loader";

const CreateArticle = () => {
  const [createArticle, { loading, error }] = useMutation(CREATE_ARTICLE);

  const [body, setBody] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    createArticle({ variables : variables });
    setBody("");
  }

  const variables = {
    input: {
      attributes: {
        body: body
      }
    }
  }

  if (loading) return <Loader/>
  if (error) return `Submission error! ${error.message}`;

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="form-group">
        <label>Content</label>
        <input className="form-control" name="body" type="text" onChange={ (e) => setBody(e.target.value) } value={body} />
      </div>

      <button type="submit" className="btn btn-sm btn-primary mt-1">create</button>
    </form>
  )
}

export default CreateArticle;
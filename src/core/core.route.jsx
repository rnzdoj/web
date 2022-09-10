import React from "react";
import { Routes, Route } from "react-router-dom";
import { memo } from "react";

import Articles from "../components/articles";
import CreateArticle from "../components/create-article";

const CoreRoute = () => {
  return(
    <Routes>
      <Route path='/' element={<Articles />} />
      <Route path='/article/create' element={<CreateArticle />} />
    </Routes>
  )
}

export default memo(CoreRoute)

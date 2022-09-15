import React from "react";
import { Routes, Route } from "react-router-dom";
import { memo } from "react";

import Articles from "../components/articles";
import CreateArticle from "../components/create-article";
import { LogIn, Registration } from "../pages/auth";

const CoreRoute = () => {
  return(
    <Routes>
      <Route path='/' element={<Articles />} />
      <Route path='/article/create' element={<CreateArticle />} />
      <Route path='/sign_in' element={<Registration />} />
      <Route path="/log_in" element={<LogIn />} />
    </Routes>
  )
}

export default memo(CoreRoute)

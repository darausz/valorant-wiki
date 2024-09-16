import React from "react";
import home from "../assets/home-page.jpg"

export default function Main () {
  return(
    <div id="homePage">
      <img src={home} id="homePageImg" alt="error" />
      <h1 id="homePageHeader">Welcome to the Valorant Wiki</h1>
    </div>
  )
}
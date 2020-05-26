import React from "react";
import Head from "../components/head";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/404.scss"

const NotFound = () => {
  return (
    <div className="four-O-four">
      <Head title="404 NO-PAGE" />
      <Header />
      <div >
        <h1>THIS PAGE IS OF NON EXISTENCE</h1>
        <p>If you believe this page should exist, that is awesome but I am telling you it does not.</p>
      </div>
      <Footer />
    </div>
  )
}
export default NotFound
import * as React from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <Header />
    <Navbar />
    <div className="Grid--landing">
      <div></div>
    </div>
  </Layout>
)

export default IndexPage
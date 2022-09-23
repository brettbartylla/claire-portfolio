import * as React from "react"
import { graphql, Link } from "gatsby"
import Navbar from "../components/Navbar"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="Indeed" />
    <Navbar />
    <div className="Projects">
      <h4 className="u-underline">INDEED</h4>
      <ul>
        <li>
          Campaign Marketing Video
        </li>
        <li>
          Graphic design, animation, video editing, copywriting
        </li>
        <li>
          New hiring feature marketing video for Indeed
        </li>
      </ul>

    </div>
  </Layout>
)

export default NotFoundPage

import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import { Parallax } from "@react-spring/parallax"
import * as React from "react"
import { Themed } from "theme-ui"

const NotFound = () => (
  <Layout>
    <Seo title="About" />
    <Parallax pages={1}>
      <div>
        <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={0} factor={1}>
          <Inner>
            <img src='./resume.jpeg'/>
          </Inner>
        </Content>
      </div>
    </Parallax>
  </Layout>
)

export default NotFound

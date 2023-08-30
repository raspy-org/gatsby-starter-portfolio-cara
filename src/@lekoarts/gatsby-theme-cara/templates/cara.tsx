import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import Layout from "../components/layout"
import Header from "../components/hero"
import Highlights from "../components/highlights"
import About from "../components/about"
import Contact from "../components/contact"
import { Box, Grid } from "theme-ui";

const Cara = () => (
  <Layout>
      <Parallax pages={3}>
        <Header offset={0} factor={1} />
        <Highlights offset={1} factor={1} />
        <Contact offset={2} factor={1} />
      </Parallax>
  </Layout>
)

export default Cara
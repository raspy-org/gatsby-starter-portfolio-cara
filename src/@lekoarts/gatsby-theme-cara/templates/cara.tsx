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
    {/* <Grid sx={{
      gridTemplateAreas: '"header" "."'
    }}> */}
      <Parallax pages={4}>
        <Header offset={0} factor={1} />
        <Highlights offset={1} factor={1} />
        <About offset={2} factor={1} />
        <Contact offset={3} factor={1} />
      </Parallax>
    {/* </Grid> */}
  </Layout>
)

export default Cara
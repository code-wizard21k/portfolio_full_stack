import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import Home from "../components/Home";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <React.Fragment>
      <Seo title="Portfolio" />
      <Box>
        <Header />

        <Hero />
        {/* <Home /> */}
        <Footer />
      </Box>
    </React.Fragment>
  );
}

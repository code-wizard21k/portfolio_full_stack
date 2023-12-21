import React from "react";
import dynamic from "next/dynamic";
import VoxelDogLoader from "../DevDog/blender-dog";
import BaseLayout from "../Wrapper/BaseLayout";
import { ReactSVG } from "react-svg";
import Image from "next/image";
import {
  Button,
  VStack,
  Flex,
  Stack,
  Heading,
  Text,
  Link,
  ButtonGroup,
} from "@chakra-ui/react";

const LazyVoxelDog = dynamic(() => import("../DevDog"), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});

const Hero = () => {
  return (
    <React.Fragment>
      <section className="gMXkzA">
        <div className="kTUali"></div>
        <div id="home" className="irvPSY">
          <img src="/flower.svg" height={"564"} width={"440"} />
        </div>
        <div className="Jdby">
          <ReactSVG src="/mountain.svg" />
        </div>
        <div className="bEoNtC">
          <img src="/sun.svg" />
        </div>
        <div className="fDDan">
          <img src="/cloud1.svg" />
        </div>
        <div className="fqZNTZ">
          <img src="/cloud2.svg" />
        </div>

        <div className="OuVty">
          <div>
            <div pagetheme="light" lang="en" className="hRhcyR">
              <div>
                <h1>
                  Hi there, I'm <span lang="en">Andrew</span>
                  <span>.</span>
                </h1>
              </div>
              <div>
                <h2> Welcome to my portfolio!</h2>
              </div>
              <div>
                <p>
                  I'm a Full Stack AI developer who builds interesting and
                  beautiful websites that help people. My current focus is on
                  powerful AI/ML technology. I love Japan.
                </p>
              </div>
              <div>
                <a
                  pagetheme="light"
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  tabindex="0"
                >
                  resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;

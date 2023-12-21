import {
  Box,
  Grid,
  Heading,
  Icon,
  Stack,
  VStack,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import BaseLayout from "../Wrapper/BaseLayout";
import Skills from "./Skills";
import Timeline from "./Timeline";
import { productCardDetails } from "./__productCardDetails";
import About from "./about";
import Project from "../../pages/blogs";
import { IoIosRocket } from "react-icons/io";

const Home = () => {
  return (
    <React.Fragment>
      <About />
      <BaseLayout mt="10" id="stack">
        <Heading
          fontSize={{
            base: "5xl",
            md: "5xl",
            lg: "5xl",
            sm: "3xl",
            xs: "3xl",
          }}
          fontWeight="bold"
          textAlign="center"
        >
          The full product development stack.
        </Heading>
        <Text
          textAlign="center"
          fontSize={{ base: "md", md: "md", lg: "md", sm: "sm", xs: "sm" }}
          my="5"
          mx={{ lg: 60, md: 60, sm: 0, xs: 0 }}
        >
          From designing the interface to implementing your fully featured
          application - I can provide the full product design process from an
          idea to a finished hiqh quality app, polished with fantastic design
          and running on state of the art software.
        </Text>
        <Box align="center" my={{ base: 20, lg: 20, md: 20, sm: 14, xs: 14 }}>
          <Grid
            display={{
              base: "grid",
              md: "grid",
              lg: "grid",
              sm: "block",
              xs: "block",
            }}
            templateColumns="repeat(2,1fr)"
            maxW="3xl"
            gap="20"
          >
            {productCardDetails.map(
              (item, index) =>
                item?.stack && (
                  <Stack
                    key={index}
                    spacing="3"
                    align="center"
                    mt={{ md: 0, lg: 0, sm: 10, xs: 10 }}
                  >
                    <Box
                      w="60px"
                      h="60px"
                      borderRadius="full"
                      align="center"
                      bg={item?.bgColor}
                      mb="2"
                      boxShadow="2xl"
                      transition={"ease-in-out"}
                      transitionDuration="0.5s"
                      _hover={{ boxShadow: "outline" }}
                      cursor="pointer"
                    >
                      <Icon mt="5" w="5" h="5">
                        {item?.svgIcon}
                      </Icon>
                    </Box>
                    <Heading fontSize="xl">{item?.title}</Heading>
                    <Text fontSize="sm">{item?.description}</Text>
                  </Stack>
                )
            )}
          </Grid>
        </Box>
      </BaseLayout>

      <Skills />

      <Timeline />
      {/* <Project /> */}
    </React.Fragment>
  );
};

export default Home;

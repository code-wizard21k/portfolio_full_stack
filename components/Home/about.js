import {
  VStack,
  Text,
  HStack,
  Image,
  Grid,
  GridItem,
  IconButton,
  Box,
  Flex,
} from "@chakra-ui/react";
import { GrAnnounce } from "react-icons/gr";
import React from "react";
import BaseLayout from "../../components/Wrapper/BaseLayout";
import BaseText from "../../components/Wrapper/BaseText";
import SocialProfiles from "../../components/Hero/SocialProfiles";
import Seo from "../../components/Seo";

const About = () => {
  return (
    <React.Fragment>
      <Seo title="About" />
      <Box>
        <main>
          <BaseLayout>
            <BaseText
              firstTitle="About"
              secondTitle="Developer"
              textIcon="https://ik.imagekit.io/ayushsoni1010/Website/about?ik-sdk-version=javascript-1.4.3&updatedAt=1669666323627"
              leftSpacing="4"
              topSpacing="2"
            />
            <Grid
              display={{
                base: "grid",
                md: "grid",
                lg: "grid",
                sm: "block",
                xs: "block",
              }}
              templateColumns={{
                md: "repeat(5, 1fr)",
                lg: "repeat(5, 1fr)",
              }}
              gap={4}
              my="10"
            >
              <GridItem colSpan={2}>
                <Image
                  src="/profile.jpg"
                  alt="Hero"
                  w="320px"
                  borderRadius="10px"
                />
              </GridItem>
              <GridItem
                colStart={3}
                colEnd={12}
                mt={{ base: 0, md: 0, lg: 0, sm: 10, xs: 10 }}
              >
                <Text>
                  👨‍🎓This is{" "}
                  <span
                    style={{
                      color: "var(--chakra-colors-teal-500)",
                      fontWeight: 500,
                    }}
                  >
                    Ayush Soni
                  </span>{" "}
                  , a final-year computer science undergraduate, pursuing B.Tech
                  from Medi-Caps University, Indore. I am always fascinated by
                  programming and passionate about exploring the latest
                  technology and developing new cool and innovative products. I
                  am an enthusiastic and curious individual who works hard and
                  is highly ambitious in improving my knowledge of real-world
                  applications.
                </Text>
                <Text mt="5">
                  ⚡I am a{" "}
                  <span
                    style={{
                      color: "var(--chakra-colors-teal-500)",
                      fontWeight: 500,
                    }}
                  >
                    Full Stack Developer, an avid Open-Source Enthusiast, and
                    UX/UI Designer
                  </span>
                  {", "}I enjoy building SaaS products and microservices
                  applications while also creating feasible design systems. My
                  deep understanding of{" "}
                  <span
                    style={{
                      color: "var(--chakra-colors-teal-500)",
                      fontWeight: 500,
                    }}
                  >
                    frontend and backend
                  </span>{" "}
                  application structure and architecture allows me to build
                  robust and scalable products using core principles. By
                  leveraging design principles, I can deliver engaging and
                  intuitive designs that provide seamless user experiences.
                </Text>
                <Text mt="5">
                  🎯In terms of technical skills, I work with{" "}
                  <span
                    style={{
                      color: "var(--chakra-colors-teal-500)",
                      fontWeight: 500,
                    }}
                  >
                    Javascript and Typescript
                  </span>{" "}
                  on a daily basis, both professionally and on personal
                  projects. I have actively participated in various hackathons
                  and open-source contribution programs as both a participant
                  and mentor, and I have taken sessions in the community to help
                  with community building, team leadership, and different
                  methodologies in developing software.
                </Text>
                <HStack
                  mt={{ base: 8, lg: 8, md: 8, sm: 10, xs: 10 }}
                  display={{
                    base: "block",
                    lg: "block",
                    md: "block",
                    sm: "none",
                    xs: "none",
                  }}
                >
                  <SocialProfiles />
                </HStack>
              </GridItem>
            </Grid>
          </BaseLayout>
        </main>
      </Box>
    </React.Fragment>
  );
};

export default About;

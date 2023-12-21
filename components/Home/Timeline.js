/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Link from "next/link";

import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import {
  Box,
  Image,
  Text,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import Seo from "../../components/Seo";

import BaseLayout from "../../components/Wrapper/BaseLayout";
import BaseText from "../../components/Wrapper/BaseText";

const Blog = (blogsData) => {
  return (
    <React.Fragment>
      <Box>
        <Seo title="Blogs" />
        <Box></Box>
        <main>
          <BaseLayout>
            <BaseText
              firstTitle="Blogs"
              secondTitle="Content"
              textIcon="https://ik.imagekit.io/ayushsoni1010/Website/blogs?ik-sdk-version=javascript-1.4.3&updatedAt=1669666499904"
              topSpacing="2"
            />
            <Flex
              mt="24"
              justify="space-evenly"
              flexWrap="wrap"
              alignItems="start"
              rowGap="20"
              gap="10"
            ></Flex>
          </BaseLayout>
        </main>
      </Box>
    </React.Fragment>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("data", "blogs"));

  let slug = [];
  let markdown = [];
  let matterResult = [];
  let contentHtml = [];
  let frontmatter = [];

  files.map((filename) => {
    slug.push({ name: filename.replace(".mdx", "") });
    markdown.push(
      fs.readFileSync(path.join("data", "blogs", filename), "utf-8")
    );
  });

  markdown.map(async (item, index) => {
    matterResult.push(matter(item));
    frontmatter.push(matterResult[index].data);

    const processedContent = await remark()
      .use(html)
      .process(matterResult[index].content);
    contentHtml.push({ content: processedContent.toString() });
  });

  return {
    props: {
      slug,
      frontmatter,
      contentHtml,
    },
  };
}

export default Blog;

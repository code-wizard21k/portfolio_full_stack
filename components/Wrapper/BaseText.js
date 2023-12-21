import { Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const BaseText = ({
  firstTitle,
  secondTitle,
  textIcon,
  leftSpacing = 0,
  topSpacing = 0,
  ...props
}) => {
  return (
    <React.Fragment>
      <Flex my={{ base: 0, md: 0, lg: 0, sm: 10, xs: 12 }} {...props}>
        <VStack align="start" position="relative">
          <Text
            fontSize={{
              base: "7xl",
              lg: "7xl",
              md: "7xl",
              sm: "6xl",
              xs: "6xl",
            }}
            fontWeight="900"
            zIndex="5"
          >
            {firstTitle}
          </Text>
        </VStack>
      </Flex>
    </React.Fragment>
  );
};

export default BaseText;

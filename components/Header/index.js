import React from "react";
import ColorModeSwitcher from "../../utils/ThemeToggleButton";
import { Box, Flex, Stack, Button, ButtonGroup } from "@chakra-ui/react";
import NavItems from "./NavItems";
import BaseLayout from "../Wrapper/BaseLayout";

const Header = () => {
  return (
    <React.Fragment>
      <BaseLayout px="0" pt="0">
        <Box
          top="0"
          zIndex="10"
          maxW="1536"
          w="100%"
          px={{ md: 20, lg: 20, sm: 5 }}
        >
          <Flex
            backdropFilter="blur(7px)"
            border="none"
            minH="60px"
            py={{ base: 3, md: 3, lg: 3, sm: 3, xs: 4 }}
            px={{ base: 4, md: 7 }}
            alignSelf="center"
          >
            <NavItems />
            <Stack
              flex={{ base: 1, md: 1 }}
              justify="end"
              direction="row"
              align="center"
              spacing="3"
              mx={{
                base: 0,
              }}
            >
              <ColorModeSwitcher
                justifySelf="flex-end"
                display={{
                  base: "none",
                  md: "inline-flex",
                  sm: "inline-flex",
                  xs: "inline-flex",
                }}
                _focus={{ boxShadow: "outline" }}
              />

              <ButtonGroup
                display={{ base: "flex", md: "flex", sm: "none", xs: "none" }}
              >
                <Button
                  colorScheme="teal"
                  target="_blank"
                  as="a"
                  href="https://cal.com/ayushsoni1010/"
                  variant="solid"
                  size="md"
                  bgGradient="linear(to-r, teal.500, green.400)"
                >
                  Schedule a Meeting
                </Button>
              </ButtonGroup>
            </Stack>
          </Flex>
        </Box>
      </BaseLayout>
    </React.Fragment>
  );
};

export default Header;

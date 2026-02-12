"use client";

import { Flex, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconMail, IconMapPinFilled, IconPhone } from "@tabler/icons-react";
import Contact from "../Contact/Contact";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      direction={isMobile ? "column" : "row"}
      justify={isMobile ? "center" : "space-between"}
      align={isMobile ? "center" : "flex-start"}
      gap={isMobile ? 30 : 0}
      p={isMobile ? 20 : 50}
    >
      {/* Contact Info */}
      <Flex
        direction="column"
        gap={10}
        align={isMobile ? "center" : "flex-start"}
      >
        <Flex align="center" gap={5}>
          <IconMapPinFilled size={18} />
          <Text ta={isMobile ? "center" : "left"}>
            Marilao, Bulacan, Philippines
          </Text>
        </Flex>

        <Flex align="center" gap={5}>
          <IconPhone size={18} />
          <Text>+63 000-000-0000</Text>
        </Flex>

        <Flex align="center" gap={5}>
          <IconMail size={18} />
          <Text>imDariusReyes@gmail.com</Text>
        </Flex>
      </Flex>

      {/* Social / Contact Component */}
      <Flex justify="center" align="center">
        <Contact
          onMainClick={() => {}}
          onGithubClick={() => {}}
          onInstagramClick={() => {}}
          onLinkedInClick={() => {}}
        />
      </Flex>
    </Flex>
  );
};

export default Footer;

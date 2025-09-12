import { Flex, Text, Title } from "@mantine/core";
import React from "react";
import { IconMail, IconMapPinFilled, IconPhone } from "@tabler/icons-react";
import Contact from "../Contact/Contact";

const Footer = () => {
  return (
    <Flex p={50} bottom={0} justify={"space-between"}>
      <Flex direction={"column"} gap={10}>
        <Flex align={"center"} gap={5}>
          <IconMapPinFilled />
          <Text>Marilao, Bulacan, Philippines</Text>
        </Flex>
        <Flex align={"center"} gap={5}>
          <IconPhone />
          <Text>+63 000-000-0000</Text>
        </Flex>
        <Flex align={"center"} gap={5}>
          <IconMail />
          <Text>imDariusReyes@gmail.com</Text>
        </Flex>
      </Flex>

      <Flex justify={"center"} align={"center"}>
        {/* <Title style={{ fontSize: "20px" }}>
          This project is currently under development. 🚧
        </Title> */}

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

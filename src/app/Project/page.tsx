import Footer from "@/component/Footer/Footer";
import Navbar from "@/component/Navbar/Navbar";
import { Flex, Text } from "@mantine/core";
import React from "react";

const page = () => {
  return (
    <Flex direction={"column"} flex={1}>
      {/*1ST column */}
      <Navbar />
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        style={{ height: "550px" }}
      >
        <Text>PROJECT</Text>
        <Text>My recent works</Text>
      </Flex>

      {/*2ND column */}
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        style={{ height: "550px" }}
      >
       Projects
      </Flex>

      {/*3RD column */}
      <Flex direction={"column"} justify={"center"} bottom={0}>
        <Footer />
      </Flex>
    </Flex>
  );
};

export default page;

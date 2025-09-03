import Footer from "@/component/Footer/Footer";
import Navbar from "@/component/Navbar/Navbar";
import AutoPlayCarousel from "@/component/Sample/Sample";
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
        style={{ height: "400px" }}
      >
        <Text>About</Text>
        <Text>I&apos;m a developer</Text>
      </Flex>

      {/*2ND column */}

      <Flex
        bg={"blue"}
        direction={"row"}
        align={"center"}
        justify={"space-around"}
        style={{ height: "500px" }}
      >
        <Flex direction={"column"} justify={"center"} align={"center"} p={10}>
          <Text>My Exp</Text>
        </Flex>

        <Flex direction={"column"} justify={"center"} align={"center"} p={10}>
          <Text>My Image??</Text>
        </Flex>
      </Flex>

      {/*3RD column */}
      <Flex
        bg={"pink"}
        direction={"row"}
        align={"center"}
        justify={"center"}
        style={{ height: "500px", width: "100%" }}
      >

        {/* SOMETHING ABOUT ME */}
        <Flex
          direction={"column"}
          align={"center"}
          justify={"center"}
          w={"50%"}
        >
          <Text> SOMETHING ABOUT ME</Text>
          <Text
            size="lg"
            lineClamp={6}
            style={{ padding: "10px 70px", textAlign: "center" }}
          >
            I’m a Software Developer driven by curiosity and a passion for
            creating interactive web experiences. I’m focused on sharpening my
            skills to grow into a full-stack developer and build meaningful
            digital solutions. Guided by discipline and passion, I strive to do
            what I love and give my best in every project.
          </Text>
        </Flex>

        {/* SKILL */}
        <Flex
          align={"center"}
          justify={"center"}
          w={"50%"}
          direction={"row"}
          m={50}
        >
          <AutoPlayCarousel />
        </Flex>
      </Flex>

      {/*3RD column */}
      <Flex direction={"column"} justify={"center"} bottom={0}>
        <Footer />
      </Flex>
    </Flex>
  );
};

export default page;

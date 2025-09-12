"use client";
import Footer from "@/component/Footer/Footer";
import Navbar from "@/component/Navbar/Navbar";
import AutoPlayCarousel from "@/component/Sample/Sample";
import { Timeline, TimelineItemData } from "@/Component/Timeline/TimeLine";
import { Flex, Text } from "@mantine/core";
import React from "react";

const page = () => {
  const experienceData: TimelineItemData[] = [
    {
      period: "2023 - Current",
      title: "Full-Stack Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      period: "2018 - 2022",
      title: "Full-Stack Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];
  return (
    <Flex direction={"column"} flex={1}>
      {/*1ST column */}
      <Navbar />
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        style={{
          height: "400px",
          backgroundImage: "url('/homeBg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Flex
          direction={"column"}
          align={"center"}
          justify={"center"}
          style={{
            backdropFilter: "blur(6px)", // 👈 blurs what's behind
            WebkitBackdropFilter: "blur(3px)", // Safari
            flex: 1,
          }}
        >
          <Text>About</Text>
          <Text>I&apos;m a developer</Text>
        </Flex>
      </Flex>

      {/*2ND column */}
      <Flex
        direction={"row"}
        align={"center"}
        // justify={"space-between"}
        style={{ height: "500px", padding: "0px 30px", width: "100%" }}
      >
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          p={20}
          w={"50%"}
        >
          <Timeline title="EXPERIENCE" items={experienceData} />
        </Flex>

        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          p={10}
          w={"50%"}
        >
          <Text>My Image??</Text>
        </Flex>
      </Flex>

      {/*3RD column */}
      <Flex
        bg={"white"}
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

      {/*4TH column */}
      <Flex direction={"column"} justify={"center"} bottom={0}>
        <Footer />
      </Flex>
    </Flex>
  );
};

export default page;

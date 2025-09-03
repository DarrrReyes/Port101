"use client";
import Footer from "@/component/Footer/Footer";
import Navbar from "@/component/Navbar/Navbar";
import { ProjectShowcaseCard } from "@/Component/ProjectCard/ProjectShowcaseCard";
import { Flex, Text } from "@mantine/core";
import React from "react";

const page = () => {
  const handleView = () => {
    console.log("View project clicked");
  };

  const handleSource = () => {
    console.log("Source clicked");
  };

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
        <Text>PROJECT</Text>
        <Text>My recent works</Text>
      </Flex>

      {/*2ND column */}
      <Flex
        bg={"pink"}
        direction={"row"}
        align={"center"}
        justify={"space-around"}
        gap={50}
        p={20}
        style={{ height: "550px" }}
      >
        <ProjectShowcaseCard
          title="MediTrack Pro"
          description="Advanced patient monitoring system with real-time analytics and automated reporting for healthcare professionals."
          imageUrl="/homeBg.png"
          imageAlt="MediTrack Pro dashboard interface"
          backgroundImageUrl="/homeBg.png"
          category="Test One"
          primaryAction={{ label: "Explore", onClick: handleView }}
          secondaryAction={{ label: "Documentation", onClick: handleSource }}
        />

        <ProjectShowcaseCard
          title="MediTrack Pro"
          description="Advanced patient monitoring system with real-time analytics and automated reporting for healthcare professionals."
          imageUrl="/homeBg.png"
          imageAlt="MediTrack Pro dashboard interface"
          backgroundImageUrl="/homeBg.png"
          category="Test One"
          primaryAction={{ label: "Explore", onClick: handleView }}
          secondaryAction={{ label: "Documentation", onClick: handleSource }}
        />

        <ProjectShowcaseCard
          title="MediTrack Pro"
          description="Advanced patiefsfsfdsfdsfsg  ced patiefsfsfdsfdsfsg  gdf g df dg fgfdgntitoring system with r ced patiefsfsfdsfdsfsg  gdf g df dg fgfdgntitoring system with r ced patiefsfsfdsfdsfsg  gdf g df dg fgfdgntitoring system with r gdf g df dg fgfdgntitoring system with real-time fdfdfdfdffdffdfanalytics and automated reporting for healthcare professionals."
          imageUrl="/homeBg.png"
          imageAlt="MediTrack Pro dashboard interface"
          backgroundImageUrl=""
          category="Test One"
          primaryAction={{ label: "Explore", onClick: handleView }}
          secondaryAction={{ label: "Documentation", onClick: handleSource }}
        />
      </Flex>

      {/*3RD column */}
      <Flex direction={"column"} justify={"center"} bottom={0}>
        <Footer />
      </Flex>
    </Flex>
  );
};

export default page;

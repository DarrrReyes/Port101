"use client";
import CustomButton from "@/component/CustomButton/CustomButton";
import Footer from "@/component/Footer/Footer";
// import Image from "next/image";
// import styles from "./page.module.css";
import {  Flex, Title } from "@mantine/core";

export default function Home() {
  return (
    // <Flex flex={1} direction={"column"}>
    <Flex direction={"column"} flex={1}>
      <Flex
        direction={"column"}
        justify={"center"}
        align={"center"}
        gap={10}
        flex={1}
      >
        <Title style={{ fontSize: "55px" }}>Darius Joaquin Reyes</Title>
        <Flex gap={10}>
          <CustomButton label="Contact" color="pink"/>
          <CustomButton label="About" />
        </Flex>
      </Flex>

      {/* <Flex bottom={0} justify={"center"} p={50}>
        <Title style={{ fontSize: "80px" }}>
          This project is currently under development. 🚧
        </Title>
      </Flex> */}
      <Footer/>
    </Flex>
    // </Flex>
  );
}

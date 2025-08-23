"use client";
import CustomButton from "@/component/CustomButton/CustomButton";
// import Footer from "@/component/Footer/Footer";
// import Image from "next/image";
// import styles from "./page.module.css";
import { Flex, Title } from "@mantine/core";
// import Navbar from "../component/Navbar/Navbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <Flex direction={"column"} style={{ flex: 1, height: "100vh" }}>
      {/* <Navbar /> */}
      <Flex
        direction={"column"}
        justify={"center"}
        align={"center"}
        gap={10}
        flex={1}
      >
        <Title style={{ fontSize: "55px" }}> Joaquin Reyes</Title>
        <Flex gap={10}>
          <CustomButton label="Contact" color="#B80606" onClick={() => {}} />
          <CustomButton
            label="About"
            onClick={() => {
              router.push("/About");
            }}
          />
          {/* <Button
           variant="outline"
            // c=
            color={'black'}
            style={{
              height: "40px",
              width: "130px",
              backgroundColor: 'white',
              color: "#B80606",
              fontWeight: 700
            }}
          >SAMPLE</Button> */}
        </Flex>
      </Flex>

      {/* <Footer/> */}
    </Flex>
  );
}

"use client";
import CustomButton from "@/component/CustomButton/CustomButton";
import { BackgroundImage, Flex, Title } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <Flex
      direction={"column"}
      style={{
        flex: 1,
        height: "100vh",
        backgroundImage: "url('/homeBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Flex
        direction={"column"}
        justify={"center"}
        align={"center"}
        gap={10}
        flex={1}
        style={{
          backdropFilter: "blur(6px)", // 👈 blurs what's behind
          WebkitBackdropFilter: "blur(3px)", // Safari
        }}
      >
        <Title style={{ fontSize: "55px", color: "#fcfcfc" }}>
          Darius Joaquin Reyes
        </Title>
        <Flex gap={10}>
          <CustomButton
            label="Project"
            color="#fcfcfc"
            variant="outline"
            style={{
              height: "40px",
              width: "130px",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              color: "white",
            }}
            onClick={() => {
              router.push("/Project");
            }}
          />
          <CustomButton
            label="About"
            color="#fcfcfc"
            variant="outline"
            style={{
              height: "40px",
              width: "130px",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              color: "white",
            }}
            onClick={() => {
              router.push("/About");
            }}
          />
        </Flex>
      </Flex>

      {/* <Footer/> */}
    </Flex>
  );
}

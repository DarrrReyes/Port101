"use client";
import CustomButton from "@/component/CustomButton/CustomButton";
import { BackgroundImage, Flex, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // Breakpoints
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
  // const isDesktop = useMediaQuery('(min-width: 1025px)');

  return (
    <Flex
      direction="column"
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
        direction="column"
        justify="center"
        align="center"
        gap={isMobile ? 20 : 10}
        flex={1}
        px={isMobile ? 20 : 0}
        style={{
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
        }}
      >
        <Title
          ta="center"
          style={{
            fontSize: isMobile ? "28px" : isTablet ? "40px" : "55px",
            color: "#fcfcfc",
          }}
        >
          Darius Joaquin Reyes
        </Title>

        <Flex
          gap={10}
          direction={isMobile ? "column" : "row"}
          w={isMobile ? "100%" : "auto"}
        >
          <CustomButton
            label="Project"
            variant="outline"
            color="#fcfcfc"
            style={{
              height: isMobile ? "45px" : "40px",
              width: isMobile ? "100%" : "130px",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              // color: "white",
            }}
            onClick={() => router.push("/Project")}
          />

          <CustomButton
            label="About"
            variant="outline"
            color="#fcfcfc"
            style={{
              height: isMobile ? "45px" : "40px",
              width: isMobile ? "100%" : "130px",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              // color: "white",
            }}
            onClick={() => router.push("/About")}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

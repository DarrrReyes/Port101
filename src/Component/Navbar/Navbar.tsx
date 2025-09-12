"use client";
import { Button, Flex, Title } from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  return (
    <Flex
      justify={"space-between"}
      style={{ backgroundColor: "transparent", padding: "5px 16px" }}
    >
      <Flex align={"center"}>
        <Title style={{ fontSize: "32px" }}>Port101</Title>
      </Flex>
      <Flex justify={"end"} align={"center"}>
        <Button
          className="hover-underline-animation left"
          style={{
            backgroundColor: "transparent",
            color: "#c23659ff",
            fontSize: "19px",
            fontWeight: "bolder",
          }}
          onClick={() => {
            router.push("/");
          }}
        >
          Home
        </Button>

        <Button
          className="hover-underline-animation left"
          style={{
            backgroundColor: "transparent",
            color: "#c23659ff",
            fontSize: "19px",
            fontWeight: "bolder",
          }}
          onClick={() => {
            router.push("/Project");
          }}
        >
          Project
        </Button>
        <Button
          className="hover-underline-animation left"
          style={{
            backgroundColor: "transparent",
            color: "#c23659ff",
            fontSize: "19px",
            fontWeight: "bolder",
          }}
          onClick={() => {
            router.push("/About");
          }}
        >
          About
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;

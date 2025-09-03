import { ActionIcon, Button, Flex, Stack, Title } from "@mantine/core";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

interface IContactProps {
  // mainLabel: string;
  onMainClick?: () => void;
  onLinkedInClick?: () => void;
  onGithubClick?: () => void;
  onInstagramClick?: () => void;
}

const Contact = ({
  onMainClick,
  onLinkedInClick,
  onGithubClick,
  onInstagramClick,
}: IContactProps) => {
  return (
    <Stack gap="sm" align="center" w="100%">
      {/* Top main button */}
      <CustomButton
        label="Contact"
        color="#fcfcfc"
        variant="outline"
        style={{
          height: "40px",
          width: "200px",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          color: "white",
        }}
        onClick={onMainClick}
      />
      {/* Bottom social icons */}
      <Flex
        gap="sm"
        // justify="center"
        wrap="wrap" // ✅ makes icons wrap on smaller screens
        w="100%"
      >
        <ActionIcon
          size="lg"
          variant="outline"
          color="blue"
          onClick={onLinkedInClick}
          radius="xl"
        >
          <IconBrandLinkedin size={20} />
        </ActionIcon>

        <ActionIcon
          size="lg"
          variant="outline"
          color="dark"
          onClick={onGithubClick}
          radius="xl"
        >
          <IconBrandGithub size={20} />
        </ActionIcon>

        <ActionIcon
          size="lg"
          variant="outline"
          color="pink"
          onClick={onInstagramClick}
          radius="xl"
        >
          <IconBrandInstagram size={20} />
        </ActionIcon>
      </Flex>
    </Stack>
  );
};

export default Contact;

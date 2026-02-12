"use client";
import { Flex, Title, Button, Burger, Drawer, Stack } from "@mantine/core";
import { useMediaQuery, useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [opened, { toggle, close }] = useDisclosure(false);

  const navigate = (path: string) => {
    router.push(path);
    close();
  };

  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        px="md"
        py="xs"
        bg="transparent"
      >
        {/* Logo */}
        <Title order={2} fz={isMobile ? 24 : 32}>
          Port101
        </Title>

        {/* Desktop Menu */}
        {!isMobile && (
          <Flex gap="md">
            <Button
              variant="subtle"
              c="#c23659ff"
              fw={700}
              fz={19}
              onClick={() => router.push("/")}
            >
              Home
            </Button>

            <Button
              variant="subtle"
              c="#c23659ff"
              fw={700}
              fz={19}
              onClick={() => router.push("/Project")}
            >
              Project
            </Button>

            <Button
              variant="subtle"
              c="#c23659ff"
              fw={700}
              fz={19}
              onClick={() => router.push("/About")}
            >
              About
            </Button>
          </Flex>
        )}

        {/* Mobile Burger */}
        {isMobile && <Burger opened={opened} onClick={toggle} size="sm" />}
      </Flex>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        title="Menu"
        padding="md"
        size="70%"
      >
        <Stack>
          <Button variant="subtle" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button variant="subtle" onClick={() => navigate("/Project")}>
            Project
          </Button>
          <Button variant="subtle" onClick={() => navigate("/About")}>
            About
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};

export default Navbar;

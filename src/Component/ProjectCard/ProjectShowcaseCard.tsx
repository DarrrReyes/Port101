"use client";
import {
  Card,
  Box,
  Image,
  Badge,
  Title,
  Text,
  Group,
  Button,
  Flex,
  AspectRatio,
} from "@mantine/core";
import { IconEye, IconExternalLink } from "@tabler/icons-react";
import { useState } from "react";

interface ProjectShowcaseCardProps {
  backgroundImageUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
  category?: string;
  title: string;
  description: string;
  primaryAction: { label: string; onClick: () => void };
  secondaryAction: { label: string; onClick: () => void };
  className?: string;
}

export function ProjectShowcaseCard({
  backgroundImageUrl,
  imageUrl,
  imageAlt,
  category,
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
}: ProjectShowcaseCardProps) {
  // const [expanded, setExpanded] = useState(false);
  return (
    <Card
      shadow="md"
      padding={0}
      radius="lg"
      className={`project-card ${className ?? ""}`}
      style={{
        backgroundImage: backgroundImageUrl
          ? `url(${backgroundImageUrl})`
          : undefined,
      }}
    >
      {backgroundImageUrl && <Box className="project-card-overlay" />}

      <Box className="project-card-content">
        <Box pos="relative" className="project-card-image">
          <AspectRatio ratio={30 / 10}>
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={imageAlt}
              fit="cover"
              className="project-card-img"
            />
          </AspectRatio>

          {category && (
            <Badge variant="filled" color="dark" className="project-card-badge">
              {category}
            </Badge>
          )}
        </Box>

        <Flex
  direction="column"
  justify="space-between"
  p="xl"
  className="project-card-body"
  style={{ height: "100%" }} // 👈 important so flex distributes properly
>
  {/* Top: Title + Description */}
  <Box>
    <Title
      order={3}
      size="xl"
      fw={700}
      mb="xs"
      className="project-card-title"
    >
      {title}
    </Title>

    <Text
      size="sm"
      c="dimmed"
      className={`project-card-description`}
    >
      {description}
    </Text>

    {/* {description.length > 115 && (
      <Button
        variant="subtle"
        size="xs"
        onClick={() => setExpanded((prev) => !prev)}
        className="project-card-see-more"
      >
        {expanded ? "See less" : "See more"}
      </Button>
    )} */}
  </Box>

  {/* Bottom: Action Buttons */}
  <Group grow mt="lg" className="project-card-actions">
    <Button
      variant="filled"
      color="blue"
      leftSection={<IconEye size={16} />}
      onClick={primaryAction.onClick}
    >
      {primaryAction.label}
    </Button>
    <Button
      variant="outline"
      color="gray"
      leftSection={<IconExternalLink size={16} />}
      onClick={secondaryAction.onClick}
    >
      {secondaryAction.label}
    </Button>
  </Group>
</Flex>
      </Box>
    </Card>
  );
}

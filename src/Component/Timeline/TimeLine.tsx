"use client";
import { Box, Text, Timeline as MantineTimeline } from "@mantine/core";

export interface TimelineItemData {
  period: string;
  title: string;
  description: string;
}

interface TimelineProps {
  title?: string;
  items: TimelineItemData[];
}

export function Timeline({ title = "EXPERIENCE", items }: TimelineProps) {
  return (
    <Box maw={600} mx="auto" p="md">
      <Text
        size="lg"
        fw={700}
        c="white"
        mb="xl"
        tt="uppercase"
        style={{ letterSpacing: 1 }}
      >
        {title}
      </Text>

      <MantineTimeline
        active={items.length}
        bulletSize={12}
        lineWidth={2}
        color="white"
        styles={{
          itemBullet: {
            // backgroundColor: "#c23659ff",
            border: "none",
          },
          itemBody: {
            paddingBottom: "2rem",
          },
        }}
      >
        {items.map((item, index) => (
          <MantineTimeline.Item key={index}>
            <Text size="md" c="white" fw={500} mb={4}>
              {item.period}
            </Text>
            <Text size="lg" fw={600} c="#c23659ff" mb={8}>
              {item.title}
            </Text>
            <Text size="sm" lh={1.6}>
              {item.description}
            </Text>
          </MantineTimeline.Item>
        ))}
      </MantineTimeline>
    </Box>
  );
}

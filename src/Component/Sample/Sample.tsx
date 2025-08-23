"use client";
import { Flex, Image } from "@mantine/core";

export default function AutoPlayCarousel() {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwIy-mzDNwEgiWKpwsy_8CK9KSr6GEnCcpgQ&s",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
    "https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
  ];

  return (
    <Flex gap={10} direction={"column"} >
      {/* Left scroll */}
      <div className="slider">
        <Flex className="slide-track left">
          {[...logos, ...logos].map((src, i) => (
            <Flex
              key={`left-${i}`}
              className="slide"
              justify="center"
              align="center"
            >
              <Image
                src={src}
                alt={`logo-left-${i}`}
                height={80}
                width={250}
                fit="contain"
              />
            </Flex>
          ))}
        </Flex>
      </div>

      {/* Right scroll */}
      <div className="slider mt-6">
        <Flex className="slide-track right">
          {[...logos, ...logos].map((src, i) => (
            <Flex
              key={`right-${i}`}
              className="slide"
              justify="center"
              align="center"
            >
              <Image
                src={src}
                alt={`logo-right-${i}`}
                height={100}
                width={250}
                fit="contain"
              />
            </Flex>
          ))}
        </Flex>
      </div>
    </Flex>
  );
}

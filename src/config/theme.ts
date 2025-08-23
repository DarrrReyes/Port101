// "use client";
// import { createTheme, Text } from "@mantine/core";
// import { Zain } from "next/font/google";

// const zain = Zain({
//   subsets: ["latin"],
//   weight: ["200", "300", "400"],
// });

// export const theme = createTheme({
//   components: {
//     Text: Text.extend({
//       styles: () => ({
//         root: {
//           fontFamily: zain.style.fontFamily,
//           // Example usage of Mantine theme values:
//           // fontWeight: 400, // just use number/string
//           // color: "#111827", // example (gray-900)
//         },
//       }),
//     }),

//     Button: {
//       styles: {
//         root: {
//           display: "inline-block",
//           position: "relative",
//           background: "transparent",
//           color: "#0087ca",

//           "&::after": {
//             content: '""',
//             position: "absolute",
//             width: "100%",
//             transform: "scaleX(0)",
//             height: "2px",
//             bottom: 0,
//             left: 0,
//             backgroundColor: "#0087ca",
//             transition: "transform 0.25s ease-out",
//             transformOrigin: "bottom right",
//           },

//           "&:hover::after": {
//             transform: "scaleX(1)",
//             transformOrigin: "bottom left",
//           },
//         },
//       },
//     },
//   },
// });

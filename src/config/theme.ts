'use client';
import {  createTheme, Text  } from "@mantine/core";
import { Zain } from "next/font/google";

const zain = Zain({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});

// const CustomButton = extendVariants(Button, {
//   variants: {
//     primaryOutline: () => ({
//       root: {
//         backgroundColor: "transparent",
//         color: "#1f2937", // gray-900
//         border: "2px solid #1f2937",
//         "&:hover": {
//           backgroundColor: "#1f2937",
//           color: "white",
//         },
//       },
//     }),
//     ghost: () => ({
//       root: {
//         backgroundColor: "transparent",
//         color: "#6b7280", // gray-500
//         border: "none",
//         boxShadow: "none",
//         "&:hover": {
//           backgroundColor: "#f3f4f6", // gray-100
//         },
//       },
//     }),
//   },
// });


export const theme = createTheme({
  components: {
    Text: Text.extend({
      styles: (theme) => ({
        root: {
          ...theme,
          fontFamily: zain.style.fontFamily,
        //   fontWeight: "500"
          
        },
      }),
    }),

    
  },
});

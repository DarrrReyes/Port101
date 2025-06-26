import { Button, ButtonProps } from "@mantine/core";
import React from "react";

interface CustomButtonProps extends ButtonProps {
  label: string;
}
const CustomButton = ({ label, ...props }: CustomButtonProps) => {
  return (
    <Button
      variant="outline"
      style={{
        height: "40px",
        width: "130px",
      }}
    //   color="green"
      {...props}
    >
      {label}
    </Button>
  );
};

export default CustomButton;

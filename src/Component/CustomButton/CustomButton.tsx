import { Button, ButtonProps } from "@mantine/core";
import React from "react";

interface CustomButtonProps extends ButtonProps {
  label: string;
  onClick: () => void;
}
const CustomButton = ({ label, onClick, ...props }: CustomButtonProps) => {
  return (
    <Button
      variant="outline"
      style={{
        height: "40px",
        width: "130px",
      }}
      //   color="green"
      {...props}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomButton;

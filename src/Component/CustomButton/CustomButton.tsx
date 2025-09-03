import { Button, ButtonProps, createPolymorphicComponent } from "@mantine/core";
import React from "react";

interface CustomButtonProps extends ButtonProps {
  label: string;
  // onClick: () => void;
}
const CustomButton = ({ label,  ...props }: CustomButtonProps) => {
  return (
    <Button
      // variant="outline"
      style={{
        height: "40px",
        width: "130px",
        // opacity: 1
      }}
      //   color="green"
      {...props}
      // onClick={onClick}
    >
      {label}
    </Button>
  );
};

// export default CustomButton;
export default createPolymorphicComponent<'button', CustomButtonProps>(
  CustomButton,
);

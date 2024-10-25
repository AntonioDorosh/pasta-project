import React, { ReactNode } from "react";
import { px2vw } from "@/utils";
import { Button } from "@/components/UI/Button/Button";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import { useUpdateQuantity } from "@/shared/hooks/useUpdateQuantity";

export const QuantityControl = ({
  quantity,
  id,
  children,
}: {
  quantity: number;
  id?: string | undefined;
  children?: ReactNode;
}) => {
  const updateQuantity = useUpdateQuantity();

  return (
    <Flex alignItems={"center"} gap={px2vw(10)}>
      <Button
        $variant={"quantity"}
        onClick={() =>
          updateQuantity({
            id: id!,
            quantity: quantity - 1,
          })
        }
      >
        -
      </Button>
      <Typography fontWeight={700}>{quantity}</Typography>
      <Button
        $variant={"quantity"}
        onClick={() =>
          updateQuantity({
            id: id!,
            quantity: quantity + 1,
          })
        }
      >
        +
      </Button>
      {children}
    </Flex>
  );
};

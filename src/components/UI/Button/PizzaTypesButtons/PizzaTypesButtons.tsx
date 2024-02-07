import React from "react";
import { Button } from "../Button.tsx";
import Text from "../../../../styles/Text/Text.ts";
import { pizzaTypes, remCalc } from "../../../../utils";
import { useAppDispatch } from "../../../../redux/hooks/useStore.ts";
import { setActiveTypes } from "../../../../redux/reducers/filter/slice.ts";

type PizzaTypesButtonsProps = {
  types: number[];
  id: number | string;
  activeTypes: { [key: string]: number };
};

export const PizzaTypesButtons = ({
  types,
  id,
  activeTypes,
}: PizzaTypesButtonsProps) => {
  const dispatch = useAppDispatch();
  return (
    <>
      {types.map((type, index) => (
        <Button
          key={index}
          $variant={"card"}
          $isActive={activeTypes[id] === index}
          onClick={() =>
            dispatch(
              setActiveTypes({
                id,
                type: index,
              }),
            )
          }
        >
          <Text fontSize={remCalc(14)} fontWeight={700}>
            {pizzaTypes[type]}
          </Text>
        </Button>
      ))}
    </>
  );
};

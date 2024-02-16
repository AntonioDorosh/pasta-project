import React from "react";
import { Button } from "../Button.tsx";
import Text from "../../../../styles/Text/Text.ts";
import { remCalc } from "../../../../utils";
import { useAppDispatch } from "../../../../redux/hooks/useStore.ts";
import { setActive } from "../../../../redux/reducers/filter/slice.ts";

type PizzaSizesButtonsProps = {
    sizes: number[];
    id: number | string;
    activeSize: { [key: string]: number };
};

export const PizzaSizesButtons = ({
    sizes,
    id,
    activeSize,
}: PizzaSizesButtonsProps) => {
    const dispatch = useAppDispatch();
    return (
        <>
            {sizes.map((size, index) => (
                <Button
                    key={index}
                    $variant={"card"}
                    onClick={() =>
                        dispatch(
                            setActive({
                                id,
                                value: index,
                                key: "activeSize",
                            }),
                        )
                    }
                    $isActive={activeSize[id] === index}
                >
                    <Text fontSize={remCalc(14)} fontWeight={400}>
                        {size}cm.{" "}
                    </Text>
                </Button>
            ))}
        </>
    );
};

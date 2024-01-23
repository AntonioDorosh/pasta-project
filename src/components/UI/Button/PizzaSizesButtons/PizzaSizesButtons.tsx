import React from 'react';
import {Button} from "../Button.tsx";
import Text from "../../../../styles/Text/Text.ts";
import {remCalc} from "../../../../utils";

type PizzaSizesButtonsProps = {
    sizes: number[];
    activeSize: number;
    setActiveSize: (index: number) => void;
}

export const PizzaSizesButtons = ({sizes, activeSize, setActiveSize}: PizzaSizesButtonsProps) => {
    return (
        <>
            {sizes.map((size, index) => (
                <Button key={index} $variant={'card'}
                        onClick={() => setActiveSize(index)}
                        $isActive={activeSize === index}><Text
                    fontSize={remCalc(14)}
                    fontWeight={400}>{size}cm. </Text></Button>
            ))}
        </>
    );
};

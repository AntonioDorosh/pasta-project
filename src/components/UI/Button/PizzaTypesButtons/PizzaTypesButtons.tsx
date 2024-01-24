import React from 'react';
import {Button} from "../Button.tsx";
import Text from "../../../../styles/Text/Text.ts";
import {remCalc} from "../../../../utils";
import {pizzaTypes} from "../../../../utils";

type PizzaTypesButtonsProps = {
    types: number[];
    activeTypes: number;
    setActiveTypes: (index: number) => void;
}

export const PizzaTypesButtons = ({types, activeTypes, setActiveTypes}: PizzaTypesButtonsProps) => {
    return (
        <>
            {types.map((type, index) => (
                <Button key={index} $variant={'card'}
                        $isActive={activeTypes === index}
                        onClick={() => setActiveTypes(index)}><Text
                    fontSize={remCalc(14)}
                    fontWeight={700}>{pizzaTypes[type]}</Text></Button>
            ))}
        </>
    );
};


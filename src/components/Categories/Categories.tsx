import React, {useState} from 'react';
import Flex from "../../styles/Flex/Flex.ts";
import Button from "../UI/Button/Button.tsx";
import productCategories from "../../utils/productCategories.ts";
import Text from "../../styles/Text/Text.ts";
import remCalc from "../../utils/remCalc.ts";

const Categories = () => {

    const [activeTab, setActiveTab] = useState(productCategories[0]);

    return (
        <>
            <Flex as={'ul'} alignItems={'center'} marginBottom={40} flex={1}
                  flexWrap={'wrap'}>
                {productCategories.map((item, index) => (
                    <li key={index}>
                        <Button $variant={'category'}
                                $isActive={activeTab === item}
                                onClick={() => setActiveTab(item)}><Text fontWeight={700}>{item}</Text></Button>
                    </li>
                ))}
            </Flex>
            <Text fontSize={remCalc(32)} fontWeight={700}
                  marginBottom={35}>{activeTab}</Text>
        </>
    );
};

export default Categories;
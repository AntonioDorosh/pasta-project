import React, {useState} from "react";
import {ProductDto} from "@/shared/types/products";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import {COLORS, formatCurrency, px2vw, remCalc} from "@/utils";
import {Button} from "@/components/UI/Button/Button";
import {ModalProduct} from "@/components/UI/Modal/ModalProduct";
import {Link} from "react-router-dom";

type ProductItemsProps = ProductDto;

export const ProductItem = (props: ProductItemsProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const {title, imageSrc, description, price, id} = props;

  return (
    <>
      {isOpenModal && (
        <ModalProduct
          isOpenModal={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          {...props}
        />
      )}
      <Flex as={"article"} flexDirection={"column"} gap={px2vw(10)}>
        <Flex
          as={"img"}
          borderRadius={"15px"}
          background={`${COLORS.lightGray} url(${imageSrc}) no-repeat center`}
          padding={"120px"}
          marginBottom={px2vw(15)}
          onClick={() => setIsOpenModal(true)}
        />
        <Link to={`/products/${id}`}>
          <Typography fontSize={remCalc(22)} fontWeight={800}>
            {title}
          </Typography>
        </Link>

        <Typography as={"h3"} color={COLORS.graySecondary} fontSize={remCalc(14)}>
          {description}
        </Typography>
        <Flex
          as={"footer"}
          marginTop={"auto"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography fontSize={remCalc(18)} fontWeight={800}>
            от {formatCurrency(price)}
          </Typography>
          <Button $variant={"add"} $size={"primary"}>
            <Typography
              fontSize={remCalc(15)}
              fontWeight={700}
              onClick={() => setIsOpenModal(true)}
            >
              + Добавить
            </Typography>
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

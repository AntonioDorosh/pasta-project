import Flex from "@/shared/styles/styled-components/Flex/Flex";
import emptyCart from "@/assets/images/empty-cart.svg";
import { px2vw } from "@/utils";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import { Link } from "react-router-dom";
import { Button } from "@/components/UI/Button/Button";

type EmptyCartProps = {
  onClose?: () => void;
  $minHeight: string;
};

export const EmptyCart = ({ onClose, $minHeight }: EmptyCartProps) => {
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={$minHeight}
    >
      <img src={emptyCart} alt={"empty-cart-logo"} />
      <Typography marginBottom={px2vw(6)}>Корзина пуста</Typography>
      <Typography
        maxWidth={px2vw(285)}
        textAlign={"center"}
        color={"#A1A1A1"}
        marginBottom={px2vw(37)}
      >
        Добавьте хотя бы одну пиццу, чтобы совершить заказ
      </Typography>
      <Link to={"/"}>
        <Button
          backgroundColor={"#FE5F00"}
          color={"#FFFFFF"}
          width={"230px"}
          height={"55px"}
          borderRadius={"18px"}
          onClick={onClose}
        >
          Вернуться назад
        </Button>
      </Link>
    </Flex>
  );
};

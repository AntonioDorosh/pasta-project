export type TCartItem = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    quantity: number;
};

export type TCartStateSlice = {
    cartItem: TCartItem[];
    cartTotalQuantity: number;
    cartTotalAmount: number;
}
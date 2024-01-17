export type TCartItem = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    type: string;
    size?: number;
    quantity: number;
};

export type TCartState = {
    cartItem: TCartItem[];
    sumPrice: number;
};

export type TCartRemove = Omit<TCartItem, 'title' | 'price' | 'imageUrl' | 'quantity'>



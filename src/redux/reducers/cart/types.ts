export type TCartItem = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    quantity: number;
};

export type TRemoveProduct = Omit<TCartItem, 'title' | 'imageUrl' | 'quantity' | 'price'>;




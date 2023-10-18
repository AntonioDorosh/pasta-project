export type TRootObjectProductPizzas = {
	id: number;
	imageUrl: string;
	title: string;
	types: number[];
	sizes: number[];
	price: number;
	quantity?: number;
};

export enum EStatus {
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
}

export type TRootObjectProductState = {
    product: TRootObjectProductPizzas[];
    status: EStatus;
    error: string | null;
}
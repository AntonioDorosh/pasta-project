export type TRootObjectProductPizzas = {
	id: number;
	imageUrl: string;
	title: string;
	types: number[];
	sizes: number[];
	price: number;
	quantity?: number;
};

export type TPizzaParams = {
	searchValue: string;
	itemsPerPage: number;
	activeCategory: number;
}

export enum EStatus {
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
}

export type TProductState = {
	product: TRootObjectProductPizzas[];
	status: EStatus;
	error: string;
};
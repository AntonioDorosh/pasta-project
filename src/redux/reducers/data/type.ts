export type TRootObjectProductPizzas = {
	id: number | string;
	imageUrl: string;
	title: string;
	types: number[];
	sizes: number[];
	price: number;
	quantity?: number;
};

export type TPizzaParams = {
	search: string;
	itemsPerPage: number;
	category: string;
	currentPage: number;
	sortBy: string;
	order?: string
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
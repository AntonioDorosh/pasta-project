export enum ModalType {
    'DIALOG' = 'DIALOG',
    'PAYMENT' = 'PAYMENT',
}

export type TModalState = {
    isOpen: boolean
    type: ModalType | undefined
};
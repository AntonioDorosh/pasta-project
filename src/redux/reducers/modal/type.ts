export const ModalType = {
    dialog: 'dialog',
    payment: 'payment',
} as const;

export type ModalType = (typeof ModalType)[keyof typeof ModalType];

export type TModalState = {
    isOpen: boolean;
    type: ModalType | undefined;
};

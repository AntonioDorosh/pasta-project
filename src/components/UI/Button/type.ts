import {PropsWithChildren} from "react";

export type TButtonProps = PropsWithChildren & {
    onClick?: () => void;
    $isActive?: boolean;
    $variant?: 'header' | 'category' | 'card' | 'addButton' | 'danger';
}
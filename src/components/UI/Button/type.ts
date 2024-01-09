import React from "react";

export type TButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
    $isActive?: boolean;
    $variant?: 'header' | 'category' | 'card' | 'addButton';
}
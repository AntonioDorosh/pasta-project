import React from 'react';
import { StyledReactPaginate } from './Pagination.styled.tsx';

type PaginationProps = {
    currentPage: number;
    onChangePage: (page: number) => void;
};

export const Pagination = ({ currentPage, onChangePage }: PaginationProps) => {
    return (
        <StyledReactPaginate
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={event => onChangePage(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={5}
            forcePage={currentPage - 1}
        />
    );
};

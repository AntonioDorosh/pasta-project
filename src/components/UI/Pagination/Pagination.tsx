import React from 'react';
import {StyledReactPaginate} from "./Pagination.styled.tsx";

type PaginationProps = {
    currentPage: number;
    onChangePage: (page: number) => void;
}

const Pagination = ({currentPage, onChangePage}: PaginationProps) => {
    return (
        <StyledReactPaginate
            marginPagesDisplayed={5}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={5}
            pageCount={5}
            forcePage={currentPage - 1}
        />
    );
};

export default Pagination;
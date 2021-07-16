import { Pagination } from '@material-ui/lab';
import React from 'react';

type PaginationRoundedPropsType = {
    page: number
    count: number
    onChangeHandler: () => void
} 

export const PaginationRounded: React.FC<PaginationRoundedPropsType> = ({page, count, onChangeHandler}) => {
    return (
        <div style={{marginLeft: "auto"}}>
            <Pagination count={count} shape="rounded" onChange={onChangeHandler} page={page} />
        </div>
    )
}

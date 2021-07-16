import { Pagination } from '@material-ui/lab';
import React from 'react';

type PaginationRoundedPropsType = {
    page: number
    count: number
    onChangePage: (page: number) => void
} 

export const PaginationRounded: React.FC<PaginationRoundedPropsType> = ({page, count, onChangePage}) => {
    
    const onChangeHandler = (event: object, page: number) => {
        onChangePage(page)
    }
    
    return (
        <div style={{marginLeft: "auto"}}>
            <Pagination count={count} shape="rounded" onChange={onChangeHandler} page={page} />
        </div>
    )
}

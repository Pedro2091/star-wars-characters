import React from 'react';
import { PaginationProps as PaginationPropsRoot, Pagination as PaginationRoot } from 'antd';

interface PaginationProps {
    current: number;
    total: number | undefined;
    setCurrentPagination: (page: number) => void;
}

export default function Pagination({ current, total, setCurrentPagination }: PaginationProps) {
    const onChangePagination: PaginationPropsRoot['onChange'] = (page) => {
        setCurrentPagination(page);
    };

    return <PaginationRoot data-testid="pagination" current={current} onChange={onChangePagination} defaultCurrent={1} total={total} showSizeChanger={false} />;
};
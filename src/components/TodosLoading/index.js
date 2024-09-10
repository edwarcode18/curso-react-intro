import React from 'react';
import { SkeletonTodoItem } from '../SkeletonTodoItem';
import './TodosLoading.css'

function TodosLoading() {

    return (
        <>
            <SkeletonTodoItem />
            <SkeletonTodoItem />
            <SkeletonTodoItem />
        </>
    );
}

export { TodosLoading };
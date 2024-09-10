import React from 'react';
import { Skeleton } from '@mui/material';

function SkeletonTodoItem() {
    return (
        <div className="TodoItem">
            <span className="Icon Icon-check">
                <Skeleton variant="circular" width={48} height={48} />
            </span>
            <Skeleton
                variant="rectangular"
                width="calc(100% - 120px)"
                height={60}
                style={{ margin: '24px 0 24px 24px' }}
            />
            <span className="Icon Icon-delete">
                <Skeleton variant="circular" width={48} height={48} />
            </span>
        </div>
    );
}

export { SkeletonTodoItem };

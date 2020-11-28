import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function Loader({ type}) {
    if (type === 'article') {
        return (
            <div className="article-preview">
                <div className="article-meta">
                    <Skeleton circle={true} height={32} width={32} />
                    <div className="info">
                        <Skeleton />
                        <span className="date">
                            <Skeleton />
                        </span>
                    </div>

                    <div className="pull-xs-right">
                        <Skeleton height="27" width={39.16} />
                    </div>
                </div>
                <Skeleton count={4} />
            </div>
        )
    } else {
        return (
            <Skeleton />)
    }
}

import React from 'react';
import useHomeData from '~/utils/useHomeData';

export const Hero: React.FC = () => {
    const { header, subheader } = useHomeData();
    return (
        <div>
            <h1>{header}</h1>
            <h2>{subheader}</h2>
        </div>
    )
};

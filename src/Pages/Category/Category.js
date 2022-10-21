import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Shared/NewsCard/NewsCard';

const Category = () => {
    const newses = useLoaderData();
    console.log(newses);
    return (
        <div>
            {
                newses.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Category;
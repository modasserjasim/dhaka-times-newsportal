import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Shared/NewsCard/NewsCard';

const Category = () => {
    const newses = useLoaderData();
    console.log(newses);
    return (
        <div>
            <h3>This is from Category {newses.length}</h3>
            {
                newses.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Category;
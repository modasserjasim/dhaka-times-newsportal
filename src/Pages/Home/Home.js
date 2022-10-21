import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import NewsCard from '../Shared/NewsCard/NewsCard';

const Home = () => {
    const allNews = useLoaderData();

    const { user } = useContext(AuthContext);

    return (
        <div>
            <h1>Welcome, {user?.email}</h1>
            {
                allNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Home;
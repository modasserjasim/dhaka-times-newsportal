import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import NewsCard from '../Shared/NewsCard/NewsCard';

const Home = () => {
    const allNews = useLoaderData();

    const { user } = useContext(AuthContext);

    return (
        <div>
            {
                user?.displayName && <h3><b>Welcome,</b> {user?.displayName}</h3>
            }
            {
                allNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Home;
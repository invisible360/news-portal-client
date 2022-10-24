import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../Shared/NewsCard/NewsCard';

const Home = () => {
    const allNewsByDefault = useLoaderData();

    return (
        <div>
            <h1>All News Home has {allNewsByDefault.length} News</h1>

            {
                allNewsByDefault.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }

        </div>
    );
};

export default Home;

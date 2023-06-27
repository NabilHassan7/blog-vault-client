import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    // stores all the news from the API call
    const allNews = useLoaderData();
    return (
        <div>
            <h2>Blog Vault - <span style={{color: 'red', fontSize: '40px', fontWeight: 'bold'}}>Homepage</span></h2>
            {/* sending news data to other components */}
            {
                allNews.map(news => <NewsSummaryCard
                    key = {news._id}
                    news = {news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;
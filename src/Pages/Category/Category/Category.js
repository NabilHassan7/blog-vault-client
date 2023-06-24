import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {

    // stores the data sent using loader
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>No of news: {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsSummaryCard
                    key = {news._id}
                    news = {news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;
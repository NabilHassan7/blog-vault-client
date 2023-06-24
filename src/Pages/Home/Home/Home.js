import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    // stores all the news from the API call
    const news = useLoaderData();
    return (
        <div>
            <h2>Blog Vault = {news.length}</h2>
        </div>
    );
};

export default Home;
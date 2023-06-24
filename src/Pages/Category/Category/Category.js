import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {

    // stores the data sent using loader
    const news = useLoaderData();
    return (
        <div>
            <h2>No of news: {news.length}</h2>
        </div>
    );
};

export default Category;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {

    // stores the data sent using loader
    const categoryNews = useLoaderData();
    let titleCategory = categoryNews[0]?.category_id;
    let totalArticles = categoryNews.length;
    let titleName = '';

    if(totalArticles > 20 ){
        titleName = 'All News';
    }
    else if(titleCategory === '1'){
        titleName = 'Breaking News';
    }
    else if(titleCategory === '2'){
        titleName = 'Regular News';
    }
    else if(titleCategory === '3'){
        titleName = 'International News';
    }
    else if(titleCategory === '4'){
        titleName = 'Sports';
    }
    else if(titleCategory === '5'){
        titleName = 'Entertainment';
    }
    else if(titleCategory === '6'){
        titleName = 'Culture';
    }
    else if(titleCategory === '7'){
        titleName = 'Arts';
    }
    else{
        titleName = 'Culture';
    }


    // console.log(categoryNews);
    // console.log(titleName);

    return (
        <div>
            <h2>Category - <span style={{color: 'red', fontSize: '40px', fontWeight: 'bold'}}>{titleName}</span></h2>
            <h2>No. of news: {categoryNews.length}</h2>
            
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
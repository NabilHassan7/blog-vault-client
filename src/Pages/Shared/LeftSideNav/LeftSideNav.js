import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    // Loading news categories from server
    const [newsCategories, setNewsCategories] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/news-categories')
        .then(res => res.json())
        .then(data => setNewsCategories(data));
    },[])

    return (
        <div>
            <h2>All news categories: {newsCategories.length}</h2>
            {/* mapping to show the category list */}
            {/* categories are linked dynamically */}
            <div>
                {
                   newsCategories.map(newsCategory => <p key={newsCategory.id}>
                        <Link to={`/category/${newsCategory.id}`}>{newsCategory.name}</Link> 
                   </p>) 
                }
            </div>
        </div>
    );
};

export default LeftSideNav;
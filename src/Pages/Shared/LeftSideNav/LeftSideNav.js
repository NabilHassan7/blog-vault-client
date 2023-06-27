import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    // Loading news categories from server
    const [newsCategories, setNewsCategories] = useState([]);

    useEffect(() =>{
        fetch('https://blog-vault-server.netlify.app/.netlify/functions/api/news-categories')
        .then(res => res.json())
        .then(data => setNewsCategories(data));
    },[])

    return (
        <div>
            <h2>News Categories: </h2>
            {/* {newsCategories.length} */}
            {/* mapping to show the category list */}
            {/* categories are linked dynamically */}
            <div>
                {
                   newsCategories.map(newsCategory => <p key={newsCategory.id}>
                        <Link className=' text-decoration-none' to={`/category/${newsCategory.id}`}>{newsCategory.name}</Link> 
                   </p>) 
                }
            </div>
        </div>
    );
};

export default LeftSideNav;
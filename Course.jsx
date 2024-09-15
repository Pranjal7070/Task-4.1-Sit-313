

import React from 'react';
import './Course.css'; // Import the corresponding CSS file

const FeaturedArticles = () => {
    const articles = [
      {
        name: 'Mrs Dalloway',
        description: 'Mrs Dalloway is a novel by Virginia Woolf published on 14 May 1925. It details a day in the life of Clarissa Dalloway, a fictional upper-class woman in post-First World War England',
        rating: 4.5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvl0dTkRIF-u7C-GMxxnUgTDGj5bWXJSnzjNPDQFQ4Yu8Yry2n',
      },
      {
        name: 'The Grapes of Wrath',
        description: 'The Grapes of Wrath is an American realist novel written by John Steinbeck and published in 1939',
        rating: 4.8,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9PQAW30YI7_aJp2Qlp2h3l3PHzXALaiqS_QwNfWxlO3fHqzNJ',
      },
      {
        name: 'Brave New World (New Longman Literature)',
        description: 'Brave New World is a dystopian novel by English author Aldous Huxley, written in 1931 and published in 1932.',
        rating: 4.2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGWSw6AUVmjV3dhNg_DQ_MsU3x2UZjVyxAttI03cp4Z8VYjoiL',
      },
    ];
    const tutorials = [
      {
        title: 'C++ Course',
        description: 'Best For Begginers!',
        link: 'https://youtu.be/yGB9jhsEsr8?feature=shared',
        image: 'https://img.youtube.com/vi/yGB9jhsEsr8/maxresdefault.jpg', 
      },
      {
        title: 'The Complete Web Development Roadmap',
        description: 'Best course for Web Developer!',
        link: 'https://youtu.be/GxmfcnU3feo?feature=shared',
        image: 'https://img.youtube.com/vi/GxmfcnU3feo/maxresdefault.jpg', 
      },
      {
        title: 'React Tutorial',
        description: 'Learn React by building eight real-world projects and solving 140+ coding challenges.',
        link: 'https://youtu.be/RGKi6LSPDLU?feature=shared',
        image: 'https://img.youtube.com/vi/RGKi6LSPDLU/maxresdefault.jpg', 
      },
    ];


    return (
      <div className="featured-articles">
        <h2>Featured Articles</h2>
        <div className="article-list">
          {articles.map((article, index) => (
            <div className="article" key={index}>
              <img
                src={article.image}
                alt={article.name}
                className="article-image"
              />
              <h3>{article.name}</h3>
              <p>{article.description}</p>
              <div className="rating">Rating: {article.rating}</div>
            </div>
          ))}
        </div>
        <button className="see-more-button">See More Articles</button>
        <div className="featured-tutorials">
          <h2 className="section-title">Featured Tutorials</h2>
          <div className="tutorial-list">
            {tutorials.map((tutorial, index) => (
        
        
        <div className="tutorial" key={index}>
                <img
                  src={tutorial.image}
                  alt={tutorial.title}
                  className="tutorial-image"
                />
                <h3>{tutorial.title}</h3>
                <p>{tutorial.description}</p>
                <a
                  href={tutorial.link}
                  className="tutorial-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Tutorial
                </a>
              </div>
            ))}
          </div>
        </div>
        <button className="see-more-tutorials">See More Tutorials</button>
  
        <div className="newsletter-signup">
          <h2 className="section-title">Sign Up for the Newsletter</h2>
          <p>Stay updated with the latest articles and tutorials.</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Your Email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default FeaturedArticles;
import './Container.css';

import Button from '../Button'

/*
 * Importing pictures for dummy articles
 */

 import photo1 from '../../public/images/Articles/article1.png';
 import photo2 from '../../public/images/Articles/article2.jpg';
 import photo3 from '../../public/images/Articles/article3.jpg';
 import photo4 from '../../public/images/Articles/article4.jpg';
 import photo5 from '../../public/images/Articles/article5.jpg';
import TextSeperator from '../SVG/TextSeperator';

const dummyArticles = [
    {
        id: 0,
        title: "15 Strategies to Improve Your Site Search and Increase your Conversion Rate",
        content: `Today, Coveo and Sitecore have announced an expanded offering to bring Coveo AI-powered search and recommendations to 
        mid-market customers. This best-in-class offering, previously only available to enterprise-level customers, will enable Sitecore
        customers to build powerful, search-driven experiences with rich personalization djsfkljsdlkfjsfsjdsklfsa`,
        category: "technology",
        publish_date: "23 Jan 2020",
        image: photo1
    },
    {
        id: 1,
        title: "The Must-Attend Coveo Impact Sessions for Sitecore Users",
        content: "dummy content",
        category: "technology",
        publish_date: "23 Jan 2020",
        image: photo2
    },
    {
        id: 2,
        title: "Congratulations to the 2019 Sitecore MVPs!",
        content: "dummy content",
        category: "motivation",
        publish_date: "23 Jan 2020",
        image: photo3
    },
    {
        id: 3,
        title: "Choosing The Best Audio Player Software For Your Computer",
        content: "dummy content",
        category: "business",
        publish_date: "23 Jan 2020",
        image: photo4
    },
    {
        id: 4,
        title: "5 Trends to Include in Your Next Website Redesign",
        content: "dummy content",
        category: "business",
        publish_date: "23 Jan 2020",
        image: photo5
    }
]

const Insights = (props) => {
    const { className } = props;

    return (
        <div className={className}>
            <div className="insights__header">
                <h2>Everything you need to know about sitecore technology, customer experience, and beyond</h2>
                <span className="container__tab">
                    <span className="container__tab__line"></span><p>Insights</p>
                </span>
            </div>
            <div className="insights__articles">
                {dummyArticles.map((article, index) => {
                    return (
                        <div className={`insights__article article_${index}`} key={article.id}>
                            <div className="insights__article__image"><img src={article.image}/></div>
                            <div className="insights__article__data">
                                <p className={`insights__article__category ${article.category}`}>{article.category}</p>
                                <TextSeperator />
                                <p>{article.publish_date}</p>
                            </div>
                            <h3>{article.title}</h3>
                            {index == 0 && <p>{article.content.substring(0, 327) + "..."}</p>}
                        </div>
                    )
                })}
            </div>
            <div className="insights__articles__button">
                <Button ariaLabel="view all articles" variant="secondary">View All Articles</Button>
            </div>
        </div>
    );
};

Insights.defaultProps = {
    className: 'container insights',
};

export default Insights;

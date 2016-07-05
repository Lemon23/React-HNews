import React from 'react';
import NewsHeader from './NewsHeader.js';
import NewsItem from './NewsItem.js';
import './NewsList.css';

/** Because NewsList is the first two components of the container, 
  so we need to introduce them. **/
export default class NewsList extends React.Component {
  getMore() {
    return (
        <div className="newsList-more">
          <a className="newsList-moreLink" href="https://news.ycombinator.com/news?p=2">More</a>
        </div>
        );
  }
  /** Introduce all components 
      Use this.props.items to get it.
      'NewsList' generates a 'NewsItem' for each of the elements.
      And 'rank' increasing. **/
  render() {
    return (
        <div className="newsList">
          <NewsHeader />
          <div className="newsList-newsItem">
            {
              (this.props.items).map(function(item, index) {
                return (
                    <NewsItem key={item.id} item={item} rank={index+1} />
                    );
              })
            }
          </div>
          {this.getMore()}
        </div>
        );
  }
}


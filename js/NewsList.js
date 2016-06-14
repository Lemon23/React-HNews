import React from 'react';
import NewsHeader from './NewsHeader.js';
import NewsItem from './NewsItem.js';
import _ from 'lodash';
/** Because NewsList is the first two components of the container, 
	so we need to introduce them. **/

var NewsList = React.createClass({
	/** More component 新增更多组件 **/
	getMore: function () {
	    return (
	      	<div className="newsList-more">
	        	<a className="newsList-moreLink" href="http://PenguinTeam.com/news?p=2">More</a>
	      	</div>
    	);
  },
  	/** Introduce all components 
  		Use this.props.items to get it.
  		'NewsList' generates a 'NewsItem' for each of the elements.
  		And 'rank' increasing. **/
	render: function() {
		return (
			<div className="newsList">
				<NewsHeader />
				<div className="newsList-items">
          			{_(this.props.items).map(function (item, index) {
            			return <NewsItem key={item.id} item={item} rank={index + 1}/>;
          			}.bind(this)).value()}
        		</div>
        		{this.getMore()}
			</div>
		);
	}
});
/** Module interface **/
module.exports = NewsList;
import React from 'react';
import $ from 'jquery';
import url from 'url';
import moment from 'moment';

/** Each information corresponds to such a 'NewsItem', 
	For communication between the parent and the child components,
	you can use the property transfer.
	The child component can use 'this.props' access to the parent component incoming attribute data.
	We just need to get Data as a property of the incoming, in the 'NewsItem' can get it.
	 **/

var NewsItem = React.createClass({
	/** CommentLink component 新增评论组件
		This only counts top-level comments.
		To get the full count, recursively get item details for this news item. **/
  	getCommentLink: function () {
		var commentText = 'discuss';
		if (this.props.item.kids && this.props.item.kids.length) {
  			commentText = this.props.item.kids.length + ' comments';
		}

	    return (
	      	<a href={'http://PenguinTeam.com/item?id=' + this.props.item.id}>{commentText}</a>
	    );
	},
	/** Domain component 新增源地址组件
		Add the source address to the end of the header. **/
	getDomain: function () {
    	return url.parse(this.props.item.url).hostname;
  	},
  	/** Subtext component 新增信息组件 包含分数、作者、时间和评论数 **/
	getSubtext: function () {
	    return (
	      	<div className="newsItem-subtext">
	        	{this.props.item.score} points by <a href={'http://PenguinTeam.com/user?id=' + this.props.item.by}>{this.props.item.by}</a> {moment.utc(this.props.item.time * 1000).fromNow()} | {this.getCommentLink()}
	      	</div>
	    );
	},
	/** Title component 新增标题组件
		This component returns a component that contains the title and address. **/
	getTitle: function () {
	    return (
	      	<div className="newsItem-title">
        		<a className="newsItem-titleLink" href={this.props.item.url}>{this.props.item.title}</a>
        		<span className="newsItem-domain">
          			({this.getDomain()})
        		</span>
      		</div>
	    );
	},
	/** Rank component 新增序号组件 **/
	getRank: function () {
	    return (
	      	<div className="newsItem-rank">
	        	{this.props.rank}.
	      	</div>
	    );
	},
	/** Vote component 新增投票组件
		Here, I did not use the ’import‘ to refer to the picture,
		but used the traditional way, show two methods. **/
	getVote: function () {
	    return (
	      <div className="newsItem-vote">
	        	<a href={'https://PenguinTeam.com/vote?for=' + this.props.item.id + '&dir=up&whence=news'}>
	          		<img src="../img/like.png" />
	        	</a>
	      </div>
	    );
	},
	/** Introduce all components **/
	render: function() {
		return (
			<div className="newsItem">
				{this.getRank()}
        		{this.getVote()}
        		<div className="newsItem-itemText">
		          {this.getTitle()}
		          {this.getSubtext()}
        		</div>
			</div>
		);
	}
});
/** Module interface **/
module.exports = NewsItem;
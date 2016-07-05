import React from 'react';
import URL from 'url';
import Moment from 'moment';
import './NewsItem.css';
import ImageGrayArrow from './like.png';

/** Each information corresponds to such a 'NewsItem', 
  For communication between the parent and the child components,
  you can use the property transfer.
  The child component can use 'this.props' access to the parent component incoming attribute data.
  We just need to get Data as a property of the incoming, in the 'NewsItem' can get it.
   **/
export default class NewsItem extends React.Component {
  /** Rank component 新增序号组件 **/
  getRank() {
    return (
        <div className="newsItem-rank">
          {this.props.rank}.
        </div>
        );
  }
  /** Vote component 新增投票组件
    Here, I did not use the ’import‘ to refer to the picture,
    but used the traditional way, show two methods. **/
  getVote() {
    return (
        <div className="newsItem-vote">
          <a href={'https://news.ycombinator.com/vote?for='+ this.props.item.id + '&dir=up&goto=news'}>
            <img src={ImageGrayArrow} width="10" />
          </a>
        </div>
        );
  }

  /** CommentLink component 新增评论组件
    This only counts top-level comments.
    To get the full count, recursively get item details for this news item. **/
  getCommentLink() {
    var commentText = 'discuss';
    if(this.props.item.kids && this.props.item.kids.length) {
      commentText = this.props.item.kids.length + ' comment';
    }

    return (
        <a href={'https://news.ycombinator.com/item?id=' + this.props.item.id}>{commentText}</a>
        );
  }

  /** Subtext component 新增信息组件 包含分数、作者、时间和评论数 **/
  getSubtext() {
    return (
        <div className="newsItem-subtext">
          {this.props.item.score} points by <a href={'https://news.ycombinator.com/user?id=' + this.props.item.by}>{this.props.item.by}</a> {Moment.utc(this.props.item.time * 1000).fromNow()} | {this.getCommentLink()}
        </div>
        );
  }

  /** Title component 新增标题组件
    This component returns a component that contains the title and address. **/
  getTitle() {
    return (
        <div className="newsItem-title">
          <a className="newsItem-titleLink" href={this.props.item.url ? this.props.item.url : 'https://news.ycombinator.com/item?id=' + this.props.item.id}>{this.props.item.title}</a>
          {
            this.props.item.url && <span className="newsItem-domain"><a href={'https://news.ycombinator.com/from?site=' + this.getDomain()}>({this.getDomain()})</a></span>
          }
        </div>
        );
  }

  /** Domain component 新增源地址组件
    Add the source address to the end of the header. **/
  getDomain() {
    return URL.parse(this.props.item.url).hostname;
  }
  /** Introduce all components **/
  render() {
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
}


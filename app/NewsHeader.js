import React from 'react';
import './NewsHeader.css';
import imageLogo from './logo.jpg';

export default class NewsHeader extends React.Component {
  /** Login component 新增登陆组件 **/
  getLogin() {
    return (
        <div className="newsHeader-login">
          <a className="newsHeader-textLink" href="https://news.ycombinator.com/login?goto=news">login</a>
        </div>
        );
  }

  /** Nav component 新增导航栏组件
    Links need to add a ‘key’ attribute, otherwise it will error **/
  getNav() {
    var navLinks = [
    {
      name: 'new',
      url: 'newest'
    },
    {
      name: 'comments',
      url: 'newcomments'
    },
    {
      name: 'show',
      url: 'show'
    },
    {
      name: 'ask',
      url: 'ask'
    },
    {
      name: 'jobs',
      url: 'jobs'
    },
    {
      name: 'submit',
      url: 'submit'
    }
    ];

    return (
        <div className="newsHeader-nav">
          {
            navLinks.map(function(navLink) {
              return (
                  <a key={navLink.url} className="newsHeader-navLink newsHeader-textLink" href={"https://news.ycombinator.com/" + navLink.url} >
                    {navLink.name}
                  </a>
                  );
            })
          }
        </div>
        );
  }

  /** Logo component 新增Logo组件
    Use import into pictures
    Need to configure the file 'webpack.config.js' first
    Note that the use of {} **/
  getLogo() {
    return (
        <div className="newsHeader-logo">
          <a href="https://news.ycombinator.com/"><img src={imageLogo} /></a>
        </div>
        );
  }
  
  /** Title component 新增标题组件 **/
  getTitle() {
    return (
        <div className="newsHeader-title">
          <a className="newsHeader-textLink" href="https://news.ycombinator.com/">Hacker News</a>
        </div>
        );
  }
  /** Introduce all components **/
  render() {
    return (
        <div className="newsHeader">
          {this.getLogo()}
          {this.getTitle()}
          {this.getNav()}
          {this.getLogin()}
        </div>
        );
  }
}


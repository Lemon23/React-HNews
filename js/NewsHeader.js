import React from 'react';
import $ from 'jquery';
import _ from 'lodash';
import imageLogo from '../img/logo.jpg';


var NewsHeader = React.createClass({
	/** Logo component 新增Logo组件
		Use import into pictures
		Need to configure the file 'webpack.config.js' first
		Note that the use of {} **/
	getLogo: function() {
		return (
			<div className="newsHeader-logo">
				<a href="#"><img src={imageLogo} /></a>
			</div>
		);
	}, 
	/** Title component 新增标题组件 **/
	getTitle: function() {
		return (
			<div className="newsHeader-title">
				<a className="newsHeader-textLink" href="#">Penguin Team</a>
			</div>
		);
	}, 
	/** Nav component 新增导航栏组件
		Links need to add a ‘key’ attribute, otherwise it will error **/
	getNav: function () {
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
		        {_(navLinks).map(function (navLink) {
		          return (
		            <a key={navLink.url} className="newsHeader-navLink newsHeader-textLink" href={'http://www.PenguinTeam.com/' + navLink.url}>
		              {navLink.name}
		            </a>
		          );
		        }).value()}
		    </div>
	    );
	}, 
	/** Login component 新增登陆组件 **/
	getLogin: function () {
	    return (
	      <div className="newsHeader-login">
	        <a className="newsHeader-textLink" href="http://www.PenguinTeam.com/login?whence=news">Login</a>
	      </div>
	    );
	},
	/** Introduce all components **/
	render: function() {
		return (
			<div className="newsHeader">
				{this.getLogo()}
				{this.getTitle()}
				{this.getNav()}
				{this.getLogin()}
			</div>
		);
	}
});

/** Module interface **/
module.exports = NewsHeader;
# React-HNews


The significance of this project is that I can learn the use of React and Webpack.

Prior to this, make sure that you have already installe `node.js`.

* install webpack

	`npm install webpack -g`
	
	Parameter `-g` indicates that we are going global to install webpack.
	
next >>>

##Setup:
1. Create the project directory structure
2. Create `package.json` file
3. Create `webpack.config.js` file
4. npm install the dependencies you'll need

	`npm install webpack-dev-server -g`
	
	`npm install react react-dom --save`
	
	`npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev`
	
	. . .

##Structure:
First of all, we have to make a component structure. We need three components.


**Component tree:**

* NewsList component (Container for all components)
	* NewsHeader component (Logo, title, Navigation etc.)
	* NewsItem component (Correspond to each information)

We need to write `NewsHeader` and `NewsItem` at first, and then import item in `NewsList`.

This logical thinking is very clear.


>Statement: a large part of the code from the [mking/react-hn](https://github.com/mking/react-hn). There are more detailed steps to explain. Thanks again!
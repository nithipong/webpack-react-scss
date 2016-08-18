import React from 'react'
import ReactDOM from 'react-dom'

import Home from './component/Home'

import style from '../scss/main.scss';



export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = '';
    }
    render() {
        return (
        	<div>
        		<Home />
        	</div>
        );
    }
}

const rootInstance = ReactDOM.render(<App /> , document.getElementById('app'));

// for use react-hot-loader

if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
        getRootInstances: function() {
            return [rootInstance];
        }
    });
}


import React from 'react'
import ReactDOM from 'react-dom'

import Home from './component/Home'



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

ReactDOM.render(<App /> , document.getElementById('app'));

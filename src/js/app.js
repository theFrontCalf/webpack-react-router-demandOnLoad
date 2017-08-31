import React,{Component} from 'react';
import {Link} from 'react-router';
const App = React.createClass({
    render() {
      return (
        <div>
          <h1>Welcome to the app!</h1>
          <ul>
            <li><Link to="/detail">详情页</Link></li>
            <li><Link to="/inbox">个人中心</Link></li>
          </ul>
          {this.props.children}
        </div>
      )
    }
  })
export default App;
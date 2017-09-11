import React, { Component } from 'react'
import './Index.css'

export default class App extends Component {
  render() {
    return (
      <h1>
        Hello, {this.props.word}
        <br/>
        <a href="/test">测试跳转</a>
      </h1>
    )
  }
}

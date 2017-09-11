import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <h1>Hello, {this.props.word}</h1>
    )
  }
}

import React, { Component } from "react"
import Version from "@rentspree/version-check"

const mockApi = "http://www.mocky.io/v2/5b9a0db2320000850013feb7"

export default class App extends Component {
  render() {
    return (
      <div>
        hello world
        <Version idleTimeout={5000} api={mockApi} bottom={5} right={5} />
      </div>
    )
  }
}

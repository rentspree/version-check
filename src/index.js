/* eslint-disable no-restricted-globals */
import React from "react"
import PropTypes from "prop-types"
import IdleTimer from "react-idle-timer"
import axios from "axios"

import { VersionTag } from "./style"

export default class Version extends React.Component {
  static propTypes = {
    api: PropTypes.string.isRequired,
    idleTimeout: PropTypes.number,
    color: PropTypes.string,
    size: PropTypes.number,
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number
  }

  constructor(props) {
    super(props)
    this.idleTimer = null
    this.onActive = this.onActive.bind(this)
    this.onIdle = this.onIdle.bind(this)
    this.state = {
      version: null
    }
  }

  callApi() {
    const { api } = this.props
    axios
      .get(api)
      .then(res => {
        if (res.status === 200) {
          this.checkVersion(res.data)
        } else {
          throw new Error("Fetch version failed")
        }
      })
      .catch(err => {
        console.error(err)
      })
  }

  checkVersion(newVersion) {
    const { version } = this.state
    if (version) {
      if (version !== newVersion) {
        if (caches) {
          // Service worker cache should be cleared with caches.delete()
          caches.keys().then(names => {
            if (names) names.forEach(name => caches.delete(name))
          })
        }

        // delete browser cache and hard reload
        location.reload(true)
      }
    }
    this.setState({ version: newVersion })
  }

  componentDidMount() {
    this.callApi()
  }

  onActive() {
    // logger.debug("User is active", new Date())
    this.callApi()
  }

  onIdle() {
    // logger.debug("User is idle", new Date())
  }

  render() {
    const { idleTimeout } = this.props
    const { version } = this.state

    return (
      <IdleTimer
        ref={ref => {
          this.idleTimer = ref
        }}
        element={document}
        onActive={this.onActive}
        onIdle={this.onIdle}
        timeout={idleTimeout}>
        <VersionTag {...this.props}>{version}</VersionTag>
      </IdleTimer>
    )
  }
}

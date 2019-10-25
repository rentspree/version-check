import React from "react"
import { shallow } from "enzyme"
import mockAxios from "axios"
import IdleTimer from "react-idle-timer"

import Version from "../index"
import { VersionTag } from "../style"

describe("<Version>", () => {
  const props = {
    api: "/version",
    idleTimeout: 10000,
    bottom: 5,
    right: 5
  }
  const wrapper = shallow(<Version {...props} />)
  describe("#callApi", () => {
    const spy = jest.spyOn(wrapper.instance(), "checkVersion")
    afterEach(() => {
      spy.mockClear()
    })
    it("should call checkVersion", async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          status: 200,
          data: "0.0.2"
        })
      )
      await wrapper.instance().callApi()
      expect(spy).toBeCalledWith("0.0.2")
    })
    it("should not call checkVersion", async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          status: 500,
          data: "0.0.2"
        })
      )
      await wrapper.instance().callApi()
      expect(spy).not.toBeCalled()
    })
  })
  describe("#checkVersion", () => {
    const mockCaches = {
      keys: jest.fn(),
      delete: jest.fn()
    }
    beforeEach(() => {
      mockCaches.keys.mockReturnValue(
        Promise.resolve(["test", "cache", "name"])
      )
      global.window.caches = mockCaches
    })
    afterEach(() => {
      wrapper.setState({ version: null })
      mockCaches.keys.mockClear()
      mockCaches.delete.mockClear()
    })
    it("should call setState of version", () => {
      const spy = jest.spyOn(wrapper, "setState")
      wrapper.setState({ version: "0.0.1" })
      wrapper.instance().checkVersion("0.0.2")
      expect(spy).toBeCalledWith({ version: "0.0.2" })
    })
    it("should call caches key if caches is exist", () => {
      wrapper.setState({ version: "0.0.1" })
      wrapper.instance().checkVersion("0.0.2")
      expect(mockCaches.keys).toBeCalled()
    })
    it("should not call caches key if caches is not exist", () => {
      global.window.caches = undefined
      wrapper.setState({ version: "0.0.1" })
      wrapper.instance().checkVersion("0.0.2")
      expect(mockCaches.keys).not.toBeCalled()
    })
  })
  describe("#componentDidMount", () => {
    it("should call callApi", () => {
      const spy = jest.spyOn(wrapper.instance(), "callApi")
      wrapper.instance().componentDidMount()
      expect(spy).toBeCalled()
    })
  })
  describe("#onActive", () => {
    it("should call callApi", () => {
      const spy = jest.spyOn(wrapper.instance(), "callApi")
      wrapper.instance().onActive()
      expect(spy).toBeCalled()
    })
  })
  describe("#render", () => {
    it("should contain <IdleTimer>", () => {
      expect(wrapper.find(IdleTimer)).toHaveLength(1)
    })
    it("should contain <VersionTag>", () => {
      expect(wrapper.find(VersionTag)).toHaveLength(1)
    })
  })
  describe("#timestampConfig", () => {
    const originalDATE = global.Date
    const fixedDate = new Date("10/24/2019")
    beforeAll(() => {
      global.Date = jest.fn(() => fixedDate)
    })
    afterAll(() => {
      global.Date = originalDATE
    })
    it("should return current date", () => {
      const timeStampParams = wrapper.instance().timestampConfig()
      expect(timeStampParams).toEqual({ params: { t: fixedDate.getTime() } })
    })
  })
})

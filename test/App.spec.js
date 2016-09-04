/* eslint-env mocha */

import { expect } from 'chai'
import React from 'react'
import Login from '../app/Login'
import { shallow, mount } from 'enzyme'

describe('<Login />', () => {
  it('should render the title', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.contains(<h1>Login Page</h1>)).to.be.true
  })
})

describe('Useless tests', () => {
  it('should do basic addition', () => {
    expect(1+3).to.equal(4)
  })
  it('should do array lengths', () => {
    expect([2,2,2,2].length).to.equal(4)
  })
})

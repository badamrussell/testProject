/* eslint-env mocha */

import { expect } from 'chai'
import React from 'react'
import Login from '../app/Login'
import { shallow, mount } from 'enzyme'

describe('<Login />', () => {
  it('should render the brand', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.contains(<h1>Login Page</h1>)).to.be.true
  })
})

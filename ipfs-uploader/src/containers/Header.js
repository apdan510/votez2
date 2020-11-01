import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import Heading  from 'grommet/components/Heading'
import Tabs  from 'grommet/components/Tabs'
import Box  from 'grommet/components/Box'
import Tab  from 'grommet/components/Tab'

import * as actions from '../actions'

class Header extends Component {
  render () {
    return (
      <Box align="center">
        <Heading align="center">IPFS Image Uploader</Heading>
        <Tabs>
          <Tab title='See'>
            <Redirect to='/see' />
          </Tab>
          <Tab title='Upload'>
            <Redirect to='/upload' />
          </Tab>
        </Tabs>
      </Box>
    )
  }
}

function mapStateToProps(state) {
  return { }
}

export default connect(mapStateToProps, actions)(Header)

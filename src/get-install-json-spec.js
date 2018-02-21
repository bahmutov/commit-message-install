'use strict'

/* eslint-env mocha */
const la = require('lazy-ass')
const is = require('check-more-types')
const snapshot = require('snap-shot-it')

describe('getInstallJson', () => {
  const getInstallJson = require('.').getInstallJson

  it('is a function', () => {
    la(is.fn(getInstallJson))
  })

  it('sets properties and all platforms', () => {
    snapshot(getInstallJson('debug', { foo: 42 }, '*'))
  })

  it('sets given platform', () => {
    snapshot(getInstallJson('debug', { foo: 42 }, 'linux'))
  })

  it('sets several modules', () => {
    snapshot(getInstallJson(['debug', 'chalk'], {}, 'linux'))
  })

  it('sets branch', () => {
    snapshot(getInstallJson(['debug', 'chalk'], {}, 'linux', 'test-branch'))
  })

  it('sets commit', () => {
    snapshot(getInstallJson(['debug', 'chalk'], {}, 'linux', null, 'b7ccfd8'))
  })
})
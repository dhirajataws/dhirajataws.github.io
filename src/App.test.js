import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import App from './App';
test('App components ', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot()
  expect(tree.type).toEqual('div');
  expect(tree.children[0].children[0].type).toEqual('img')
  expect(tree.children[0].children[1].type).toEqual('div')
})



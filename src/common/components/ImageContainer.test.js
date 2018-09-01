import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ImageContainer } from './ImageContainer';
test('ImageContainer components ', () => {
  const tree = renderer.create(<ImageContainer xs="12" />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('display', 'flex')
  expect(tree).toHaveStyleRule('position', 'relative')
  expect(tree).toHaveStyleRule('margin', '8vw')
  // expect(tree).toHaveStyleRule('width', '100%', {
  //   media: '(min-width:320px)',
  // }) TODO revisit
})
import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { FooterContainer } from './FooterContainer';

test('FooterContainer components ', () => {
    const tree = renderer.create(<FooterContainer />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('justify-content', 'stretch')
    expect(tree).toHaveStyleRule('position', 'absolute')
    expect(tree).toHaveStyleRule('width', '100%')
    expect(tree).toHaveStyleRule('top', '75%')
    expect(tree).toHaveStyleRule('height', '25%')
    expect(tree).toHaveStyleRule('background-color', 'black')
    expect(tree).toHaveStyleRule('opacity', '0.5')
    expect(tree).toHaveStyleRule('z-index', '2')
})
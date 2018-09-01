import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Container } from './Container';

test('container components ', () => {
    const tree = renderer.create(<Container />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('flex-wrap', 'wrap')
    expect(tree).toHaveStyleRule('justify-content', 'space-between')
})
import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { LogoImg, addLogoName } from './Shared';
test('LogoImg components ', () => {
    const tree = renderer.create(<LogoImg />).toJSON();
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('align-self', 'center')
    expect(tree).toHaveStyleRule('z-index', '3')
    expect(tree).toHaveStyleRule('height', '80%')
    expect(tree).toHaveStyleRule('width', '15%')
})

test('Image Container components ', () => {
    const values = { xs: "6", md: "4", sm: "6", lg: "4" }
    const withLogo = addLogoName(values);
    const testComponent = () => <div>test</div>
    const tree = renderer.create(withLogo(testComponent))
    const testInstance = tree.root;
    expect(testInstance.findByType(testComponent));
    expect(testInstance.children.length).toEqual(1);
})


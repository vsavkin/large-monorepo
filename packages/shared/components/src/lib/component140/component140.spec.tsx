import { render } from '@testing-library/react';

import Component140 from './component140';

describe('Component140', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component140 />);
    expect(baseElement).toBeTruthy();
  });
});

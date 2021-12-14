import { render } from '@testing-library/react';

import Component3 from './component3';

describe('Component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component3 />);
    expect(baseElement).toBeTruthy();
  });
});

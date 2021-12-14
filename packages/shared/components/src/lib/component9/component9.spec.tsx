import { render } from '@testing-library/react';

import Component9 from './component9';

describe('Component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component9 />);
    expect(baseElement).toBeTruthy();
  });
});

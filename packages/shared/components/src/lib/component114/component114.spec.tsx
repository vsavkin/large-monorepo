import { render } from '@testing-library/react';

import Component114 from './component114';

describe('Component114', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component114 />);
    expect(baseElement).toBeTruthy();
  });
});

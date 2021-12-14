import { render } from '@testing-library/react';

import Component82 from './component82';

describe('Component82', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component82 />);
    expect(baseElement).toBeTruthy();
  });
});

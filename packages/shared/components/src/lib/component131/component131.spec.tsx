import { render } from '@testing-library/react';

import Component131 from './component131';

describe('Component131', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component131 />);
    expect(baseElement).toBeTruthy();
  });
});

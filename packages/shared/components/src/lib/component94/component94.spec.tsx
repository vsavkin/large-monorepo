import { render } from '@testing-library/react';

import Component94 from './component94';

describe('Component94', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component94 />);
    expect(baseElement).toBeTruthy();
  });
});

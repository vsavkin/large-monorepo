import { render } from '@testing-library/react';

import Component127 from './component127';

describe('Component127', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component127 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Component70 from './component70';

describe('Component70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component70 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Component123 from './component123';

describe('Component123', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component123 />);
    expect(baseElement).toBeTruthy();
  });
});

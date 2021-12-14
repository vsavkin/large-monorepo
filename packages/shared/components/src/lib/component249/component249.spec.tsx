import { render } from '@testing-library/react';

import Component249 from './component249';

describe('Component249', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component249 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Component221 from './component221';

describe('Component221', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component221 />);
    expect(baseElement).toBeTruthy();
  });
});

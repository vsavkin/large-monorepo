import { render } from '@testing-library/react';

import Component128 from './component128';

describe('Component128', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component128 />);
    expect(baseElement).toBeTruthy();
  });
});

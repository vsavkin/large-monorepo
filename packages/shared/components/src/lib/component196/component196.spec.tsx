import { render } from '@testing-library/react';

import Component196 from './component196';

describe('Component196', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component196 />);
    expect(baseElement).toBeTruthy();
  });
});

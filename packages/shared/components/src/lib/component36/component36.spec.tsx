import { render } from '@testing-library/react';

import Component36 from './component36';

describe('Component36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component36 />);
    expect(baseElement).toBeTruthy();
  });
});

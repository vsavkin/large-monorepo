import { render } from '@testing-library/react';

import Component216 from './component216';

describe('Component216', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component216 />);
    expect(baseElement).toBeTruthy();
  });
});

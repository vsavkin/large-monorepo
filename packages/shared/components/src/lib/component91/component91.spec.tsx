import { render } from '@testing-library/react';

import Component91 from './component91';

describe('Component91', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component91 />);
    expect(baseElement).toBeTruthy();
  });
});

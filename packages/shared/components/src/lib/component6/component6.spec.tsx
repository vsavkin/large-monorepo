import { render } from '@testing-library/react';

import Component6 from './component6';

describe('Component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component6 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Component63 from './component63';

describe('Component63', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component63 />);
    expect(baseElement).toBeTruthy();
  });
});

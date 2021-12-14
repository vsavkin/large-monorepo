import { render } from '@testing-library/react';

import Component42 from './component42';

describe('Component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component42 />);
    expect(baseElement).toBeTruthy();
  });
});

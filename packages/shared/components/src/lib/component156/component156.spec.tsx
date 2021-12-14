import { render } from '@testing-library/react';

import Component156 from './component156';

describe('Component156', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component156 />);
    expect(baseElement).toBeTruthy();
  });
});

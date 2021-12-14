import { render } from '@testing-library/react';

import Component81 from './component81';

describe('Component81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component81 />);
    expect(baseElement).toBeTruthy();
  });
});

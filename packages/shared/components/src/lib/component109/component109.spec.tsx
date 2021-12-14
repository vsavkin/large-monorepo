import { render } from '@testing-library/react';

import Component109 from './component109';

describe('Component109', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component109 />);
    expect(baseElement).toBeTruthy();
  });
});

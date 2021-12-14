import { render } from '@testing-library/react';

import Component44 from './component44';

describe('Component44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component44 />);
    expect(baseElement).toBeTruthy();
  });
});

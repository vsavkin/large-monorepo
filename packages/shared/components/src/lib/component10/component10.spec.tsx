import { render } from '@testing-library/react';

import Component10 from './component10';

describe('Component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component10 />);
    expect(baseElement).toBeTruthy();
  });
});

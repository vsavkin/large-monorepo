import { render } from '@testing-library/react';

import Button71 from './button71';

describe('Button71', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button71 />);
    expect(baseElement).toBeTruthy();
  });
});

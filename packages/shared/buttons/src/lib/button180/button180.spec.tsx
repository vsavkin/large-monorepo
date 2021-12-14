import { render } from '@testing-library/react';

import Button180 from './button180';

describe('Button180', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button180 />);
    expect(baseElement).toBeTruthy();
  });
});

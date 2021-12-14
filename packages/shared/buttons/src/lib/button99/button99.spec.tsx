import { render } from '@testing-library/react';

import Button99 from './button99';

describe('Button99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button99 />);
    expect(baseElement).toBeTruthy();
  });
});

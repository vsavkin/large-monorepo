import { render } from '@testing-library/react';

import Button15 from './button15';

describe('Button15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button15 />);
    expect(baseElement).toBeTruthy();
  });
});

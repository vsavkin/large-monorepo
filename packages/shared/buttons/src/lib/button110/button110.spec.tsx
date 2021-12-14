import { render } from '@testing-library/react';

import Button110 from './button110';

describe('Button110', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button110 />);
    expect(baseElement).toBeTruthy();
  });
});

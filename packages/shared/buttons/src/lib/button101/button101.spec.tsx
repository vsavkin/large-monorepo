import { render } from '@testing-library/react';

import Button101 from './button101';

describe('Button101', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button101 />);
    expect(baseElement).toBeTruthy();
  });
});

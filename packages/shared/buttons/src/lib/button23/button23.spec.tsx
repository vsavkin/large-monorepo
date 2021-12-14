import { render } from '@testing-library/react';

import Button23 from './button23';

describe('Button23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button23 />);
    expect(baseElement).toBeTruthy();
  });
});

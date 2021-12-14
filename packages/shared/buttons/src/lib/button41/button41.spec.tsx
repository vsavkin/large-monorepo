import { render } from '@testing-library/react';

import Button41 from './button41';

describe('Button41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button41 />);
    expect(baseElement).toBeTruthy();
  });
});

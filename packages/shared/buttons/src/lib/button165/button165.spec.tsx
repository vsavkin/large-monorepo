import { render } from '@testing-library/react';

import Button165 from './button165';

describe('Button165', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button165 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Button207 from './button207';

describe('Button207', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button207 />);
    expect(baseElement).toBeTruthy();
  });
});

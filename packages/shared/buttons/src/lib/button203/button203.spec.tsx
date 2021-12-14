import { render } from '@testing-library/react';

import Button203 from './button203';

describe('Button203', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button203 />);
    expect(baseElement).toBeTruthy();
  });
});

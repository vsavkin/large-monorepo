import { render } from '@testing-library/react';

import Button159 from './button159';

describe('Button159', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button159 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Button59 from './button59';

describe('Button59', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button59 />);
    expect(baseElement).toBeTruthy();
  });
});

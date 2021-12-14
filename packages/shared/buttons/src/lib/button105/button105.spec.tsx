import { render } from '@testing-library/react';

import Button105 from './button105';

describe('Button105', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button105 />);
    expect(baseElement).toBeTruthy();
  });
});

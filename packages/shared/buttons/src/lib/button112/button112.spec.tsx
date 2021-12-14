import { render } from '@testing-library/react';

import Button112 from './button112';

describe('Button112', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button112 />);
    expect(baseElement).toBeTruthy();
  });
});

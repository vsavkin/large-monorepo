import { render } from '@testing-library/react';

import Button79 from './button79';

describe('Button79', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button79 />);
    expect(baseElement).toBeTruthy();
  });
});

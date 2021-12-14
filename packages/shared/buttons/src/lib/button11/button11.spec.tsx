import { render } from '@testing-library/react';

import Button11 from './button11';

describe('Button11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button11 />);
    expect(baseElement).toBeTruthy();
  });
});

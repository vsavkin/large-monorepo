import { render } from '@testing-library/react';

import Button158 from './button158';

describe('Button158', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button158 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Button143 from './button143';

describe('Button143', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button143 />);
    expect(baseElement).toBeTruthy();
  });
});

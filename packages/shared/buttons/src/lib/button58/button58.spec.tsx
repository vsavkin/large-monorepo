import { render } from '@testing-library/react';

import Button58 from './button58';

describe('Button58', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button58 />);
    expect(baseElement).toBeTruthy();
  });
});

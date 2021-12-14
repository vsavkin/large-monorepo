import { render } from '@testing-library/react';

import Button161 from './button161';

describe('Button161', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button161 />);
    expect(baseElement).toBeTruthy();
  });
});

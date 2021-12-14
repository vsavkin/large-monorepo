import { render } from '@testing-library/react';

import Button154 from './button154';

describe('Button154', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button154 />);
    expect(baseElement).toBeTruthy();
  });
});

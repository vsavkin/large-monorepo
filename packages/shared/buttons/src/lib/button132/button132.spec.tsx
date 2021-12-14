import { render } from '@testing-library/react';

import Button132 from './button132';

describe('Button132', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button132 />);
    expect(baseElement).toBeTruthy();
  });
});

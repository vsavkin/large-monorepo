import { render } from '@testing-library/react';

import Button45 from './button45';

describe('Button45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button45 />);
    expect(baseElement).toBeTruthy();
  });
});

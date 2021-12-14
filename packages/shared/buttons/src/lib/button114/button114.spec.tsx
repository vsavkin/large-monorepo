import { render } from '@testing-library/react';

import Button114 from './button114';

describe('Button114', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button114 />);
    expect(baseElement).toBeTruthy();
  });
});

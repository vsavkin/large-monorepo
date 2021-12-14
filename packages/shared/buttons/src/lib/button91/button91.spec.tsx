import { render } from '@testing-library/react';

import Button91 from './button91';

describe('Button91', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button91 />);
    expect(baseElement).toBeTruthy();
  });
});

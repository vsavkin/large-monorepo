import { render } from '@testing-library/react';

import Button19 from './button19';

describe('Button19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button19 />);
    expect(baseElement).toBeTruthy();
  });
});

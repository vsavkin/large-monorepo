import { render } from '@testing-library/react';

import Button116 from './button116';

describe('Button116', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button116 />);
    expect(baseElement).toBeTruthy();
  });
});

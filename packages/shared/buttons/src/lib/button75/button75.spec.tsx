import { render } from '@testing-library/react';

import Button75 from './button75';

describe('Button75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button75 />);
    expect(baseElement).toBeTruthy();
  });
});

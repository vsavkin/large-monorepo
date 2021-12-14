import { render } from '@testing-library/react';

import Button49 from './button49';

describe('Button49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button49 />);
    expect(baseElement).toBeTruthy();
  });
});

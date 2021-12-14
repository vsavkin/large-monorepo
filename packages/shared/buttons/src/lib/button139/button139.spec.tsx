import { render } from '@testing-library/react';

import Button139 from './button139';

describe('Button139', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button139 />);
    expect(baseElement).toBeTruthy();
  });
});

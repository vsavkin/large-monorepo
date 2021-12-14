import { render } from '@testing-library/react';

import Button14 from './button14';

describe('Button14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button14 />);
    expect(baseElement).toBeTruthy();
  });
});

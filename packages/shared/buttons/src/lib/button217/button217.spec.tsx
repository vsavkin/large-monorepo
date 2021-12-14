import { render } from '@testing-library/react';

import Button217 from './button217';

describe('Button217', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button217 />);
    expect(baseElement).toBeTruthy();
  });
});

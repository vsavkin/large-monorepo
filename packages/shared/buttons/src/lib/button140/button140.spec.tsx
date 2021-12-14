import { render } from '@testing-library/react';

import Button140 from './button140';

describe('Button140', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button140 />);
    expect(baseElement).toBeTruthy();
  });
});

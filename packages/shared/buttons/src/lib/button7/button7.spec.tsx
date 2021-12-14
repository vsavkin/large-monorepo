import { render } from '@testing-library/react';

import Button7 from './button7';

describe('Button7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button7 />);
    expect(baseElement).toBeTruthy();
  });
});

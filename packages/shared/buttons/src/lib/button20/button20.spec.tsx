import { render } from '@testing-library/react';

import Button20 from './button20';

describe('Button20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button20 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Button236 from './button236';

describe('Button236', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button236 />);
    expect(baseElement).toBeTruthy();
  });
});

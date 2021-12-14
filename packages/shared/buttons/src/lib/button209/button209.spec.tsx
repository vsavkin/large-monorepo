import { render } from '@testing-library/react';

import Button209 from './button209';

describe('Button209', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button209 />);
    expect(baseElement).toBeTruthy();
  });
});

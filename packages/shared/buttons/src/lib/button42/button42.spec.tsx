import { render } from '@testing-library/react';

import Button42 from './button42';

describe('Button42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button42 />);
    expect(baseElement).toBeTruthy();
  });
});

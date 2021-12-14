import { render } from '@testing-library/react';

import Button142 from './button142';

describe('Button142', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button142 />);
    expect(baseElement).toBeTruthy();
  });
});

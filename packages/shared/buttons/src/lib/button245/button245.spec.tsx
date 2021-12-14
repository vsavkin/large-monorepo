import { render } from '@testing-library/react';

import Button245 from './button245';

describe('Button245', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button245 />);
    expect(baseElement).toBeTruthy();
  });
});

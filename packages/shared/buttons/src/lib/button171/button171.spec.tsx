import { render } from '@testing-library/react';

import Button171 from './button171';

describe('Button171', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button171 />);
    expect(baseElement).toBeTruthy();
  });
});

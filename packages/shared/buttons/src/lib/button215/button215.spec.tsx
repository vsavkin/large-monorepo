import { render } from '@testing-library/react';

import Button215 from './button215';

describe('Button215', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button215 />);
    expect(baseElement).toBeTruthy();
  });
});

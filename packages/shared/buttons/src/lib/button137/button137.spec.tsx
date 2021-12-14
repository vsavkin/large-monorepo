import { render } from '@testing-library/react';

import Button137 from './button137';

describe('Button137', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button137 />);
    expect(baseElement).toBeTruthy();
  });
});

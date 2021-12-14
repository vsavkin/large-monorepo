import { render } from '@testing-library/react';

import Button224 from './button224';

describe('Button224', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button224 />);
    expect(baseElement).toBeTruthy();
  });
});

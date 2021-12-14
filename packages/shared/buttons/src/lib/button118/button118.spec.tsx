import { render } from '@testing-library/react';

import Button118 from './button118';

describe('Button118', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button118 />);
    expect(baseElement).toBeTruthy();
  });
});

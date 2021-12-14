import { render } from '@testing-library/react';

import Button190 from './button190';

describe('Button190', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button190 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Button48 from './button48';

describe('Button48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button48 />);
    expect(baseElement).toBeTruthy();
  });
});

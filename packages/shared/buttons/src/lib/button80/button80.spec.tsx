import { render } from '@testing-library/react';

import Button80 from './button80';

describe('Button80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button80 />);
    expect(baseElement).toBeTruthy();
  });
});

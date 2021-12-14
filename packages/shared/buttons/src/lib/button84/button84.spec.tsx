import { render } from '@testing-library/react';

import Button84 from './button84';

describe('Button84', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button84 />);
    expect(baseElement).toBeTruthy();
  });
});

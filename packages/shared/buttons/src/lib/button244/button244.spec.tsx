import { render } from '@testing-library/react';

import Button244 from './button244';

describe('Button244', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button244 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Button225 from './button225';

describe('Button225', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button225 />);
    expect(baseElement).toBeTruthy();
  });
});

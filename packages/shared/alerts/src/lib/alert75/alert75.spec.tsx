import { render } from '@testing-library/react';

import Alert75 from './alert75';

describe('Alert75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert75 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Alert149 from './alert149';

describe('Alert149', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert149 />);
    expect(baseElement).toBeTruthy();
  });
});

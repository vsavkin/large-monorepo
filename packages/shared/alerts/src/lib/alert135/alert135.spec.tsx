import { render } from '@testing-library/react';

import Alert135 from './alert135';

describe('Alert135', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert135 />);
    expect(baseElement).toBeTruthy();
  });
});

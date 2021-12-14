import { render } from '@testing-library/react';

import Alert2 from './alert2';

describe('Alert2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert2 />);
    expect(baseElement).toBeTruthy();
  });
});

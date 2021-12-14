import { render } from '@testing-library/react';

import Alert81 from './alert81';

describe('Alert81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert81 />);
    expect(baseElement).toBeTruthy();
  });
});

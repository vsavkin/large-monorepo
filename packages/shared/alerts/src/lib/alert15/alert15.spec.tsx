import { render } from '@testing-library/react';

import Alert15 from './alert15';

describe('Alert15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert15 />);
    expect(baseElement).toBeTruthy();
  });
});

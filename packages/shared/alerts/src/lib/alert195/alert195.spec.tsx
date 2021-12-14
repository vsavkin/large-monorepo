import { render } from '@testing-library/react';

import Alert195 from './alert195';

describe('Alert195', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert195 />);
    expect(baseElement).toBeTruthy();
  });
});

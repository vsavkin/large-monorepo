import { render } from '@testing-library/react';

import Alert51 from './alert51';

describe('Alert51', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert51 />);
    expect(baseElement).toBeTruthy();
  });
});

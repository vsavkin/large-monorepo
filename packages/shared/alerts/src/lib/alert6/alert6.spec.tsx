import { render } from '@testing-library/react';

import Alert6 from './alert6';

describe('Alert6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert6 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Alert11 from './alert11';

describe('Alert11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert11 />);
    expect(baseElement).toBeTruthy();
  });
});

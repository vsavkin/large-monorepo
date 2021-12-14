import { render } from '@testing-library/react';

import Alert230 from './alert230';

describe('Alert230', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert230 />);
    expect(baseElement).toBeTruthy();
  });
});

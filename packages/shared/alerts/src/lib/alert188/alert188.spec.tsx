import { render } from '@testing-library/react';

import Alert188 from './alert188';

describe('Alert188', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert188 />);
    expect(baseElement).toBeTruthy();
  });
});

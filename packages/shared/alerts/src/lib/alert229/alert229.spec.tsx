import { render } from '@testing-library/react';

import Alert229 from './alert229';

describe('Alert229', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert229 />);
    expect(baseElement).toBeTruthy();
  });
});

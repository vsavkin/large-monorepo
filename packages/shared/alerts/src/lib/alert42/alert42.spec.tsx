import { render } from '@testing-library/react';

import Alert42 from './alert42';

describe('Alert42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert42 />);
    expect(baseElement).toBeTruthy();
  });
});

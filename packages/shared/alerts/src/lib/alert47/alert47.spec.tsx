import { render } from '@testing-library/react';

import Alert47 from './alert47';

describe('Alert47', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert47 />);
    expect(baseElement).toBeTruthy();
  });
});

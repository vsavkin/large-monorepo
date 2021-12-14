import { render } from '@testing-library/react';

import Alert89 from './alert89';

describe('Alert89', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert89 />);
    expect(baseElement).toBeTruthy();
  });
});

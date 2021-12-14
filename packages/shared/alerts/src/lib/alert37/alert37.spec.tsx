import { render } from '@testing-library/react';

import Alert37 from './alert37';

describe('Alert37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert37 />);
    expect(baseElement).toBeTruthy();
  });
});

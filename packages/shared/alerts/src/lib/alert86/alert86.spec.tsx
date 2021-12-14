import { render } from '@testing-library/react';

import Alert86 from './alert86';

describe('Alert86', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert86 />);
    expect(baseElement).toBeTruthy();
  });
});

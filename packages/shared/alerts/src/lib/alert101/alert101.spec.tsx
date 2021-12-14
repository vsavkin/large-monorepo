import { render } from '@testing-library/react';

import Alert101 from './alert101';

describe('Alert101', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert101 />);
    expect(baseElement).toBeTruthy();
  });
});

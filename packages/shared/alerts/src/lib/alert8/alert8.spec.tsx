import { render } from '@testing-library/react';

import Alert8 from './alert8';

describe('Alert8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert8 />);
    expect(baseElement).toBeTruthy();
  });
});

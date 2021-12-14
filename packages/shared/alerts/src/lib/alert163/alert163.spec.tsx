import { render } from '@testing-library/react';

import Alert163 from './alert163';

describe('Alert163', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert163 />);
    expect(baseElement).toBeTruthy();
  });
});

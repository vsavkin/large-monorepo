import { render } from '@testing-library/react';

import Alert95 from './alert95';

describe('Alert95', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert95 />);
    expect(baseElement).toBeTruthy();
  });
});

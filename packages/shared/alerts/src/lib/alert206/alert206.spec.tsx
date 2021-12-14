import { render } from '@testing-library/react';

import Alert206 from './alert206';

describe('Alert206', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert206 />);
    expect(baseElement).toBeTruthy();
  });
});

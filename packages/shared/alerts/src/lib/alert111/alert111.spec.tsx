import { render } from '@testing-library/react';

import Alert111 from './alert111';

describe('Alert111', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert111 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Alert120 from './alert120';

describe('Alert120', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert120 />);
    expect(baseElement).toBeTruthy();
  });
});

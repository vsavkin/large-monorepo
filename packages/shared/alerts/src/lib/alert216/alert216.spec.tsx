import { render } from '@testing-library/react';

import Alert216 from './alert216';

describe('Alert216', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert216 />);
    expect(baseElement).toBeTruthy();
  });
});

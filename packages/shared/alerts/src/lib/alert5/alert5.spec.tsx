import { render } from '@testing-library/react';

import Alert5 from './alert5';

describe('Alert5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert5 />);
    expect(baseElement).toBeTruthy();
  });
});

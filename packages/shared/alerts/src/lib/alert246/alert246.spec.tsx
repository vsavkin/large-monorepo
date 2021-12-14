import { render } from '@testing-library/react';

import Alert246 from './alert246';

describe('Alert246', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert246 />);
    expect(baseElement).toBeTruthy();
  });
});

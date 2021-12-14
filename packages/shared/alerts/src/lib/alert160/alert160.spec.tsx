import { render } from '@testing-library/react';

import Alert160 from './alert160';

describe('Alert160', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert160 />);
    expect(baseElement).toBeTruthy();
  });
});

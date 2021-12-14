import { render } from '@testing-library/react';

import Alert170 from './alert170';

describe('Alert170', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert170 />);
    expect(baseElement).toBeTruthy();
  });
});

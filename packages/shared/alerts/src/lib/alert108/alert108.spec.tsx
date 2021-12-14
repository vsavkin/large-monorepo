import { render } from '@testing-library/react';

import Alert108 from './alert108';

describe('Alert108', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert108 />);
    expect(baseElement).toBeTruthy();
  });
});

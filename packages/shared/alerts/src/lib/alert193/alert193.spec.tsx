import { render } from '@testing-library/react';

import Alert193 from './alert193';

describe('Alert193', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert193 />);
    expect(baseElement).toBeTruthy();
  });
});

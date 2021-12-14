import { render } from '@testing-library/react';

import Alert48 from './alert48';

describe('Alert48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert48 />);
    expect(baseElement).toBeTruthy();
  });
});

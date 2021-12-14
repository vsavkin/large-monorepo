import { render } from '@testing-library/react';

import Alert23 from './alert23';

describe('Alert23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert23 />);
    expect(baseElement).toBeTruthy();
  });
});

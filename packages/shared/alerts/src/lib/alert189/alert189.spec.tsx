import { render } from '@testing-library/react';

import Alert189 from './alert189';

describe('Alert189', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert189 />);
    expect(baseElement).toBeTruthy();
  });
});

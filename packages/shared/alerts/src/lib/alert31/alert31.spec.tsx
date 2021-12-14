import { render } from '@testing-library/react';

import Alert31 from './alert31';

describe('Alert31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert31 />);
    expect(baseElement).toBeTruthy();
  });
});

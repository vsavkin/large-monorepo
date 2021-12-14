import { render } from '@testing-library/react';

import Alert41 from './alert41';

describe('Alert41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert41 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Alert73 from './alert73';

describe('Alert73', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert73 />);
    expect(baseElement).toBeTruthy();
  });
});

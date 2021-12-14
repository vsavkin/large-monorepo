import { render } from '@testing-library/react';

import Alert14 from './alert14';

describe('Alert14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert14 />);
    expect(baseElement).toBeTruthy();
  });
});

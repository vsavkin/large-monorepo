import { render } from '@testing-library/react';

import Alert124 from './alert124';

describe('Alert124', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert124 />);
    expect(baseElement).toBeTruthy();
  });
});

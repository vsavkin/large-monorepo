import { render } from '@testing-library/react';

import Alert221 from './alert221';

describe('Alert221', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert221 />);
    expect(baseElement).toBeTruthy();
  });
});

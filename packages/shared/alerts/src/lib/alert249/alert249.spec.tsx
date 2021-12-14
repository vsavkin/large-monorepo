import { render } from '@testing-library/react';

import Alert249 from './alert249';

describe('Alert249', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert249 />);
    expect(baseElement).toBeTruthy();
  });
});

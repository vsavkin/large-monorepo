import { render } from '@testing-library/react';

import Alert153 from './alert153';

describe('Alert153', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert153 />);
    expect(baseElement).toBeTruthy();
  });
});

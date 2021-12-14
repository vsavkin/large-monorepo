import { render } from '@testing-library/react';

import Alert212 from './alert212';

describe('Alert212', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert212 />);
    expect(baseElement).toBeTruthy();
  });
});

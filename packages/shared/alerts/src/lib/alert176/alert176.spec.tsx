import { render } from '@testing-library/react';

import Alert176 from './alert176';

describe('Alert176', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert176 />);
    expect(baseElement).toBeTruthy();
  });
});

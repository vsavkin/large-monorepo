import { render } from '@testing-library/react';

import Alert44 from './alert44';

describe('Alert44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert44 />);
    expect(baseElement).toBeTruthy();
  });
});

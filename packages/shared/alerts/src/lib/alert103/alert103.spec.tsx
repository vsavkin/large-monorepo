import { render } from '@testing-library/react';

import Alert103 from './alert103';

describe('Alert103', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert103 />);
    expect(baseElement).toBeTruthy();
  });
});

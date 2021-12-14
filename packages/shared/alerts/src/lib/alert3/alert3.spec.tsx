import { render } from '@testing-library/react';

import Alert3 from './alert3';

describe('Alert3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert3 />);
    expect(baseElement).toBeTruthy();
  });
});

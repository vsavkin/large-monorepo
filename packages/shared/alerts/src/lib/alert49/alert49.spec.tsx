import { render } from '@testing-library/react';

import Alert49 from './alert49';

describe('Alert49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert49 />);
    expect(baseElement).toBeTruthy();
  });
});

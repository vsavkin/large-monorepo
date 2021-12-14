import { render } from '@testing-library/react';

import Alert105 from './alert105';

describe('Alert105', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert105 />);
    expect(baseElement).toBeTruthy();
  });
});

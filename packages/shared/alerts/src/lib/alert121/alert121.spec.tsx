import { render } from '@testing-library/react';

import Alert121 from './alert121';

describe('Alert121', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert121 />);
    expect(baseElement).toBeTruthy();
  });
});

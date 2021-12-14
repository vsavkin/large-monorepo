import { render } from '@testing-library/react';

import Alert139 from './alert139';

describe('Alert139', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert139 />);
    expect(baseElement).toBeTruthy();
  });
});

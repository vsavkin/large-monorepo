import { render } from '@testing-library/react';

import Alert175 from './alert175';

describe('Alert175', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert175 />);
    expect(baseElement).toBeTruthy();
  });
});

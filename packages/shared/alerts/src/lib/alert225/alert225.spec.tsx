import { render } from '@testing-library/react';

import Alert225 from './alert225';

describe('Alert225', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert225 />);
    expect(baseElement).toBeTruthy();
  });
});

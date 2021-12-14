import { render } from '@testing-library/react';

import Alert1 from './alert1';

describe('Alert1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert1 />);
    expect(baseElement).toBeTruthy();
  });
});

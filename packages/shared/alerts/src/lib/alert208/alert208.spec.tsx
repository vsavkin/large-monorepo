import { render } from '@testing-library/react';

import Alert208 from './alert208';

describe('Alert208', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert208 />);
    expect(baseElement).toBeTruthy();
  });
});

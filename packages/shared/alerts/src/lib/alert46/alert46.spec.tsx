import { render } from '@testing-library/react';

import Alert46 from './alert46';

describe('Alert46', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert46 />);
    expect(baseElement).toBeTruthy();
  });
});

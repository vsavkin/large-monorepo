import { render } from '@testing-library/react';

import Alert58 from './alert58';

describe('Alert58', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert58 />);
    expect(baseElement).toBeTruthy();
  });
});

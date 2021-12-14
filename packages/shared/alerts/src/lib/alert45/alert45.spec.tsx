import { render } from '@testing-library/react';

import Alert45 from './alert45';

describe('Alert45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert45 />);
    expect(baseElement).toBeTruthy();
  });
});

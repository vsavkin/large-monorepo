import { render } from '@testing-library/react';

import Alert165 from './alert165';

describe('Alert165', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert165 />);
    expect(baseElement).toBeTruthy();
  });
});

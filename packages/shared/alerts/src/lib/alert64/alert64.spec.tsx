import { render } from '@testing-library/react';

import Alert64 from './alert64';

describe('Alert64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert64 />);
    expect(baseElement).toBeTruthy();
  });
});

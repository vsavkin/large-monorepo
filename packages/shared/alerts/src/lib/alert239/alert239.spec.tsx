import { render } from '@testing-library/react';

import Alert239 from './alert239';

describe('Alert239', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert239 />);
    expect(baseElement).toBeTruthy();
  });
});

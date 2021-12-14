import { render } from '@testing-library/react';

import Alert62 from './alert62';

describe('Alert62', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert62 />);
    expect(baseElement).toBeTruthy();
  });
});

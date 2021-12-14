import { render } from '@testing-library/react';

import Alert245 from './alert245';

describe('Alert245', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert245 />);
    expect(baseElement).toBeTruthy();
  });
});

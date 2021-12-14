import { render } from '@testing-library/react';

import Alert117 from './alert117';

describe('Alert117', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert117 />);
    expect(baseElement).toBeTruthy();
  });
});

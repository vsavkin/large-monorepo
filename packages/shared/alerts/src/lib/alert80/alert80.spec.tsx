import { render } from '@testing-library/react';

import Alert80 from './alert80';

describe('Alert80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert80 />);
    expect(baseElement).toBeTruthy();
  });
});

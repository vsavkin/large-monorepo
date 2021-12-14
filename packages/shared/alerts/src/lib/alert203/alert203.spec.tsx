import { render } from '@testing-library/react';

import Alert203 from './alert203';

describe('Alert203', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert203 />);
    expect(baseElement).toBeTruthy();
  });
});

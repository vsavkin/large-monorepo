import { render } from '@testing-library/react';

import Alert61 from './alert61';

describe('Alert61', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert61 />);
    expect(baseElement).toBeTruthy();
  });
});

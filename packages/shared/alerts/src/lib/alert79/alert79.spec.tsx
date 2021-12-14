import { render } from '@testing-library/react';

import Alert79 from './alert79';

describe('Alert79', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert79 />);
    expect(baseElement).toBeTruthy();
  });
});

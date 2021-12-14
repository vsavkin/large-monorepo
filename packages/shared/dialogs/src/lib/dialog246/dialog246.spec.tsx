import { render } from '@testing-library/react';

import Dialog246 from './dialog246';

describe('Dialog246', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog246 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Dialog128 from './dialog128';

describe('Dialog128', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog128 />);
    expect(baseElement).toBeTruthy();
  });
});

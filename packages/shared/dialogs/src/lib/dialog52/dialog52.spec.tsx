import { render } from '@testing-library/react';

import Dialog52 from './dialog52';

describe('Dialog52', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog52 />);
    expect(baseElement).toBeTruthy();
  });
});

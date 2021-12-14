import { render } from '@testing-library/react';

import Dialog242 from './dialog242';

describe('Dialog242', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog242 />);
    expect(baseElement).toBeTruthy();
  });
});

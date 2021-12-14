import { render } from '@testing-library/react';

import Dialog234 from './dialog234';

describe('Dialog234', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog234 />);
    expect(baseElement).toBeTruthy();
  });
});

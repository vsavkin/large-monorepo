import { render } from '@testing-library/react';

import Dialog149 from './dialog149';

describe('Dialog149', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog149 />);
    expect(baseElement).toBeTruthy();
  });
});

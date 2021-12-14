import { render } from '@testing-library/react';

import Dialog160 from './dialog160';

describe('Dialog160', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog160 />);
    expect(baseElement).toBeTruthy();
  });
});

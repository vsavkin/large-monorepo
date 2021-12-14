import { render } from '@testing-library/react';

import Dialog159 from './dialog159';

describe('Dialog159', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog159 />);
    expect(baseElement).toBeTruthy();
  });
});

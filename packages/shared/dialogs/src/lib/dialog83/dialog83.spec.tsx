import { render } from '@testing-library/react';

import Dialog83 from './dialog83';

describe('Dialog83', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog83 />);
    expect(baseElement).toBeTruthy();
  });
});

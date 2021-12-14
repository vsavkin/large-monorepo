import { render } from '@testing-library/react';

import Dialog94 from './dialog94';

describe('Dialog94', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog94 />);
    expect(baseElement).toBeTruthy();
  });
});

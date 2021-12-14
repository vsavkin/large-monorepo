import { render } from '@testing-library/react';

import Dialog105 from './dialog105';

describe('Dialog105', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog105 />);
    expect(baseElement).toBeTruthy();
  });
});

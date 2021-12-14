import { render } from '@testing-library/react';

import Dialog82 from './dialog82';

describe('Dialog82', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog82 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Dialog41 from './dialog41';

describe('Dialog41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog41 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Dialog31 from './dialog31';

describe('Dialog31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog31 />);
    expect(baseElement).toBeTruthy();
  });
});

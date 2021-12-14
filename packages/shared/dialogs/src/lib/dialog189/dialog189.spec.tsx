import { render } from '@testing-library/react';

import Dialog189 from './dialog189';

describe('Dialog189', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog189 />);
    expect(baseElement).toBeTruthy();
  });
});

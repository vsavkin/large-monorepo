import { render } from '@testing-library/react';

import Dialog86 from './dialog86';

describe('Dialog86', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog86 />);
    expect(baseElement).toBeTruthy();
  });
});

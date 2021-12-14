import { render } from '@testing-library/react';

import Dialog111 from './dialog111';

describe('Dialog111', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog111 />);
    expect(baseElement).toBeTruthy();
  });
});

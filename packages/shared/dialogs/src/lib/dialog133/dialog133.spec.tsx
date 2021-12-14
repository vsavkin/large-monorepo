import { render } from '@testing-library/react';

import Dialog133 from './dialog133';

describe('Dialog133', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog133 />);
    expect(baseElement).toBeTruthy();
  });
});

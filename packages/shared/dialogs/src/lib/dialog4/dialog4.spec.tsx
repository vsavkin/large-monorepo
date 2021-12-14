import { render } from '@testing-library/react';

import Dialog4 from './dialog4';

describe('Dialog4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog4 />);
    expect(baseElement).toBeTruthy();
  });
});

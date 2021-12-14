import { render } from '@testing-library/react';

import Dialog141 from './dialog141';

describe('Dialog141', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog141 />);
    expect(baseElement).toBeTruthy();
  });
});

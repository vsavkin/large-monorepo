import { render } from '@testing-library/react';

import Dialog71 from './dialog71';

describe('Dialog71', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog71 />);
    expect(baseElement).toBeTruthy();
  });
});

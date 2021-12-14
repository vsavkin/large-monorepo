import { render } from '@testing-library/react';

import Dialog44 from './dialog44';

describe('Dialog44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog44 />);
    expect(baseElement).toBeTruthy();
  });
});

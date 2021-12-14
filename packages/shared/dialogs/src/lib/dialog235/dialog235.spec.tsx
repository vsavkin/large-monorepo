import { render } from '@testing-library/react';

import Dialog235 from './dialog235';

describe('Dialog235', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog235 />);
    expect(baseElement).toBeTruthy();
  });
});

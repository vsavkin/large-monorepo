import { render } from '@testing-library/react';

import Dialog186 from './dialog186';

describe('Dialog186', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog186 />);
    expect(baseElement).toBeTruthy();
  });
});

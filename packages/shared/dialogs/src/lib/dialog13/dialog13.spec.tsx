import { render } from '@testing-library/react';

import Dialog13 from './dialog13';

describe('Dialog13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog13 />);
    expect(baseElement).toBeTruthy();
  });
});

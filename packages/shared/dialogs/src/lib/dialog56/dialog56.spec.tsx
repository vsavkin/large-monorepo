import { render } from '@testing-library/react';

import Dialog56 from './dialog56';

describe('Dialog56', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog56 />);
    expect(baseElement).toBeTruthy();
  });
});

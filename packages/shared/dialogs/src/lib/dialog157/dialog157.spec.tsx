import { render } from '@testing-library/react';

import Dialog157 from './dialog157';

describe('Dialog157', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog157 />);
    expect(baseElement).toBeTruthy();
  });
});

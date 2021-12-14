import { render } from '@testing-library/react';

import Dialog147 from './dialog147';

describe('Dialog147', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog147 />);
    expect(baseElement).toBeTruthy();
  });
});

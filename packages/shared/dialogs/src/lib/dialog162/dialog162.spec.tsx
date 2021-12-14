import { render } from '@testing-library/react';

import Dialog162 from './dialog162';

describe('Dialog162', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog162 />);
    expect(baseElement).toBeTruthy();
  });
});

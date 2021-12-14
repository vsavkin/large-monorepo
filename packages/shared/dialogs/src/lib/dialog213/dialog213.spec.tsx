import { render } from '@testing-library/react';

import Dialog213 from './dialog213';

describe('Dialog213', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog213 />);
    expect(baseElement).toBeTruthy();
  });
});

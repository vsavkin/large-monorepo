import { render } from '@testing-library/react';

import Dialog78 from './dialog78';

describe('Dialog78', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog78 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Dialog131 from './dialog131';

describe('Dialog131', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog131 />);
    expect(baseElement).toBeTruthy();
  });
});

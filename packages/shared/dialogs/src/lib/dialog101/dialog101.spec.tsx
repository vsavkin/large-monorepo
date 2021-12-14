import { render } from '@testing-library/react';

import Dialog101 from './dialog101';

describe('Dialog101', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog101 />);
    expect(baseElement).toBeTruthy();
  });
});

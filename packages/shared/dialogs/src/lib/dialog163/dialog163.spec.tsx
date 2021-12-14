import { render } from '@testing-library/react';

import Dialog163 from './dialog163';

describe('Dialog163', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog163 />);
    expect(baseElement).toBeTruthy();
  });
});

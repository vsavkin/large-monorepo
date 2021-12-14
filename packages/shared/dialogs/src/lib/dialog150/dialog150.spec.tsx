import { render } from '@testing-library/react';

import Dialog150 from './dialog150';

describe('Dialog150', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog150 />);
    expect(baseElement).toBeTruthy();
  });
});

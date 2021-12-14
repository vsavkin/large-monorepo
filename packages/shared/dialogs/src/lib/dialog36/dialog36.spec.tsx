import { render } from '@testing-library/react';

import Dialog36 from './dialog36';

describe('Dialog36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog36 />);
    expect(baseElement).toBeTruthy();
  });
});

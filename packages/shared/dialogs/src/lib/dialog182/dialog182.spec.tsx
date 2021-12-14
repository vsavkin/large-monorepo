import { render } from '@testing-library/react';

import Dialog182 from './dialog182';

describe('Dialog182', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog182 />);
    expect(baseElement).toBeTruthy();
  });
});

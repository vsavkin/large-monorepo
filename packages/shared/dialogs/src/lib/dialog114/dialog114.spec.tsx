import { render } from '@testing-library/react';

import Dialog114 from './dialog114';

describe('Dialog114', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog114 />);
    expect(baseElement).toBeTruthy();
  });
});

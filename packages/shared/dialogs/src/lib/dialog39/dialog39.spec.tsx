import { render } from '@testing-library/react';

import Dialog39 from './dialog39';

describe('Dialog39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog39 />);
    expect(baseElement).toBeTruthy();
  });
});

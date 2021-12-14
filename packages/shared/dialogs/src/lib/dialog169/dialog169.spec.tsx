import { render } from '@testing-library/react';

import Dialog169 from './dialog169';

describe('Dialog169', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog169 />);
    expect(baseElement).toBeTruthy();
  });
});

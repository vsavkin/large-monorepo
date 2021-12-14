import { render } from '@testing-library/react';

import Dialog90 from './dialog90';

describe('Dialog90', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog90 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Dialog100 from './dialog100';

describe('Dialog100', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog100 />);
    expect(baseElement).toBeTruthy();
  });
});

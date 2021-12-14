import { render } from '@testing-library/react';

import Dialog6 from './dialog6';

describe('Dialog6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog6 />);
    expect(baseElement).toBeTruthy();
  });
});

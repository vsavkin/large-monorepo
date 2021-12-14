import { render } from '@testing-library/react';

import Dialog55 from './dialog55';

describe('Dialog55', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog55 />);
    expect(baseElement).toBeTruthy();
  });
});

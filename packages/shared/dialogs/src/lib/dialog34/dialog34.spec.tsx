import { render } from '@testing-library/react';

import Dialog34 from './dialog34';

describe('Dialog34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog34 />);
    expect(baseElement).toBeTruthy();
  });
});

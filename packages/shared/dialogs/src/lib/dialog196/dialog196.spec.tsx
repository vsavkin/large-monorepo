import { render } from '@testing-library/react';

import Dialog196 from './dialog196';

describe('Dialog196', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog196 />);
    expect(baseElement).toBeTruthy();
  });
});

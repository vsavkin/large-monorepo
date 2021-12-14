import { render } from '@testing-library/react';

import Dialog18 from './dialog18';

describe('Dialog18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog18 />);
    expect(baseElement).toBeTruthy();
  });
});

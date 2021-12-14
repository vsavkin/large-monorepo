import { render } from '@testing-library/react';

import Dialog212 from './dialog212';

describe('Dialog212', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog212 />);
    expect(baseElement).toBeTruthy();
  });
});

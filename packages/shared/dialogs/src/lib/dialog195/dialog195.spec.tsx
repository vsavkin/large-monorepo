import { render } from '@testing-library/react';

import Dialog195 from './dialog195';

describe('Dialog195', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog195 />);
    expect(baseElement).toBeTruthy();
  });
});

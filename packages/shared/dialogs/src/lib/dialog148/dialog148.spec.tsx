import { render } from '@testing-library/react';

import Dialog148 from './dialog148';

describe('Dialog148', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog148 />);
    expect(baseElement).toBeTruthy();
  });
});

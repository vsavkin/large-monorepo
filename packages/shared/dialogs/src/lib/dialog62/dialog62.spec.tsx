import { render } from '@testing-library/react';

import Dialog62 from './dialog62';

describe('Dialog62', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog62 />);
    expect(baseElement).toBeTruthy();
  });
});

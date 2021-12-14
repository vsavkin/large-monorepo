import { render } from '@testing-library/react';

import Dialog7 from './dialog7';

describe('Dialog7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog7 />);
    expect(baseElement).toBeTruthy();
  });
});

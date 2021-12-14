import { render } from '@testing-library/react';

import Dialog63 from './dialog63';

describe('Dialog63', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog63 />);
    expect(baseElement).toBeTruthy();
  });
});

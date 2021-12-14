import { render } from '@testing-library/react';

import Dialog43 from './dialog43';

describe('Dialog43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog43 />);
    expect(baseElement).toBeTruthy();
  });
});

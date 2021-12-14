import { render } from '@testing-library/react';

import Dialog47 from './dialog47';

describe('Dialog47', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog47 />);
    expect(baseElement).toBeTruthy();
  });
});

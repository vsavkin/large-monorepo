import { render } from '@testing-library/react';

import Dialog179 from './dialog179';

describe('Dialog179', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog179 />);
    expect(baseElement).toBeTruthy();
  });
});

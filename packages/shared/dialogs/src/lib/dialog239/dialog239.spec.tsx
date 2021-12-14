import { render } from '@testing-library/react';

import Dialog239 from './dialog239';

describe('Dialog239', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog239 />);
    expect(baseElement).toBeTruthy();
  });
});

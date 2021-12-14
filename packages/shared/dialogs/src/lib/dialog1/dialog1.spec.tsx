import { render } from '@testing-library/react';

import Dialog1 from './dialog1';

describe('Dialog1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog1 />);
    expect(baseElement).toBeTruthy();
  });
});

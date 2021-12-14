import { render } from '@testing-library/react';

import Dialog200 from './dialog200';

describe('Dialog200', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog200 />);
    expect(baseElement).toBeTruthy();
  });
});

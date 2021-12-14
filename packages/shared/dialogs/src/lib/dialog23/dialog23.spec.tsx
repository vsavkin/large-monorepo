import { render } from '@testing-library/react';

import Dialog23 from './dialog23';

describe('Dialog23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog23 />);
    expect(baseElement).toBeTruthy();
  });
});

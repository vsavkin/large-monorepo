import { render } from '@testing-library/react';

import Dialog84 from './dialog84';

describe('Dialog84', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog84 />);
    expect(baseElement).toBeTruthy();
  });
});

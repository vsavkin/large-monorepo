import { render } from '@testing-library/react';

import Dialog38 from './dialog38';

describe('Dialog38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog38 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Dialog113 from './dialog113';

describe('Dialog113', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog113 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Dialog176 from './dialog176';

describe('Dialog176', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog176 />);
    expect(baseElement).toBeTruthy();
  });
});

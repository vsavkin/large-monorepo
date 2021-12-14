import { render } from '@testing-library/react';

import Dialog59 from './dialog59';

describe('Dialog59', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog59 />);
    expect(baseElement).toBeTruthy();
  });
});

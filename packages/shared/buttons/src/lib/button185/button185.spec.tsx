import { render } from '@testing-library/react';

import Button185 from './button185';

describe('Button185', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button185 />);
    expect(baseElement).toBeTruthy();
  });
});

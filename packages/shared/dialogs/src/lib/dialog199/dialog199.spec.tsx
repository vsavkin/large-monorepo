import { render } from '@testing-library/react';

import Dialog199 from './dialog199';

describe('Dialog199', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog199 />);
    expect(baseElement).toBeTruthy();
  });
});

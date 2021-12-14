import { render } from '@testing-library/react';

import Dialog136 from './dialog136';

describe('Dialog136', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog136 />);
    expect(baseElement).toBeTruthy();
  });
});

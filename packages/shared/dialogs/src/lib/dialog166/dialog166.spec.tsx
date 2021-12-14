import { render } from '@testing-library/react';

import Dialog166 from './dialog166';

describe('Dialog166', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog166 />);
    expect(baseElement).toBeTruthy();
  });
});

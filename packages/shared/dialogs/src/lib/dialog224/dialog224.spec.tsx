import { render } from '@testing-library/react';

import Dialog224 from './dialog224';

describe('Dialog224', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog224 />);
    expect(baseElement).toBeTruthy();
  });
});

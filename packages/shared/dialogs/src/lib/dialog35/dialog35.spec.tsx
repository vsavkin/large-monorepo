import { render } from '@testing-library/react';

import Dialog35 from './dialog35';

describe('Dialog35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog35 />);
    expect(baseElement).toBeTruthy();
  });
});

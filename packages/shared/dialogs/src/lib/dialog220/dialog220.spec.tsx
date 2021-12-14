import { render } from '@testing-library/react';

import Dialog220 from './dialog220';

describe('Dialog220', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog220 />);
    expect(baseElement).toBeTruthy();
  });
});

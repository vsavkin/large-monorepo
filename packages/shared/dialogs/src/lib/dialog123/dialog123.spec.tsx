import { render } from '@testing-library/react';

import Dialog123 from './dialog123';

describe('Dialog123', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog123 />);
    expect(baseElement).toBeTruthy();
  });
});

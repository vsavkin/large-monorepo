import { render } from '@testing-library/react';

import Dialog187 from './dialog187';

describe('Dialog187', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog187 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Dialog91 from './dialog91';

describe('Dialog91', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog91 />);
    expect(baseElement).toBeTruthy();
  });
});

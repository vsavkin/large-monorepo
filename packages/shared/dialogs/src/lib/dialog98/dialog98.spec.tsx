import { render } from '@testing-library/react';

import Dialog98 from './dialog98';

describe('Dialog98', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog98 />);
    expect(baseElement).toBeTruthy();
  });
});

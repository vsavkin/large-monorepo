import { render } from '@testing-library/react';

import Dialog138 from './dialog138';

describe('Dialog138', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog138 />);
    expect(baseElement).toBeTruthy();
  });
});

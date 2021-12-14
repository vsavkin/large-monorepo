import { render } from '@testing-library/react';

import Alert134 from './alert134';

describe('Alert134', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert134 />);
    expect(baseElement).toBeTruthy();
  });
});

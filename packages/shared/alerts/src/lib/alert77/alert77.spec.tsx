import { render } from '@testing-library/react';

import Alert77 from './alert77';

describe('Alert77', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert77 />);
    expect(baseElement).toBeTruthy();
  });
});

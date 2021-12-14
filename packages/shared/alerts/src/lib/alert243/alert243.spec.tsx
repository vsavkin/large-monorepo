import { render } from '@testing-library/react';

import Alert243 from './alert243';

describe('Alert243', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert243 />);
    expect(baseElement).toBeTruthy();
  });
});

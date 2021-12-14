import { render } from '@testing-library/react';

import Alert196 from './alert196';

describe('Alert196', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert196 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Alert24 from './alert24';

describe('Alert24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert24 />);
    expect(baseElement).toBeTruthy();
  });
});

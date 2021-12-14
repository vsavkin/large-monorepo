import { render } from '@testing-library/react';

import Alert18 from './alert18';

describe('Alert18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert18 />);
    expect(baseElement).toBeTruthy();
  });
});

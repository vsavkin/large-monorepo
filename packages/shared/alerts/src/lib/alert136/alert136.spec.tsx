import { render } from '@testing-library/react';

import Alert136 from './alert136';

describe('Alert136', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert136 />);
    expect(baseElement).toBeTruthy();
  });
});

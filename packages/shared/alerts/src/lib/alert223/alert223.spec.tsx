import { render } from '@testing-library/react';

import Alert223 from './alert223';

describe('Alert223', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert223 />);
    expect(baseElement).toBeTruthy();
  });
});

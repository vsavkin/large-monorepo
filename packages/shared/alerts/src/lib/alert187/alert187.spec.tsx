import { render } from '@testing-library/react';

import Alert187 from './alert187';

describe('Alert187', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert187 />);
    expect(baseElement).toBeTruthy();
  });
});

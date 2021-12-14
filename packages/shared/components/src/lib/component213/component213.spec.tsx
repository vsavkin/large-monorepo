import { render } from '@testing-library/react';

import Component213 from './component213';

describe('Component213', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component213 />);
    expect(baseElement).toBeTruthy();
  });
});

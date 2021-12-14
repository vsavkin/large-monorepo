import { render } from '@testing-library/react';

import Component239 from './component239';

describe('Component239', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component239 />);
    expect(baseElement).toBeTruthy();
  });
});

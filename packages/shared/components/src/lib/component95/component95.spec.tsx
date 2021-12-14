import { render } from '@testing-library/react';

import Component95 from './component95';

describe('Component95', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component95 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Component69 from './component69';

describe('Component69', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component69 />);
    expect(baseElement).toBeTruthy();
  });
});

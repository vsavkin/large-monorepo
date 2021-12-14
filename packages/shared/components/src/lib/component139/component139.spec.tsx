import { render } from '@testing-library/react';

import Component139 from './component139';

describe('Component139', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component139 />);
    expect(baseElement).toBeTruthy();
  });
});

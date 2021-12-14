import { render } from '@testing-library/react';

import Component212 from './component212';

describe('Component212', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component212 />);
    expect(baseElement).toBeTruthy();
  });
});

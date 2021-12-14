import { render } from '@testing-library/react';

import Component155 from './component155';

describe('Component155', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component155 />);
    expect(baseElement).toBeTruthy();
  });
});

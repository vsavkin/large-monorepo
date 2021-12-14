import { render } from '@testing-library/react';

import Component200 from './component200';

describe('Component200', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component200 />);
    expect(baseElement).toBeTruthy();
  });
});

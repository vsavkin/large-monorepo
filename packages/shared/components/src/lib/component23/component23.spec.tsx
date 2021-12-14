import { render } from '@testing-library/react';

import Component23 from './component23';

describe('Component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component23 />);
    expect(baseElement).toBeTruthy();
  });
});

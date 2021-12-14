import { render } from '@testing-library/react';

import Component129 from './component129';

describe('Component129', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component129 />);
    expect(baseElement).toBeTruthy();
  });
});

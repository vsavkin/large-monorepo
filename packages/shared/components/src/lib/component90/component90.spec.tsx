import { render } from '@testing-library/react';

import Component90 from './component90';

describe('Component90', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component90 />);
    expect(baseElement).toBeTruthy();
  });
});

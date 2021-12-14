import { render } from '@testing-library/react';

import Component134 from './component134';

describe('Component134', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component134 />);
    expect(baseElement).toBeTruthy();
  });
});

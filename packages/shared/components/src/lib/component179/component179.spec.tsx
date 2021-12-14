import { render } from '@testing-library/react';

import Component179 from './component179';

describe('Component179', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component179 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Component113 from './component113';

describe('Component113', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component113 />);
    expect(baseElement).toBeTruthy();
  });
});

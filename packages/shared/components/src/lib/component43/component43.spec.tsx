import { render } from '@testing-library/react';

import Component43 from './component43';

describe('Component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component43 />);
    expect(baseElement).toBeTruthy();
  });
});

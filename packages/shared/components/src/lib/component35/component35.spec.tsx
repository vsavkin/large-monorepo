import { render } from '@testing-library/react';

import Component35 from './component35';

describe('Component35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component35 />);
    expect(baseElement).toBeTruthy();
  });
});

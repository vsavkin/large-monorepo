import { render } from '@testing-library/react';

import Component201 from './component201';

describe('Component201', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component201 />);
    expect(baseElement).toBeTruthy();
  });
});

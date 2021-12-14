import { render } from '@testing-library/react';

import Component186 from './component186';

describe('Component186', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component186 />);
    expect(baseElement).toBeTruthy();
  });
});

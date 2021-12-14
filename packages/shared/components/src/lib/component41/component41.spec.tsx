import { render } from '@testing-library/react';

import Component41 from './component41';

describe('Component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component41 />);
    expect(baseElement).toBeTruthy();
  });
});

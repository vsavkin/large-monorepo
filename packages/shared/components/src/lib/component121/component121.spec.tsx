import { render } from '@testing-library/react';

import Component121 from './component121';

describe('Component121', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component121 />);
    expect(baseElement).toBeTruthy();
  });
});

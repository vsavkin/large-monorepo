import { render } from '@testing-library/react';

import Component132 from './component132';

describe('Component132', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component132 />);
    expect(baseElement).toBeTruthy();
  });
});

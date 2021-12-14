import { render } from '@testing-library/react';

import Component103 from './component103';

describe('Component103', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component103 />);
    expect(baseElement).toBeTruthy();
  });
});

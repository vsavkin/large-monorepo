import { render } from '@testing-library/react';

import Component112 from './component112';

describe('Component112', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component112 />);
    expect(baseElement).toBeTruthy();
  });
});

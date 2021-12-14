import { render } from '@testing-library/react';

import Component71 from './component71';

describe('Component71', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component71 />);
    expect(baseElement).toBeTruthy();
  });
});

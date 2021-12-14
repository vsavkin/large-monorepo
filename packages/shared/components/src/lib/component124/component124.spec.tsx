import { render } from '@testing-library/react';

import Component124 from './component124';

describe('Component124', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component124 />);
    expect(baseElement).toBeTruthy();
  });
});

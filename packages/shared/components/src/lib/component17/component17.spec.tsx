import { render } from '@testing-library/react';

import Component17 from './component17';

describe('Component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component17 />);
    expect(baseElement).toBeTruthy();
  });
});

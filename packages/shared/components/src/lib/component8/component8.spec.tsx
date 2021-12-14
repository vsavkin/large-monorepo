import { render } from '@testing-library/react';

import Component8 from './component8';

describe('Component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component8 />);
    expect(baseElement).toBeTruthy();
  });
});

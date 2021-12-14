import { render } from '@testing-library/react';

import Component111 from './component111';

describe('Component111', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component111 />);
    expect(baseElement).toBeTruthy();
  });
});

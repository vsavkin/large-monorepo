import { render } from '@testing-library/react';

import Component104 from './component104';

describe('Component104', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component104 />);
    expect(baseElement).toBeTruthy();
  });
});

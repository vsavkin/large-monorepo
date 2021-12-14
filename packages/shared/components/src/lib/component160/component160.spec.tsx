import { render } from '@testing-library/react';

import Component160 from './component160';

describe('Component160', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component160 />);
    expect(baseElement).toBeTruthy();
  });
});

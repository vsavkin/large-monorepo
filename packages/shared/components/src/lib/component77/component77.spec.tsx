import { render } from '@testing-library/react';

import Component77 from './component77';

describe('Component77', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component77 />);
    expect(baseElement).toBeTruthy();
  });
});

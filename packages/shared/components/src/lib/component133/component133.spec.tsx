import { render } from '@testing-library/react';

import Component133 from './component133';

describe('Component133', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component133 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Component18 from './component18';

describe('Component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component18 />);
    expect(baseElement).toBeTruthy();
  });
});

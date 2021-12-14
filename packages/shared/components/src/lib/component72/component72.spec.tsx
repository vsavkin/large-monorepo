import { render } from '@testing-library/react';

import Component72 from './component72';

describe('Component72', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component72 />);
    expect(baseElement).toBeTruthy();
  });
});

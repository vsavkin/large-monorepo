import { render } from '@testing-library/react';

import Component209 from './component209';

describe('Component209', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component209 />);
    expect(baseElement).toBeTruthy();
  });
});

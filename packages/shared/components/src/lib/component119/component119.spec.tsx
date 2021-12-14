import { render } from '@testing-library/react';

import Component119 from './component119';

describe('Component119', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component119 />);
    expect(baseElement).toBeTruthy();
  });
});

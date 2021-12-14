import { render } from '@testing-library/react';

import Button119 from './button119';

describe('Button119', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button119 />);
    expect(baseElement).toBeTruthy();
  });
});

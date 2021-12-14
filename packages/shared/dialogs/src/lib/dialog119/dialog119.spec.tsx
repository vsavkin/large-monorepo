import { render } from '@testing-library/react';

import Dialog119 from './dialog119';

describe('Dialog119', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog119 />);
    expect(baseElement).toBeTruthy();
  });
});

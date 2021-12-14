import { render } from '@testing-library/react';

import Component83 from './component83';

describe('Component83', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component83 />);
    expect(baseElement).toBeTruthy();
  });
});

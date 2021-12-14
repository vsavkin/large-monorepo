import { render } from '@testing-library/react';

import Component125 from './component125';

describe('Component125', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component125 />);
    expect(baseElement).toBeTruthy();
  });
});

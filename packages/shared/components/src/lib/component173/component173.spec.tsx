import { render } from '@testing-library/react';

import Component173 from './component173';

describe('Component173', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component173 />);
    expect(baseElement).toBeTruthy();
  });
});

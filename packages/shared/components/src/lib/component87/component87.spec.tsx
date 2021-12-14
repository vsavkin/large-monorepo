import { render } from '@testing-library/react';

import Component87 from './component87';

describe('Component87', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component87 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Component205 from './component205';

describe('Component205', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component205 />);
    expect(baseElement).toBeTruthy();
  });
});

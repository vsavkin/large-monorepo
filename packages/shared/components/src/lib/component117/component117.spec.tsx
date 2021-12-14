import { render } from '@testing-library/react';

import Component117 from './component117';

describe('Component117', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component117 />);
    expect(baseElement).toBeTruthy();
  });
});

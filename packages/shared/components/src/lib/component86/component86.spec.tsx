import { render } from '@testing-library/react';

import Component86 from './component86';

describe('Component86', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component86 />);
    expect(baseElement).toBeTruthy();
  });
});

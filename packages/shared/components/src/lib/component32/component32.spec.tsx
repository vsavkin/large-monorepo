import { render } from '@testing-library/react';

import Component32 from './component32';

describe('Component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component32 />);
    expect(baseElement).toBeTruthy();
  });
});

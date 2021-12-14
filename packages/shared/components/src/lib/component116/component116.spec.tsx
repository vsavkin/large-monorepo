import { render } from '@testing-library/react';

import Component116 from './component116';

describe('Component116', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component116 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Component162 from './component162';

describe('Component162', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component162 />);
    expect(baseElement).toBeTruthy();
  });
});

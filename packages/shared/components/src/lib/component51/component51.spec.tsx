import { render } from '@testing-library/react';

import Component51 from './component51';

describe('Component51', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component51 />);
    expect(baseElement).toBeTruthy();
  });
});

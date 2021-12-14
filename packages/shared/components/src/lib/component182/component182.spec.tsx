import { render } from '@testing-library/react';

import Component182 from './component182';

describe('Component182', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component182 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Component30 from './component30';

describe('Component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component30 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Component136 from './component136';

describe('Component136', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component136 />);
    expect(baseElement).toBeTruthy();
  });
});

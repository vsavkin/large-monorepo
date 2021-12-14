import { render } from '@testing-library/react';

import Component40 from './component40';

describe('Component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component40 />);
    expect(baseElement).toBeTruthy();
  });
});

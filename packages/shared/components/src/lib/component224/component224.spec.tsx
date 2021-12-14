import { render } from '@testing-library/react';

import Component224 from './component224';

describe('Component224', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component224 />);
    expect(baseElement).toBeTruthy();
  });
});

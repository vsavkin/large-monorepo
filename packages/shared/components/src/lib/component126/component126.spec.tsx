import { render } from '@testing-library/react';

import Component126 from './component126';

describe('Component126', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component126 />);
    expect(baseElement).toBeTruthy();
  });
});

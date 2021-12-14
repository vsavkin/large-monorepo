import { render } from '@testing-library/react';

import Component233 from './component233';

describe('Component233', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component233 />);
    expect(baseElement).toBeTruthy();
  });
});

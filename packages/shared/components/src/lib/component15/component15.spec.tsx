import { render } from '@testing-library/react';

import Component15 from './component15';

describe('Component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component15 />);
    expect(baseElement).toBeTruthy();
  });
});

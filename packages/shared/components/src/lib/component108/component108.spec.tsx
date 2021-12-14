import { render } from '@testing-library/react';

import Component108 from './component108';

describe('Component108', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component108 />);
    expect(baseElement).toBeTruthy();
  });
});

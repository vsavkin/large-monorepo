import { render } from '@testing-library/react';

import Component144 from './component144';

describe('Component144', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component144 />);
    expect(baseElement).toBeTruthy();
  });
});

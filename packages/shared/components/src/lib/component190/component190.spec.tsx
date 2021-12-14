import { render } from '@testing-library/react';

import Component190 from './component190';

describe('Component190', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component190 />);
    expect(baseElement).toBeTruthy();
  });
});

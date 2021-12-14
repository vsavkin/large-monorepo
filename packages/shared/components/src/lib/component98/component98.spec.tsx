import { render } from '@testing-library/react';

import Component98 from './component98';

describe('Component98', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component98 />);
    expect(baseElement).toBeTruthy();
  });
});
